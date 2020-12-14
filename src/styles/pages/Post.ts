import styled from 'styled-components'

export const Container = styled.main`
  ul {
    display: flex;
    justify-content: space-between;

    list-style-type: none;

    a {
      text-decoration: none;
    }

    li {
      width: 360px;
      height: 420px;

      display: flex;
      flex-direction: column;

      justify-content: space-around;

      border-radius: 1.6rem;

      margin: 1.6rem;
      padding: 1.6rem;

      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.text};

      h2 {
        padding: 1.6rem;
        line-height: 3.2rem;
      }
    }
  }
`
