import type { AppProps } from 'next/app'

import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter'

import Layout from '@/components/Layout'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <AppCacheProvider {...props}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppCacheProvider>
  )
}
