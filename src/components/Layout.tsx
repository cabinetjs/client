import React from 'react'

import { CssBaseline } from '@mui/material'

import * as Styled from './Layout.styled'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <CssBaseline />
      <Styled.Main>{children}</Styled.Main>
    </>
  )
}

export default Layout
