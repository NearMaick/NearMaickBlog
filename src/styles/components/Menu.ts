import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  flex-direction: row;

  width: 40rem;
  margin: 2.4rem;

  justify-content: space-around;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};

    font-size: 1.6rem;
    font-weight: 700;

    transition: opacity 0.4s;

    &:hover {
      opacity: 0.8;
    }
  }

  svg {
    width: 16rem;
    margin: 0 3.2rem 0 0;
  }
`

export const LinkContainer = styled.menu`
  width: 40rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
