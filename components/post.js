import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import Separator from './separator'
import { getRandomPosts } from '../post'

export default function ({ meta, content }) {
  return <Layout>
    <Head>
      <title>{meta.title}</title>
      <meta name="og:title" content={meta.title} />
      <meta name="og:image" content={`/static/${meta.id}.jpg`} />
      <meta name="description" content={meta.description} />
      <meta name="og:description" content={meta.description} />
      <meta name="keywords" content={meta.tags.join(',')} />
    </Head>
    <Link href="/">
      <a style={{color: '#777', textDecoration: 'underline', fontWeight: '300'}}>Назад</a>
    </Link>
    <div style={{
      marginBottom: '50px'
    }}>
      <h1 style={{
        color: '#d07070',
        fontSize: '42px',
        letterSpacing: '-0.63px',
        marginBottom: '10px'
      }}>
        {meta.title}
      </h1>
      <div style={{fontSize: '17px'}}>
        <span>{meta.date}</span>, <a style={{fontWeight: '300'}} href={meta.fbLink}>обсуждение в Facebook</a>
      </div>
    </div>

    <div className="markdown" dangerouslySetInnerHTML={{__html: content}}></div>

    <Separator />

    <OtherPosts currentPostId={meta.id} />

    <style jsx global>{`
      .markdown {
        font-size: 21px;
        letter-spacing: 0.2px;
        line-height: 30px;
        text-align: start;
      }
      .markdown img {
        width: 100%;
        margin-top: 15px;
      }
      .markdown h2 {
        font-size: 34px;
        line-height: 39px;
        margin: 56px 0 0 0;
      }
      .markdown h2 + p {
        margin-top: 13px;
      }
      .markdown p {
        margin: 29px 0 0 0;
      }
      .markdown ul, .markdown ol {
        margin-top: 5px;
      }
      .markdown li {
        list-style-type: square;
      }
    `}</style>
  </Layout>
}

function OtherPosts(props) {
  const posts = getRandomPosts(3).filter(post => post.id !== props.currentPostId)
  if (posts.length === 0) {
    return null
  }
  return <div>
    <h3>Другие статьи:</h3>
    <PostList posts={posts} />
  </div>
}
