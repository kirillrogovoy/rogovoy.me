import { renderArticle } from '../../article'
import Article from '../../../articles/writing-html-sucks-less.mdx'

const id = 'writing-html-sucks-less'

export default function () {
  return renderArticle(id, Article)
}
