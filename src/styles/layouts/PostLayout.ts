import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  line-height: 2rem;

  a {
    text-decoration: none;
    text-align: left;
  }

  article {
    width: 80%;

    h1 {
      text-align: center;
    }

    img {
      margin: 1.6rem 25%;
    }
  }
`
