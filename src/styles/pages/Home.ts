import styled from 'styled-components'

export const Container = styled.main`
  margin-top: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  svg {
    width: 200px;
    padding: 0 2.4rem;
  }

  p {
    font-size: 2.4rem;
    margin: 6rem 10rem;
  }
`

export const SubtitleContainer = styled.section`
  background: ${props => props.theme.colors.primary};

  padding: 2.4rem 0;
  border-radius: 1.6rem;

  margin-bottom: 2.4rem;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
`

export const Subtitle = styled.article`
  margin: 2.4rem 0 2.4rem;
  padding: 2.4rem 0;

  width: 50%;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  text-align: center;

  // background: #f0f;
  border-radius: 1.6rem;
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
`
