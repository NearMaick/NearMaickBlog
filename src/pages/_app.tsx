import { useState, useCallback, useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import light from '../styles/theme/light'
import dark from '../styles/theme/dark'

import GlobalStyle from '../styles/GlobalStyle'
import Menu from '../components/Menu'
import ThemeSwitch from '../components/ThemeSwitch'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(light)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [theme.title])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div id="menu-container">
        <ThemeSwitch toggleTheme={toggleTheme} />
        <Menu />
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
