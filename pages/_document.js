import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
    });

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, styles: [...initialProps.styles, ...sheet.getStyleElement()] }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href='https://unpkg.com/normalize.css@8.0.1/normalize.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
};
