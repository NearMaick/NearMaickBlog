import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import { Container } from '../styles/components/ThemeSwitch'

interface Props {
  toggleTheme(): void
}

function ThemeSwitch({ toggleTheme }: Props): JSX.Element {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor={shade(0.1, colors.primary)}
        onColor={colors.secondary}
        offHandleColor="#000"
        onHandleColor="#fff"
      />
    </Container>
  )
}

export default ThemeSwitch
