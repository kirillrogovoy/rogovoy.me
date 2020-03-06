import { renderArticle } from '../../article'
import Article from '../../../articles/test.mdx'

const id = 'test'
export default function() {
  return renderArticle(id, Article)
}
