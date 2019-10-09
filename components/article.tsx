import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/articles-layout'
import ArticleList from '../components/article-list'
import Separator from './separator'
import { getRandomArticles, Article } from '../article'

interface Props {
  article: Article
  content: string
}

export default function ({ article, content }: Props) {
  return <Layout>
    <Head>
      <title>{article.title}</title>
      <meta name="og:title" content={article.title} />
      <meta name="og:image" content={`/static/${article.id}.jpg`} />
      <meta name="description" content={article.description} />
      <meta name="og:description" content={article.description} />
      <meta name="keywords" content={article.tags.join(',')} />
    </Head>
    <Link href="/articles">
      <a style={{color: '#777', textDecoration: 'underline', fontWeight: 300}}>Back to the list</a>
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
        {article.title}
      </h1>
      <div style={{fontSize: '17px'}}>
        <span>{article.date}</span>
      </div>
    </div>

    <div className="markdown" dangerouslySetInnerHTML={{__html: content}}></div>

    <Separator />

    <OtherPosts currentArticleId={article.id} />

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

function OtherPosts({ currentArticleId }: { currentArticleId: string }) {
  const articles = getRandomArticles(3).filter(post => post.id !== currentArticleId)
  if (articles.length === 0) {
    return null
  }
  return <div>
    <h3>Other articles:</h3>
    <ArticleList articles={articles} />
  </div>
}
