import { Html, Head, Main, NextScript } from "next/document"

const gtagId = "G-Z6D26XKEDL"

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        {process.env.NODE_ENV === "production" && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtagId}', {
            page_path: window.location.pathname,
          });

          window.gtag = gtag
          `,
              }}
            />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
