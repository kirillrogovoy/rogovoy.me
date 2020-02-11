import Document, { Head, Main, NextScript } from 'next/document'

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
        </body>
      </html>
    )
  }
}
