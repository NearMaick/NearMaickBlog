import styled from 'styled-components'

export const Container = styled.main`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    list-style-type: none;

    @media (min-width: 361px) {
      flex-direction: row;
    }

    a {
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    li {
      width: 100%;
      height: 420px;

      display: flex;
      flex-direction: column;

      justify-content: space-around;

      border-radius: 1.6rem;

      margin: 1.6rem;
      padding: 1.6rem;

      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.text};

      @media (min-width: 361px) {
        width: 360px;
      }

      h2 {
        padding: 1.6rem;
        line-height: 3.2rem;
      }
    }
  }
`
