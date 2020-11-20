import { getAllPosts } from '../api/postApi'
import { Title } from '../styles/pages/Home'

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
    <>
      <Title>Maick Souza</Title>
      {props.posts.map((post, idx) => (
        <Title key={idx}>{post.slug}</Title>
      ))}
    </>
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
