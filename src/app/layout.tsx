import '../../styles/globals.css'
import { PosthogAnalytics } from '../components/posthog'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  weight: ['300', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <PosthogAnalytics />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <body className={`${openSans.className}`}>{children}</body>
    </html>
  )
}
