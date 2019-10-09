import Link from 'next/link'
import {Article} from '../article';

interface Props {
  articles: Article[]
}

export default ({ articles }: Props) => <div style={{margin: '0 auto'}}>
  <ul>
      {articles.map(post => (
        <li key={post.id}>
          {post.origin
            ? <a href={post.origin} className="postLink" target="_blank">{`${post.title}, ${new URL(post.origin).hostname}`}</a>
            : <Link href={`/articles/${post.id}`} >
              <a className="postLink">{post.title}</a>
            </Link>
          }
            <span className="postInfo">
              <span> — </span>
              {post.date}
            </span>
            <br />
            <span className="description">{post.description}</span>
        </li>
      ))}
  </ul>
  <style jsx>{`
    li {
      font-size: 20px;
      margin-botton: 30px;
      list-style-type: square;
    }
    .postInfo {
        font-size: 14px;
    }
    .postInfo a {
      font-weight: normal;
    }
    .description {
        margin-top: 5px;
        font-size: 14px;
    }
  `}</style>
</div>
