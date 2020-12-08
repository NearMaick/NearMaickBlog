import { useState, useCallback, useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import light from '../styles/theme/light'
import dark from '../styles/theme/dark'

import GlobalStyle from '../styles/GlobalStyle'
import ToggleSwitch from '../components/ToggleSwitch'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(dark)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [theme.title])

  return (
    <ThemeProvider theme={theme}>
      <ToggleSwitch toggleTheme={toggleTheme} />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
