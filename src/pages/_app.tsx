import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import light from '../styles/theme/light'
import dark from '../styles/theme/dark'

import GlobalStyle from '../styles/GlobalStyle'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
