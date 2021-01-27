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
        <Head />
        <body class="is-preload">
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