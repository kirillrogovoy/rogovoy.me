import Link from 'next/link'

export default ({ posts }) => <div style={{margin: '0 auto'}}>
  <ul>
      {posts.map(post => (
        <li key={post.id} style={{marginBottom: '30px', listStyleType: 'square'}}>
            <Link href={post.canonical ? post.canonical : `/${post.id}`}>
              <a className="postLink">{post.title}</a>
            </Link>
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
