import Link from 'next/link'
import Head from 'next/head'
import { ArticleLayout } from '../components/articles-layout'
import { ArticleList } from '../components/article-list'
import { Separator } from './separator'
import { getRandomArticles, ArticleMeta } from '../article'
import { EmailForm } from './email-form'

interface Props {
  article: ArticleMeta
  content: string
}

export function ArticleComponent({ article, content }: Props) {
  return (
    <ArticleLayout>
      <Head>
        <title>{article.title + ' — Kirill Rogovoy'}</title>
        <meta name="og:title" content={article.title} />
        <meta name="og:image" content={`/${article.id}.jpg`} />
        <meta name="description" content={article.description} />
        <meta name="og:description" content={article.description} />
        <meta name="keywords" content={article.tags.join(',')} />
      </Head>
      { article.tweetId && <TwitterRetweetButton tweetId={article.tweetId} /> }
      <Link href="/blog">
        <a
          style={{
            color: '#777',
            textDecoration: 'underline',
            fontWeight: 300,
          }}
        >
          Back to the list
        </a>
      </Link>
      <div
        style={{
          marginBottom: '50px',
        }}
      >
        <h1
          style={{
            color: '#d07070',
            fontSize: '42px',
            letterSpacing: '-0.63px',
            marginBottom: '10px',
          }}
        >
          {article.title}
        </h1>
        <div style={{ fontSize: '17px' }}>
          <span>{article.date}</span>
        </div>
      </div>

      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }}></div>

      <Separator />

      <div>
        <div style={{marginBottom: '5px', textAlign: 'center'}}>
          {article.tweetId ? (
            <>Discuss on <a href={`https://twitter.com/krogovoy/status/${article.tweetId}`}>Twitter</a></>
          ): (
          <>Follow me on <a href="https://twitter.com/krogovoy">Twitter</a> or check out my <a href="https://github.com/kirillrogovoy">Github</a></>
          )}
        </div>
        <EmailForm />
      </div>

      <OtherArticles currentArticleId={article.id} />

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
        .markdown ul,
        .markdown ol {
          margin-top: 5px;
        }
        .markdown li {
          list-style-type: square;
        }
      `}</style>
    </ArticleLayout>
  )
}

function OtherArticles({ currentArticleId }: { currentArticleId: string }) {
  const articles = getRandomArticles(3, currentArticleId)
  if (articles.length === 0) {
    return null
  }
  return (
    <div>
      <h3 style={{fontWeight: 'normal'}}>Other articles:</h3>
      <ArticleList articles={articles} />
    </div>
  )
}

function TwitterRetweetButton({ tweetId }: { tweetId: string }) {
  const twitterUrl = new URL('https://twitter.com/intent/retweet')
  twitterUrl.searchParams.append('tweet_id', tweetId)

  return (
    <a
      style={{ position: 'fixed', top: 0, left: '80%', width: '50px' }}
      target="_blank"
      rel="noreferrer noopener"
      href={twitterUrl.toString()}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 455.731 455.731"
        xmlSpace="preserve"
      >
        {' '}
        <g>
          {' '}
          <rect x={0} y={0} style={{ fill: '#333' }} width="455.731" height="455.731" />{' '}
          <path
            style={{ fill: '#FFFFFF' }}
            d="M60.377,337.822c30.33,19.236,66.308,30.368,104.875,30.368c108.349,0,196.18-87.841,196.18-196.18
              c0-2.705-0.057-5.39-0.161-8.067c3.919-3.084,28.157-22.511,34.098-35c0,0-19.683,8.18-38.947,10.107
              c-0.038,0-0.085,0.009-0.123,0.009c0,0,0.038-0.019,0.104-0.066c1.775-1.186,26.591-18.079,29.951-38.207
              c0,0-13.922,7.431-33.415,13.932c-3.227,1.072-6.605,2.126-10.088,3.103c-12.565-13.41-30.425-21.78-50.25-21.78
              c-38.027,0-68.841,30.805-68.841,68.803c0,5.362,0.617,10.581,1.784,15.592c-5.314-0.218-86.237-4.755-141.289-71.423
              c0,0-32.902,44.917,19.607,91.105c0,0-15.962-0.636-29.733-8.864c0,0-5.058,54.416,54.407,68.329c0,0-11.701,4.432-30.368,1.272
              c0,0,10.439,43.968,63.271,48.077c0,0-41.777,37.74-101.081,28.885L60.377,337.822z"
          />{' '}
        </g>{' '}
        <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{' '}
        <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{' '}
      </svg>
    </a>
  )
}
