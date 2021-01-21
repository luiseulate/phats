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
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <title>Luis Martínez - Strava</title>
          <meta name="description" content="Physical activity stats from Strava" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script type="text/javascript" src="/static/modernizr-2.8.3-respond-1.4.2.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Footer />
          <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
          
        </body>
      </Html>
    )
  }
}

export default MyDocument