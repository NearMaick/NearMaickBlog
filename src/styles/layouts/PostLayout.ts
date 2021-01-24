import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 2rem;

  h1 {
    padding: 2.4rem;
  }

  a {
    text-decoration: none;
    text-align: left;
    color: #fff;
  }

  article {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      padding: 3.2rem 0;
      line-height: 3.2rem;
      text-align: center;
    }
  }
`

export const ContentContainer = styled.div`
  padding: 1.6rem 3.2rem;
  line-height: 3.2rem;

  img {
    height: 360px;
  }
`
