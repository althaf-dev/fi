import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head >
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <Script
            strategy="beforeInteractive"
            defer
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_GTAG_ID}`}
          />

          <Script strategy="beforeInteractive" id='data-layer-script' type='text/javascript'>
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', 'accept_incoming','true');
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_GTAG_ID}');
              `}
          </Script>
          {/* <!-- End Google Analytics -- -- Google Tag Manager --> */}

          <Script strategy="beforeInteractive" id='google-tag-manager-script' type='text/javascript'>
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
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript>You need to enable JavaScript to run this website</noscript>

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            title="public-analytics-gtm"
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_ANALYTICS_GTM_ID}`}
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <Script strategy="beforeInteractive" id="vh-script" type="text/javascript">
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
    </Html>
  );
}
