import Head from 'next/head'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import { getAllPosts } from '../post'

export default () => <div>
  <Layout>
    <Head>
      <title>Kirill Rogovoy — Articles</title>
    </Head>
    <PostList posts={getAllPosts()} />
  </Layout>
</div>
