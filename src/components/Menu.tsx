import { useState, useEffect, useCallback } from 'react'

import dark from '../styles/theme/dark'
import light from '../styles/theme/light'

import ToggleSwitch from './ToggleSwitch'

const Menu: React.FC = () => {
  const [theme, setTheme] = useState(dark)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [theme.title])

  return <ToggleSwitch toggleTheme={toggleTheme} />
}

export default Menu
