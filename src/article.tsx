import { ArticleComponent } from './components/article'
import {JSXElementConstructor, PropsWithChildren, AnchorHTMLAttributes} from 'react'
import {Link} from './components/link'
import {MDXProvider, Components} from '@mdx-js/react'

export interface ArticleMeta {
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
    id: 'here-are-some-amazing-advantages-of-go-that-you-dont-hear-much-about',
    date: '01.02.2018',
    title: 'Here are some amazing advantages of Go that you don’t hear much about',
    description: 'I discuss why you should give Go a chance and where to start.',
    keywords: ['golang'],
    origin: 'https://freecodecamp.org/news/here-are-some-amazing-advantages-of-go-that-you-dont-hear-much-about-1af99de3b23a/',
  },
  {
    id: 'writing-html-sucks',
    hidden: true,
    date: '2022-04-25',
    title: 'Writing HTML sucks and No-code doesn\'t help',
    description: '???',
    keywords: ['html', 'nocode'],
    tweetId: '???',
  },
]

export function renderArticle(id: string, Content: JSXElementConstructor<any>) {
  const articleMeta = articles.find(a => a.id === id)!
  const components: Components = {
    a: (props: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) =>
      <Link href={props.href!} style={2}>{props.children}</Link>
  }
  return <ArticleComponent article={articleMeta}>
    <MDXProvider components={components} >
      <Content/>
    </MDXProvider>
  </ArticleComponent>
}

export function getAllArticles() {
  return articles.filter(post => !post.hidden)
}

export function getRandomArticles(number: number, exceptArticleId: string) {
  return shuffle(getAllArticles().filter(a => a.id !== exceptArticleId)).slice(0, number)
}

function shuffle<T>(b: T[]): T[] {
  const a = [...b]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
