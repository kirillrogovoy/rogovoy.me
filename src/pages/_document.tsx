import Document, { Head, Main, NextScript } from 'next/document'
import { GoogleAnalytics } from '../components/google-analytics'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon.png" />
        </Head>
        <body className="text-primary">
          <Main />
          <NextScript />
          <GoogleAnalytics />
        </body>
      </html>
    )
  }
}
