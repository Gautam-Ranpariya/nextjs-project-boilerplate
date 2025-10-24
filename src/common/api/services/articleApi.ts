import { apiInstance } from '../lib/instance'

// get article
export const getArticleApi = async () => {
  const res = await apiInstance.get(`/public/randomproducts/product/random`)
  return res
}
