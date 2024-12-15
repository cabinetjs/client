import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const GlobalStyles = css`
  html,
  body,
  #__next {
    height: 100%;
  }
`

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const Main = styled.main`
  flex: 1 1 auto;
`
