import Head from 'next/head'
import Layout from '../components/articles-layout'
import ArticleList from '../components/article-list'
import { getAllArticles } from '../article'

export default () => <div>
  <Layout>
    <Head>
      <title>Kirill Rogovoy — Articles</title>
    </Head>
    <ArticleList articles={getAllArticles()} />
  </Layout>
</div>
