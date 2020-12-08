import { Container } from '../styles/pages/Home'

import Logo from '../assets/back.svg'
import Head from 'next/head'

export default function Posts(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>bloguei.com.br: o seu marketplace de conteúdo</title>
      </Head>
      <Logo />
    </Container>
  )
}
