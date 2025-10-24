import { AxiosError } from 'axios'
import { IRequestHandlerConfig } from 'types/global'

export const requestHandler = async <T>({
  apiCall,
  handlers = {
    onBefore: () => {},
    onSuccess: () => {},
    onError: () => {},
    onFail: () => {},
    onAfter: () => {},
  },
}: IRequestHandlerConfig<T>): Promise<T | void> => {
  const { onBefore, onSuccess, onError, onFail, onAfter } = handlers

  try {
    // start loading
    onBefore?.()

    // ✅ Await the API call (must return a promise)
    const response = await apiCall()

    // handle response
    if (response?.status === 200 && response.data !== undefined) {
      onSuccess?.(response.data)
      return response.data
    } else {
      onFail?.('Non-200 response')
      throw new Error('Non-200 response')
    }
  } catch (err: any) {
    // handle error
    const axiosError = err as AxiosError
    const data = axiosError.response?.data

    if (err?.response?.status === 401) {
      await Promise.resolve(onFail?.('Please login again'))
      return
    }

    if (
      data &&
      typeof data === 'object' &&
      'errors' in data &&
      data.errors &&
      Object.keys((data as { errors: any }).errors).length > 0
    ) {
      // validation errors
      onError?.((data as { errors: any }).errors)
    } else if (data && typeof data === 'object' && 'message' in data) {
      // general error with message
      onFail?.((data as { message: string }).message)
    } else {
      // unknown error
      onFail?.(axiosError.message || 'Something went wrong')
    }
  } finally {
    // stop loading
    onAfter?.()
  }
}
