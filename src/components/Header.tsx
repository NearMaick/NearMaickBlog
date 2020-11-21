import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

interface Props {
  toggleTheme(): void
}

function Header({ toggleTheme }: Props): JSX.Element {
  const { colors, title } = useContext(ThemeContext)

  return (
    <>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.1, colors.primary)}
        onColor={colors.secondary}
      />
    </>
  )
}

export default Header
