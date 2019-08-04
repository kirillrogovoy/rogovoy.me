import Post from './components/post'

const posts = [
  {
    id: 'here-are-some-amazing-advantages-of-go-that-you-dont-hear-much-about',
    date: '01.02.2018',
    title: 'Here are some amazing advantages of Go that you don’t hear much about',
    description: 'I discuss why you should give Go a chance and where to start.',
    canonical: 'https://www.freecodecamp.org/news/here-are-some-amazing-advantages-of-go-that-you-dont-hear-much-about-1af99de3b23a/',
  },
]

export function renderPost(id, content) {
  const meta = posts.find(a => a.id === id)
  return <Post meta={meta} content={content} />
}

export function getAllPosts() {
  return posts.filter(post => !post.isDraft)
}

export function getRandomPosts(number) {
  return shuffle(getAllPosts()).slice(0, number)
}

function shuffle(b) {
  const a = [...b]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
