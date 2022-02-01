import React from "react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";

/**
 * This is the main entry point for the application.
 * @return {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
