import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosValidationError } from 'types/global'

interface CommonState {
  validationErrors: AxiosValidationError | null
  error: string | null
  isLoading: boolean
}

const initialState: CommonState = {
  error: null,
  validationErrors: null,
  isLoading: false,
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setValidationErrors: (state, action: PayloadAction<AxiosValidationError | null>) => {
      state.validationErrors = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { setError, setValidationErrors, setIsLoading } = commonSlice.actions

export default commonSlice.reducer
