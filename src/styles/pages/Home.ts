import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.text};
`
