import { useState, useCallback } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import light from '../styles/theme/light'
import dark from '../styles/theme/dark'

import GlobalStyle from '../styles/GlobalStyle'
import Header from '../components/Header'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
