import { Html, Head, Main, NextScript } from 'next/document'
import config from '@/config/config.json'



export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-4331947544284669" />
        <link rel='shortcut icon' type='image/x-icon' href={`${config.basePath}/favicon.ico`} />
        <link rel='apple-touch-icon' sizes='180x180' href={`${config.basePath}/apple-touch-icon.png`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
