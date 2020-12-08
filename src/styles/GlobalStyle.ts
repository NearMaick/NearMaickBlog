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
  }

  div#menu-container {
    display: flex;
    flex-direction: row-reverse;

    margin: 0.2rem 1.6rem;
    justify-content: space-between;
  }
`
