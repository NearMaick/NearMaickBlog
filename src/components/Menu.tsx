import Link from 'next/link'

import { Container } from '../styles/components/Menu'

export default function Menu(): JSX.Element {
  return (
    <Container>
      <Link href="/">Home</Link>
      <Link href="/post">Posts</Link>
      <Link href="/portfolio">Portfolio</Link>
    </Container>
  )
}
