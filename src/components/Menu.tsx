import Link from 'next/link'

import { Container } from '../styles/components/Menu'

export default function Menu(): JSX.Element {
  return (
    <Container>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/post">
        <a>Posts</a>
      </Link>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
    </Container>
  )
}
