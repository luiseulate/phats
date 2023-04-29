import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Footer } from '../components/Footer'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <meta charset="utf-8" />
        <meta name="description" content="Luis Eulate - Rutas y vídeos de montaña" />
        <meta name="author" content="Luis Martínez" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>Phast</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/assets/css/images/ico/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/assets/css/images/ico/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/assets/css/images/ico/favicon-16x16.png" />
        <link rel="manifest" href="/static/assets/css/images/ico/site.webmanifest" />
        <link rel="mask-icon" href="/static/assets/css/images/ico/safari-pinned-tab.svg" color="#18bc9c" />
        <link rel="shortcut icon" href="/static/assets/css/images/ico/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Phast" />
        <meta name="application-name" content="Phast" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="msapplication-config" content="/static/assets/css/images/ico/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <Head />
        <body className="is-preload">
          <Main />
          <NextScript />
          <Footer />
          <script src="/static/assets/js/scripts.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
