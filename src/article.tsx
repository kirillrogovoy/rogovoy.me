import {
  ArticleComponent,
  ArticleImageProps,
  ArticleVideoProps,
  Img,
  Video,
} from './components/article'
import { JSXElementConstructor, PropsWithChildren, AnchorHTMLAttributes } from 'react'
import { Link } from './components/link'
import { MDXProvider, Components } from '@mdx-js/react'
import { TweetEmbedded } from './components/tweet-embedded'

export type ArticleMeta = {
  id: string
  date: string
  title: string
  description: string
  keywords: string[]

  origin?: string
  hidden?: boolean
  tweetId?: string
  imageUrl?: string
}
const articles: ArticleMeta[] = [
  {
    id: 'impulse-launch',
    date: '2022-10-11',
    title: 'How I launched Impulse.dev',
    description: `I've been working on Impulse for six months, and a few weeks ago—Sep 28—I decided to finally make an official launch.

In this post, I want to reflect on what happened before, during, and after that launch.
What I've learned and what I could have done differently.`,
    keywords: ['impulse.dev', 'launch', 'open source'],
  },
  {
    id: 'i-quit-my-business-to-start-dev-tool',
    date: '2022-07-21',
    title: 'I quit my business to start an open-source dev tool',
    description:
      'This is a story of me quitting my job as a web dev, starting my first SaaS, burning through all of my savings, and finding what I really wanted to do.',
    keywords: ['impulse.dev', 'building in public', 'open source'],
  },
  {
    id: 'writing-html-sucks-less',
    date: '2022-07-05',
    title: 'Writing HTML sucks less with Impulse',
    description: 'Introducing Impulse - yes-code UI editor',
    keywords: ['html', 'nocode', 'react', 'tailwind'],
  },
  {
    id: 'writing-html-sucks',
    date: '2022-04-25',
    title: "Writing HTML sucks and No-code doesn't help",
    description:
      'We can do better than writing HTML manually, but there are no developer-focused solutions.',
    keywords: ['html', 'nocode', 'react', 'tailwind'],
  },
  {
    id: 'here-are-some-amazing-advantages-of-go-that-you-dont-hear-much-about',
    date: '2018-02-01',
    title: 'Here are some amazing advantages of Go that you don’t hear much about',
    description: 'I discuss why you should give Go a chance and where to start.',
    keywords: ['golang'],
    origin:
      'https://freecodecamp.org/news/here-are-some-amazing-advantages-of-go-that-you-dont-hear-much-about-1af99de3b23a/',
  },
]

export function renderArticle(
  articleId: string,
  Content: JSXElementConstructor<{ components?: Components }>,
) {
  const articleMeta = articles.find((a) => a.id === articleId)!
  const components: Components = {
    a: (props: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => (
      <Link href={props.href!} style={2}>
        {props.children}
      </Link>
    ),
    Img: (props: ArticleImageProps) => {
      const src = props.src.startsWith('@')
        ? `/articles/${articleMeta.id}/${props.src.replace('@', '')}`
        : props.src
      return <Img {...props} src={src} />
    },
    Video: (props: ArticleVideoProps) => {
      const src = props.src.startsWith('@')
        ? `/articles/${articleMeta.id}/${props.src.replace('@', '')}`
        : props.src
      return <Video {...props} src={src} />
    },
    Link,
    TweetEmbedded,
  }
  return (
    <ArticleComponent article={articleMeta}>
      <MDXProvider components={components}>
        <Content />
      </MDXProvider>
    </ArticleComponent>
  )
}

export function getAllArticles() {
  return articles
}

export function getPublicArticles() {
  return articles.filter((post) => !post.hidden)
}

export function getRandomArticles(number: number, exceptArticleId: string) {
  return shuffle(getPublicArticles().filter((a) => a.id !== exceptArticleId)).slice(0, number)
}

function shuffle<T>(b: T[]): T[] {
  const a = [...b]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
