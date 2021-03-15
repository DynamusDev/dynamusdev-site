import {useState, useEffect} from 'react';
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '../theme/theme'
import { ThemeContextProvider } from '../_context/themeContext'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(light) ;
  
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if(localTheme === 'dark'){
      setTheme(dark)
    }else{
      setTheme(light)
    }
  }, [])

  const contextProps = {
    theme,
    setTheme
  }

  return (
    <ThemeContextProvider {...contextProps}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContextProvider>
    )
}

export default MyApp
