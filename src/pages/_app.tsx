import '../tailwind.css'
import { AppPropsType } from 'next/dist/next-server/lib/utils'
import {useEffect} from 'react'
import {GA_TRACKING_ID} from '../components/google-analytics'

declare global {
  // it's important to have an interface here to append to the global type
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    gtag: (a: string, b: string, c: Record<string, string>) => void
  }
}

export default function App({ Component, pageProps, router }: AppPropsType) {
  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      window.gtag('config', GA_TRACKING_ID, {
        ['page_location']: location.href,
      })
    })
  }, [])
  return <Component {...pageProps} />
}
