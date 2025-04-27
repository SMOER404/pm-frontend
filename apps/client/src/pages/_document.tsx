import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta name="application-name" content="POIZON MARKET" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="POIZON MARKET" />
        <meta name="description" content="Магазин стильной одежды" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />

        {/* iOS */}
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/ios/180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/static/favicons/ios/167.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/favicons/ios/152.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/favicons/ios/120.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/favicons/ios/114.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/ios/76.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/static/favicons/ios/60.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/static/favicons/ios/57.png" />
        <link rel="apple-touch-icon" sizes="29x29" href="/static/favicons/ios/29.png" />

        {/* Android */}
        <link rel="icon" type="image/png" sizes="512x512" href="/static/favicons/android/android-launchericon-512-512.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/static/favicons/android/android-launchericon-192-192.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/static/favicons/android/android-launchericon-144-144.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/favicons/android/android-launchericon-96-96.png" />

        {/* Windows */}
        <meta name="msapplication-TileImage" content="/static/favicons/windows11/Square150x150Logo.scale-100.png" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/static/favicons/icons.json" />

        {/* Default */}
        <link rel="icon" type="image/svg+xml" href="/static/images/icon-black.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 