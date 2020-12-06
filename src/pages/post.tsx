import Link from 'next/link'
import { getAllPosts } from '../api/postApi'
import { Container } from '../styles/pages/Home'

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

export default function Post(props: HomeProps): JSX.Element {
  return (
    <Container>
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
