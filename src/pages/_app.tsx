import { useState, useEffect } from 'react';
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '../theme/theme'
import { ThemeContextProvider } from '../_context/themeContext'
import { AppContextProvider } from '../_context/appContext'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(light);
  const [screen, setScreen] = useState('home');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme === 'light') {
      setTheme(light)
    } else {
      setTheme(dark)
    }
  }, [])

  const contextProps = {
    theme,
    setTheme
  }

  const appProps = {
    screen,
    setScreen
  }

  return (
    <AppContextProvider {...appProps}>
      <ThemeContextProvider {...contextProps}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContextProvider>
    </AppContextProvider>
  )
}

export default MyApp
