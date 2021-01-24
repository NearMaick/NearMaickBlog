import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 2.4rem;
    margin: 6rem 10rem;
  }
`

export const SubtitleContainer = styled.section`
  padding: 2.4rem 0;
  border-radius: 1.6rem;

  margin-bottom: 2.4rem;

  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;

  svg {
    width: 900px;
    padding: 0 2.4rem;
  }
`

export const Subtitle = styled.article`
  padding: 2.4rem 0;
  margin: 0 1.6rem;

  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  text-align: center;

  border-radius: 1.6rem;

  h2 {
    font-size: 6.2rem;
    font-family: 'Pacifico';
    font-weight: 300;
    line-height: 5.6rem;
    margin-bottom: 3.2rem;
  }

  svg {
    width: 900px;
  }
`

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;

  h3 {
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 1.6rem;
    margin: 0;
  }

  svg {
    width: 100px;
    padding: 0 2.4rem;
  }
`
