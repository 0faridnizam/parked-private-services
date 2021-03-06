import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="preconnect" href="https://fontbit.io" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://fontbit.io/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        </Head>
        <body className="dark">
          <noscript> ¯\_(ツ)_/¯ </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
