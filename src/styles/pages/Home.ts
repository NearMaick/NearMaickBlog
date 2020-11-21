import styled from 'styled-components'

export const Container = styled.main`
  svg {
    height: 200px;
    width: 200px;
  }
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.text};
`
