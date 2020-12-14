import Head from 'next/head'
import Link from 'next/link'

import { Container, ContentContainer } from '../styles/layouts/PostLayout'

interface PostLayoutProps {
  title: string
  description: string
  content: string
}

export default function PostLayout(props: PostLayoutProps): JSX.Element {
  return (
    <Container>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <article>
        <h1>{props.title}</h1>
        <ContentContainer dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>
      <Link href={'/post'}>
        <a>Voltar</a>
      </Link>
    </Container>
  )
}
