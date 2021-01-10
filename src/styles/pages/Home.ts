import styled from 'styled-components'

export const Container = styled.main`
  margin-top: 8rem;

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
  flex-direction: row-reverse;
  justify-content: space-around;

  svg {
    width: 700px;
    padding: 0 2.4rem;
  }
`

export const Subtitle = styled.article`
  padding: 2.4rem 0;

  width: 50%;
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

    line-height: 5.6rem;
  }

  svg {
    width: 600px;
  }
`

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: row;
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
