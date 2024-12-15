import React from 'react'

import { CssBaseline } from '@mui/material'

import Header from '@/components/Header'

import * as Styled from './Layout.styled'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <CssBaseline />
      <Header />
      <Styled.Main>{children}</Styled.Main>
    </>
  )
}

export default Layout
