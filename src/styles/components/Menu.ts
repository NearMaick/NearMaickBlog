import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  flex-direction: row;

  width: 24rem;

  justify-content: space-around;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};

    transition: opacity 0.4s;

    &:hover {
      opacity: 0.8;
    }
  }
`