import { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { theme } from '@/common/theme'
import { Global, ThemeProvider } from '@emotion/react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles(theme)} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
