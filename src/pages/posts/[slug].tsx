import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '../../api/postApi'
import PostLayout from '../../_layouts/PostLayout'

export interface PostProps {
  title: string
  description: string
  content: string
}

interface ContextProps extends GetStaticPropsContext {
  params: {
    slug: string
  }
}

interface PathsProps {
  paths: string[]
  fallback: boolean
}

export default function Posts(props: PostProps): JSX.Element {
  return (
    <>
      <PostLayout
        title={props.title}
        description={props.description}
        content={props.content}
      />
      <Link href={'/post'}>Voltar</Link>
    </>
  )
}

export const getStaticProps: GetStaticProps<any> = async (
  context: ContextProps
) => {
  return {
    props: await getPostBySlug(context.params.slug),
    revalidate: 5
  }
}

export const getStaticPaths: GetStaticPaths = async (): Promise<PathsProps> => {
  let paths: any = await getAllPosts()

  paths = paths.map((post: any) => {
    return {
      params: { slug: post.slug }
    }
  })
  return {
    paths,
    fallback: false
  }
}
