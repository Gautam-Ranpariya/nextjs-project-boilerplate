import { requestHandler } from 'common/api/lib/requestHandler'
import { getArticleApi } from 'common/api/services/articleApi'
import { setArticle } from './slice'
import { ApiResponse, AxiosValidationError } from 'types/global'
import { setError, setIsLoading, setValidationErrors } from '../common/slice'
import { AppDispatch } from '../../store'

// get article image
export const getArticleThunk = () => async (dispatch: AppDispatch) => {
  await requestHandler<ApiResponse<Article.IProduct>>({
    apiCall: getArticleApi,
    handlers: {
      onBefore: () => {
        dispatch(setIsLoading(true))
      },
      onSuccess: (data: ApiResponse<Article.IProduct>) => {
        dispatch(setArticle(data?.data))
      },
      onError: (error: AxiosValidationError) => {
        dispatch(setValidationErrors(error))
      },
      onFail: (error: string) => {
        dispatch(setError(error))
      },
      onAfter: () => {
        dispatch(setIsLoading(false))
      },
    },
  })
}
