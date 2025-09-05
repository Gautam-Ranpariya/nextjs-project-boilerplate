import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // ✅ Example override for mocks
  {
    files: ['src/common/__mocks__/**'],
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
]

export default eslintConfig
