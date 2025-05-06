/**
 * @file next js common layout page
 */
import React from 'react';
import Head from 'next/head';

import Main from './main';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
      <>
        <Head>
          <meta charSet='utf-8' />

          {/* -- pre load common assets -- */}
          <link
            rel='preload'
            as='image'
            href='https://dza2kd7rioahk.cloudfront.net/assets/svgs/logo.svg'
          />

          {/* !<-- pre connect internal domains --> */}
          <link
              rel='preconnect'
              href='https://dza2kd7rioahk.cloudfront.net'
          />

          {/* !<-- pre connect analytics domains --> */}
          <link rel='preconnect' href='https://analytics.google.com' />
          <link rel='preconnect' href='https://www.googletagmanager.com' />
          <link rel='preconnect' href='https://connect.facebook.net' />

          {/* <!-- page speed optimizations ends --> */}
          <meta
              name='viewport'
              content='width=device-width, initial-scale=1, user-scalable=0'
          />
          <meta
              name='google-site-verification'
              content='ybi-1L6zVd7kUtsVNW2goiWwt8lcjYA4OeQE9SBHt78'
          />
        </Head>
        <Main>{children}</Main>
      </>    
    );
}
