import Link from 'next/link'
import { getAllPosts } from '../api/postApi'
import {
  Container,
  PostListContent,
  PostGridList,
  PostGridListCard
} from '../styles/pages/Post'
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
      <PostGridList>
        {props.posts.map((post, idx) => (
          <PostGridListCard key={idx}>
            <Link href={`/posts/${post.slug}`}>
              <a>
                <PostListContent>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                </PostListContent>
              </a>
            </Link>
          </PostGridListCard>
        ))}
      </PostGridList>
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
