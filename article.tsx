import Article from './components/article'

export interface Article {
  id: string
  date: string
  title: string
  description: string
  tags: string[]

  origin?: string
  hidden?: boolean
}
const articles: Article[] = [
  {
    id: 'here-are-some-amazing-advantages-of-go-that-you-dont-hear-much-about',
    date: '01.02.2018',
    title: 'Here are some amazing advantages of Go that you don’t hear much about',
    description: 'I discuss why you should give Go a chance and where to start.',
    tags: ['golang'],
    origin: 'https://freecodecamp.org/news/here-are-some-amazing-advantages-of-go-that-you-dont-hear-much-about-1af99de3b23a/',
  },
  {
    id: 'test',
    date: '01.02.2018',
    title: 'test title',
    description: 'test description',
    tags: ['test'],
    hidden: true,
  },
]

export function renderArticle(id: string, content: string) {
  const articleMeta = articles.find(a => a.id === id)!
  return <Article article={articleMeta} content={content} />
}

export function getAllArticles() {
  return articles.filter(post => !post.hidden)
}

export function getRandomArticles(number: number) {
  return shuffle(getAllArticles()).slice(0, number)
}

function shuffle<T>(b: T[]): T[] {
  const a = [...b]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
