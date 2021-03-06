/* eslint-disable max-len */
import Document, { Head, Main, NextScript, Html } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="tr">
        <Head>
          <link href="/fonts/Nunito/nunito.css" rel="stylesheet" />
          <link href="/fonts/WorkSans/work-sans.css" rel="stylesheet" />
          <link href="/styles/index.css" rel="stylesheet" />
          <link href="/manifest.json" rel="manifest" />
          <link rel="apple-touch-icon" href="/images/icon/192x192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
