import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/web/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/web/favicon.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://astraeacentrale.github.io/assets/css/_main.css" type="text/css" media="all" />
        <meta name="theme-color" content="#0c1539" />
        <meta name="msapplication-TileColor" content="#0c1539" />
        <meta name="msapplication-navbutton-color" content="#0c1539" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#0c1539" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
