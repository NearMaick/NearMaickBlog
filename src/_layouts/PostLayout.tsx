import Head from 'next/head'

interface PostLayoutProps {
  title: string
  description: string
  content: string
}

export default function PostLayout(props: PostLayoutProps): JSX.Element {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <article>
        <h1>{props.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>
    </main>
  )
}
