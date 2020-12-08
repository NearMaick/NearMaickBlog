import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Subtitle = styled.div`
  margin: 2.4rem 0 2.4rem;

  width: 1000px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  text-align: center;

  background: ${props => props.theme.colors.primary};
  border-radius: 1.6rem;
`
