import { renderArticle } from '../../article'
import text from '../../../articles/test.md'

const id = 'test'
export default function() {
  return renderArticle(id, text)
}
