import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

/**
 * This is the main entry point for the application.
 * @return {JSX.Element}
 */
export default function Document() {
  return (
    <Html>
      <Head>
        <script
          src="https://www.fbgcdn.com/embedder/js/ewm2.js"
          defer
          async
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
