import Head from 'next/head'
import { ArticleLayout } from '../components/articles-layout'
import { ArticleList } from '../components/article-list'
import { getAllArticles } from '../article'

export default function Blog() {
  return (
    <div>
      <ArticleLayout>
        <Head>
          <title>Kirill Rogovoy — Blog</title>
        </Head>
        <ArticleList articles={getAllArticles()} />
      </ArticleLayout>
    </div>
  )
}
