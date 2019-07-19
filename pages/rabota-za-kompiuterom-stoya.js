import { renderPost } from '../post'
import text from '../posts/rabota-za-kompiuterom-stoya.md'

const id = 'rabota-za-kompiuterom-stoya'
export default function() {
  return renderPost(id, text)
}
