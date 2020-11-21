import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

function Header(): JSX.Element {
  const { colors } = useContext(ThemeContext)

  return (
    <>
      <Switch
        onChange={() => {}}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor=""
        onColor={colors.secondary}
      />
    </>
  )
}

export default Header
