/**
 * @file next js common layout page
 */

import React from 'react';
// import { Metadata } from 'next';
import Script from 'next/script';
// import { headers } from 'next/headers';

import Main from './main';
import './global.scss';
// import { PROD_WEBSITE_HOSTS } from '@/constants/AppConstant';

// export async function generateMetadata(): Promise<Metadata> {
//     const host = headers().get('host'); // Get the host header

//     if (!host || PROD_WEBSITE_HOSTS.includes(host)) {
//         return {};
//     }

//     return {
//         robots: {
//             index: false,
//             follow: false,
//             nocache: false,
//         },
//     };
// }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head>
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

                {/* {
                    Object.keys(mutualFund).map((item: any) => getMetaTags(item))
                } */}

                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <Script
                    defer
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_GTAG_ID}`}
                />

                <Script id='data-layer-script' type='text/javascript'>
                    {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_GTAG_ID}');
          `}
                </Script>
                {/* <!-- End Google Analytics -- -- Google Tag Manager --> */}

                <Script id='google-tag-manager-script' type='text/javascript'>
                    {`(function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.defer=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_ANALYTICS_GTM_ID}');
          `}
                </Script>

                {/* <!-- End Google Tag Manager -- -- Appsflyer Smart Banner Script --> */}
            </head>
            <body>
                <Main>{children}</Main>
                <noscript>You need to enable JavaScript to run this website</noscript>

                {/* <!-- Google Tag Manager (noscript) --> */}
                <noscript>
                    <iframe
                        title='public-analytics-gtm'
                        src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_ANALYTICS_GTM_ID}`}
                        height='0'
                        width='0'
                        style={{
                            display: 'none',
                            visibility: 'hidden'
                        }}
                    />
                </noscript>
                {/* <!-- End Google Tag Manager (noscript) --> */}

                <Script id='vh-script' type='text/javascript'>
                    {`var vh = window.innerHeight * 0.01;
             document.documentElement.style.setProperty('--vh', vh + 'px');
              window.addEventListener('resize', () => {
                // we execute the same script as before
                vh = window.innerHeight * 0.01;
               document.documentElement.style.setProperty('--vh', vh + 'px');
             });
          `}
                </Script>

            </body>
        </html>
    );
}
