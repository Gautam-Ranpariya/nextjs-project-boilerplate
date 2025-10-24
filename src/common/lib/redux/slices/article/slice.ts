import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  article: Article.IProduct | null
}

const initialState: UserState = {
  article: null,
}

const slice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticle(state, action: PayloadAction<Article.IProduct | null>) {
      state.article = action.payload
    },
  },
})

export const { setArticle } = slice.actions

export default slice.reducer
