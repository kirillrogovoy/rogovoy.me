import Head from 'next/head'

export function TweetEmbedded(props: { tweetUrl: string }) {
  return (
    <>
      <Head>
        <script key="twitter-widgets" async src="https://platform.twitter.com/widgets.js"></script>
      </Head>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          After a ground-up redesign, I&#39;m going to finally launch Impulse the next week! 🎉
          <br />
          <br />
          Wish me luck, haha
          <br />
          <br />
          If you use it, please upgrade to the latest version and tell me what you think.
          <br />
          <br />
          If you don&#39;t, now is the best moment to try it out.
        </p>
        &mdash; Kirill Rogovoy (@krogovoy){' '}
        <a href={`${props.tweetUrl}?ref_src=twsrc%5Etfw`}>September 23, 2022</a>
      </blockquote>{' '}
    </>
  )
}
