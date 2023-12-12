import GoogleAnalytics from '@/plugins/GoogleAnalytics'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>test</style>
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
