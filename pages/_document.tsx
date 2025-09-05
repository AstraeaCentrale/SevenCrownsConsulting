import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://astraeacentrale.github.io/assets/css/_main.css" type="text/css" media="all" />
        {/* <title>backend</title> */}
        {/* <link rel="shortcut icon" href="/mongodb.svg" type="image/x-icon" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
