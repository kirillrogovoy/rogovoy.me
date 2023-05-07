import { PropsWithChildren } from 'react'
import { EmailForm } from '../../../components/email-form'
import { Separator } from '../../../components/separator'
import { Link } from '../../../components/link'

export default function (props: PropsWithChildren<unknown>) {
  return (
    <div className="font-serif mx-auto" style={{ maxWidth: '90%', width: '44rem' }}>
      <header>
        <Link href="/">
          <h1 className="text-center block mt-12 mb-1 text-5xl">Kirill Rogovoy</h1>
        </Link>
        <div className="mx-auto text-lg text-center">Code · Design · BJJ · Travel · Beer</div>
        <div className="text-center">
          <Link style={1} href="/">
            About
          </Link>
          {' · '}
          <Link style={1} href="https://twitter.com/krogovoy">
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
    </div>
  )
}
