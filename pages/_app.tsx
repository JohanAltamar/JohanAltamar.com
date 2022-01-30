import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

/**
 * This is the main entry point for the application.
 * @return {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
