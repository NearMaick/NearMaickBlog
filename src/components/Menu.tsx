import Link from 'next/link'

import { Container, LinkContainer } from '../styles/components/Menu'
import Logo from '../assets/logo.svg'

export default function Menu(): JSX.Element {
  return (
    <Container>
      <Logo />
      <LinkContainer>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/post">
          <a>Posts</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </LinkContainer>
    </Container>
  )
}
