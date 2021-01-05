import Head from 'next/head'

import '../styles/globals.css'
import Header from '../components/header'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Printox - Printing for the whole herd</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
