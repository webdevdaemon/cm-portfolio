import React from 'react'
import Head from 'next/head'

export default ({styleTag}) => (
  <div>
    <Head>
      <meta
        name="viewport"
        content="width=device-width,
        initial-scale=1"
      />
      <meta
        charSet="utf-8"
      />

    </Head>
    <style jsx global>{`

      html {
        box-sizing: border-box;
        background: #000;
        font: 16px Raleway;
        color: #333;
        margin: 0;
        padding: 0;
        height: 100%;
        min-height: 100vh;
        width: 100%;
        min-width: 100vw;
      }

      *, *:before, *:after {
        box-sizing: inherit;
      }

      .page {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        min-height: 100%;
        width: 100%;
      }

      ${styleTag}

    `}</style>
  </div>
)
