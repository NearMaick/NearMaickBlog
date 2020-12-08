import { Container, Subtitle } from '../styles/pages/Home'

import Logo from '../assets/back.svg'
import Head from 'next/head'

export default function Posts(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>bloguei.com.br: o seu marketplace de conteúdo</title>
      </Head>
      <h1>Sejam bem-vindos ao bloguei.com.br</h1>
      <Subtitle>
        <h1>As melhores ideias passam por aqui</h1>
        <h2>
          Dentre as ideias temos assuntos relacionados à tecnologia, mundo Geek,
          games, e muito mais.
        </h2>
      </Subtitle>
      <h3>
        Por aqui o internauta pode se deliciar entre os mais diversos assuntos
        dentro do nosso blog, alimentado por mim e pelos parceiros.
      </h3>
    </Container>
  )
}
