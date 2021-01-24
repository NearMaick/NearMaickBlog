import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'Poppins', Arial, Helvetica, sans-serif;

    @media(max-width: 360px){
      display: flex;
    }
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1.2rem;
  }
`
