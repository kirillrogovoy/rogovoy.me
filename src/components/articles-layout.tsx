import { Link } from './link'
import { Separator } from './separator'
import { GoogleAnalytics } from './google-analytics'
import { PropsWithChildren } from 'react'
import { EmailForm } from './email-form'

export const ArticleLayout = (props: PropsWithChildren<{}>) => (
  <div className="fade-in font-serif mx-auto" style={{ maxWidth: '90%', width: '44rem' }}>
    <header>
      <Link href="/">
        <h1 className="text-center block mt-12 mb-1 text-5xl">Kirill Rogovoy</h1>
      </Link>
      <div className="mx-auto text-lg text-center">
        Code · Design · Workout · Travel · Beer
      </div>
      <div className="text-center">
        <Link style={1} href="/">
          About
        </Link>
          {' · '}
        <Link style={1} href="https://twitter.com">
          Twitter
        </Link>
          {' · '}
        <Link style={1} href="/blog">
          Blog
        </Link>
      </div>
    </header>

    <Separator />

    <EmailForm />

    <main>{props.children}</main>

    <GoogleAnalytics />
  </div>
)
