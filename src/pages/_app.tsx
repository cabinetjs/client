import type { AppProps } from 'next/app'
import Head from 'next/head'

import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter'

import Layout from '@/components/Layout'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <AppCacheProvider {...props}>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppCacheProvider>
  )
}
