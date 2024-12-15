import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from '@mui/material'
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter'

import { lightTheme } from '@/styles/themes'

import Layout from '@/components/Layout'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <AppCacheProvider {...props}>
      <ThemeProvider theme={lightTheme}>
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppCacheProvider>
  )
}
