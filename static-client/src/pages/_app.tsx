import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import React, { useState, useEffect } from "react";
import Meta from "@/components/Meta";

import { PROD_WEBSITE_HOSTS } from "@/constants/AppConstant";
import "@/globals.scss";

import RootLayout from '../../src/pages/layout';
import { Theme } from '../Themes/Theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
    const host = window.location.host;

    if (process.env.ENVIRONMENT === 'staging') {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex, nofollow';
      document.head.appendChild(meta);
    }
  }, []);

  if (!showChild) {
    return (<Meta {...pageProps}/>)
  }

  return (
    <RootLayout>
     <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </RootLayout>
  );
}
