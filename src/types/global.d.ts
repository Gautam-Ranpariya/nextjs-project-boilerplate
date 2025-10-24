import { AxiosResponse } from 'axios'

type RootLayoutProps = {
  children: React.ReactNode
  params: Promise<Params>
}

type Params = {
  locale: Locale
}

type Locale =
  | 'en-US' // English
  | 'zh-CN' // Chinese (Simplified)
  | 'ar-SA' // Arabic
  | 'fr-FR' // French
  | 'hi-IN' // Hindi
// | "es-ES"   // Spanish
// | "pt-BR"   // Portuguese (Brazil)
// | "ru-RU"   // Russian
// | "ja-JP"   // Japanese
// | "de-DE";  // German

type RootLayoutParams = {
  locale: Locale | string
}

type LocalProviderProps = {
  children: React.ReactNode
  locale: Locale
  messages: Record<string, string>
}

type NextImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
}

type AxiosValidationError = {
  [key: string]: string
}

interface IRequestHandlerConfig<T> {
  apiCall: () => Promise<AxiosResponse<T>>
  handlers?: {
    onBefore?: () => void
    onSuccess: (data: T) => void | Promise<void>
    onError: (errors: AxiosValidationError) => void | Promise<void>
    onFail: (message: string) => void | Promise<void>
    onAfter?: () => void
  }
}

interface ApiResponse<T> {
  statusCode: number
  data: T
  message: string
  success: boolean
}
