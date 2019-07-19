import Post from './components/post'

const posts = [
  {
    id: 'rabota-za-kompiuterom-stoya',
    date: '12.12.2018',
    title: 'Работать за компьютером стоя: зачем и как',
    description: 'Почему работать сидя – вредно и что можно сделать',
    tags: [],
    fbLink: 'https://www.facebook.com/permalink.php?story_fbid=537623056710013&id=100013869703829',
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
