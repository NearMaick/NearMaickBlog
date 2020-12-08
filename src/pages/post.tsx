import Link from 'next/link'
import { getAllPosts } from '../api/postApi'
import { Container } from '../styles/pages/Post'

import Logo from '../assets/back.svg'

interface HomeProps {
  posts: Array<{
    slug: string
    title: string
    description: string
  }>
}

interface StaticProps {
  props: {
    posts: string[]
  }
  revalidate: number
}

export default function Post(props: HomeProps): JSX.Element {
  return (
    <Container>
      <ul>
        {props.posts.map((post, idx) => (
          <div key={idx}>
            <Link href={`/posts/${post.slug}`}>
              <a>
                <li>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                </li>
              </a>
            </Link>
          </div>
        ))}
      </ul>
    </Container>
  )
}

export async function getStaticProps(): Promise<StaticProps> {
  const allPosts = await getAllPosts()

  return {
    props: {
      posts: allPosts
    },
    revalidate: 5
  }
}
