import path from 'path'
import { getAllArticles } from '../../../article'
import fs from 'fs/promises'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Link } from '../../../components/link'
import { Components } from '@mdx-js/react'
import { PropsWithChildren, AnchorHTMLAttributes } from 'react'
import {
  ArticleImageProps,
  Img,
  ArticleVideoProps,
  Video,
  ArticleComponent,
} from '../../../components/article'
import { Separator } from '../../../components/separator'
import { TweetEmbedded } from '../../../components/tweet-embedded'
import { Metadata } from 'next'
import { GetGood } from '../../../components/GetGood'

export default async function ({ params }: any) {
  const articleId = params.slug as string
  const article = getAllArticles().find((a) => a.id === articleId)!

  const components: Components = {
    a: (props: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => (
      <Link href={props.href!} style={2}>
        {props.children}
      </Link>
    ),
    Img: (props: ArticleImageProps) => {
      const src = props.src.startsWith('@')
        ? `/articles/${article.id}/${props.src.replace('@', '')}`
        : props.src
      return <Img {...props} src={src} />
    },
    Video: (props: ArticleVideoProps) => {
      const src = props.src.startsWith('@')
        ? `/articles/${article.id}/${props.src.replace('@', '')}`
        : props.src
      return <Video {...props} src={src} />
    },
    Link,
    TweetEmbedded,
    Separator,
    GetGood,
  }

  const articleFileContent = await fs.readFile(
    path.join(process.cwd(), `articles/${article.id}.mdx`),
    'utf8',
  )

  return (
    <ArticleComponent article={article}>
      {/* @ts-expect-error Async Server Component Workaround */}
      <MDXRemote source={articleFileContent} components={components} />
    </ArticleComponent>
  )
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const articleId = params.slug as string
  const article = getAllArticles().find((a) => a.id === articleId)!

  return {
    title: article.title + ' — Kirill Rogovoy',
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      images: `https://rogovoy.me/articles/${article.id}/meta.jpg`,
    },
    twitter: {
      title: article.title,
      description: article.description,
      card: 'summary_large_image',
      images: `https://rogovoy.me/articles/${article.id}/meta.jpg`,
    },
  }
}

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.id,
  }))
}
