import { lazy, Suspense } from 'react'

// Component Imports
const ArticleDetail = lazy(() => import('./components/ArticleDetail'))

const ArticlePage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ArticleDetail />
      </Suspense>
    </>
  )
}

export default ArticlePage
