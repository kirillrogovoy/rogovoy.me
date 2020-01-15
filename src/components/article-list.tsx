import Link from 'next/link'
import { ArticleMeta } from '../article'

interface Props {
  articles: ArticleMeta[]
}

export const ArticleList = ({ articles }: Props) => (
  <div style={{ margin: '0 auto' }}>
    <ul>
      {articles.map(article => (
        <li key={article.id}>
          {article.origin ? (
            <a href={article.origin} target="_blank" rel="noreferrer noopener">{`${
              article.title
            }, ${new URL(article.origin).hostname}`}</a>
          ) : (
            <Link href={`/blog/${article.id}`}>
              <a>{article.title}</a>
            </Link>
          )}
          <span className="articleInfo">
            <span> — </span>
            {article.date}
          </span>
          <br />
          <span className="description">{article.description}</span>
        </li>
      ))}
    </ul>
    <style jsx>{`
      li {
        font-size: 20px;
        margin-bottom: 30px;
        list-style-type: square;
      }
      .articleInfo {
        font-size: 14px;
      }
      .articleInfo a {
        font-weight: normal;
      }
      .description {
        margin-top: 5px;
        font-size: 14px;
      }
    `}</style>
  </div>
)
