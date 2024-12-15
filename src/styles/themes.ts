import { createTheme } from '@mui/material'
import { SuiteVariable } from '@/styles/fonts'

export const lightTheme = createTheme({
  typography: {
    fontFamily: [SuiteVariable.style.fontFamily, 'Roboto', 'sans-serif'].join(
      ',',
    ),
  },
})
