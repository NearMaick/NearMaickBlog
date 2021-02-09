import styled from 'styled-components'

export const Container = styled.main``

export const PostGridList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  list-style-type: none;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, 27rem);
    grid-template-rows: repeat(auto-fit, 35rem);

    grid-gap: 1.6rem;
  }
`

export const PostGridListCard = styled.div`
  a {
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const PostListContent = styled.li`
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

  h2 {
    padding: 1.6rem;
    line-height: 3.2rem;
  }
`
