import { renderArticle } from '../../article'
import Article from '../../../articles/writing-html-sucks.mdx'

const id = 'writing-html-sucks'
export default function() {
  return renderArticle(id, Article)
}
