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
      <meta charSet="utf-8"/>
    </Head>
    <style jsx global>{`
      html {
        box-sizing: border-box;
        background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
        color: #333;
        font-family: 'Raleway', 'Exo 2', 'Avenir', sans-serif;
        font-size: 10px;
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

      body {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0;
      }

      .page {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
        margin: 0;
        padding: 0;
        min-height: 100%;
        width: 100%;
      }

      #page-wrap {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0;
      }

      img {
        max-width: 100%;
      }
      ${styleTag}
    `}</style>
  </div>
)
