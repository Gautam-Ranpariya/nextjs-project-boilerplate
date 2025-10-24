import axios, { AxiosInstance } from 'axios'
import { apiURL, apiVersion } from 'common/utils/env-config'

export const apiInstance: AxiosInstance = axios.create({
  baseURL: `${apiURL}/${apiVersion}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
})
