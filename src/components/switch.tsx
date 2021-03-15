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
      checkedIcon={<FiMoon size={25} color='#DADADA' />}
      uncheckedIcon={<FiSun size={25} color='#DADADA' />}
      theme={theme}
      offColor={shade(0.05, '#000044')}
      onColor={color.grey}
    />
  )
}