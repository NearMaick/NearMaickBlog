import Link from 'next/link'
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
      <Title>Blog do Maick Souza</Title>
      <ul>
        {props.posts.map((post, idx) => (
          <li key={idx}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
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
