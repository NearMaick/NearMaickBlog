import { getAllPosts } from '../api/postApi'
import { Title, Container } from '../styles/pages/Home'

import Logo from '../assets/back.svg'

interface HomeProps {
  posts: Array<{
    slug: string
    title: string
  }>
}

interface StaticProps {
  props: {
    posts: string[]
  }
}

export default function Home(props: HomeProps): JSX.Element {
  return (
    <Container>
      <Title>Maick Souza</Title>
      {props.posts.map((post, idx) => (
        <Title key={idx}>{post.slug}</Title>
      ))}
      <Logo />
    </Container>
  )
}

export async function getStaticProps(): Promise<StaticProps> {
  const allPosts = await getAllPosts()

  return {
    props: {
      posts: allPosts
    }
  }
}
