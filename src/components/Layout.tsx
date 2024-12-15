import React from 'react'

import { CssBaseline } from '@mui/material'

import { Global } from '@emotion/react'

import Header from '@/components/Header'

import { SuiteVariable } from '@/styles/fonts'

import * as Styled from './Layout.styled'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <Styled.Wrapper className={SuiteVariable.className}>
      <Global styles={Styled.GlobalStyles} />
      <CssBaseline />
      <Header />
      <Styled.Main>{children}</Styled.Main>
    </Styled.Wrapper>
  )
}

export default Layout
