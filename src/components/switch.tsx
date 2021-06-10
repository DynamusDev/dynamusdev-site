import React from "react";
import { dark, light, color } from '../theme'
import { shade } from 'polished'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useThemetContext } from '../_context/themeContext'

import { SW } from '../styles/components/switch';

export function Switch() {
  const { theme, setTheme }: any = useThemetContext();

  function toggleDarkMode() {
    const value = theme.title === 'dark' ? 'light' : 'dark'
    setTheme(theme.title === 'dark' ? light : dark)
    localStorage.setItem('theme', value);
  }

  return (
    <SW
      onChange={toggleDarkMode}
      checked={theme.title === 'dark' ? true : false}
      checkedIcon={<FiMoon size={20} color='#DADADA' />}
      uncheckedIcon={<FiSun size={20} color='#DADADA' />}
      theme={theme}
      className='switch'
      offColor={shade(0.05, '#121214')}
      onColor={color.grey}
    />
  )
}