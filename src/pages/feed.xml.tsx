import { Feed } from 'feed'
import { GetServerSideProps } from 'next'
import { getPublicArticles } from '../article'

const FeedComponent = () => {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const author = {
    name: 'Kirill Rogovoy',
    email: 'flash.kirill@gmail.com',
    link: 'https://rogovoy.me',
  }

  const feed = new Feed({
    title: 'Kirill Rogovoy',
    description: "Kirill Rogovoy's blog",
    id: 'https://rogovoy.me/blog',
    link: 'https://rogovoy.me/blog',
    language: 'en',
    image: 'https://rogovoy.me/kirill-rogovoy.jpg',
    favicon: 'https://rogovoy.me/favicon.png',
    copyright: 'All rights reserved 2022, Kirill Rogovoy',
    updated: new Date('2022-04-25'),
    generator: '---',
    feedLinks: {
      atom: 'https://rogovoy.me/feed.xml',
    },
    author,
  })

  const articles = getPublicArticles().filter((article) => !article.hidden && !article.origin)

  for (const article of articles) {
    feed.addItem({
      title: article.title,
      id: `https://rogovoy.me/blog/${article.id}`,
      link: `https://rogovoy.me/blog/${article.id}`,
      description: article.description,
      image: article.imageUrl,
      date: new Date(article.date),
      author: [author],
    })
  }

  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate')
  res.setHeader('Content-Type', 'text/xml')

  res.write(feed.atom1())
  res.end()

  return {
    props: {},
  }
}

export default FeedComponent
