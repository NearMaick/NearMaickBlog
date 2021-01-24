import Head from 'next/head'
import Image from 'next/image'
import {
  Container,
  Subtitle,
  SubtitleContainer,
  ContentContainer
} from '../styles/pages/Home'

import sal from 'sal.js'

import Developer from '../assets/devIllustration.svg'
import Computer from '../assets/comp2.svg'
import Lamp from '../assets/lamp.png'
import { useEffect } from 'react'

export default function Posts(): JSX.Element {
  useEffect(() => {
    sal({
      threshold: 1,
      once: false
    })
  }, [])
  return (
    <Container>
      <Head>
        <title>bloguei.com.br: o seu marketplace de conteúdo</title>
      </Head>
      <SubtitleContainer>
        <figure>
          <Developer />
        </figure>
        <Subtitle
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease-out-back"
        >
          <h2>As melhores ideias passam por aqui</h2>
          <h3>
            Dentre as ideias temos assuntos relacionados à tecnologia, mundo
            Geek, games, e muito mais.
          </h3>
        </Subtitle>
      </SubtitleContainer>
      <p>
        Por aqui o internauta pode se deliciar entre os mais diversos assuntos
        dentro do nosso blog, alimentado por mim e pelos parceiros.
      </p>

      <ContentContainer>
        <Computer />
        <Subtitle>
          <h3>
            Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem
            é amistosis quis leo
          </h3>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem
            é amistosis quis leo. Atirei o pau no gatis, per gatis num morreus.
            Aenean aliquam molestie leo, vitae iaculis nisl. Per aumento de
            cachacis, eu reclamis. Nullam volutpat risus nec leo commodo, ut
            interdum diam laoreet. Sed non consequat odio. Todo mundo vê os
            porris que eu tomo, mas ninguém vê os tombis que eu levo! Interagi
            no mé, cursus quis, vehicula ac nisi. Sapien in monti palavris qui
            num significa nadis i pareci latim.
          </p>
        </Subtitle>
      </ContentContainer>

      <ContentContainer>
        <Image src={Lamp} width={360} height={740} />
        <Subtitle>
          <h3>
            Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem
            é amistosis quis leo
          </h3>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem
            é amistosis quis leo. Atirei o pau no gatis, per gatis num morreus.
            Aenean aliquam molestie leo, vitae iaculis nisl. Per aumento de
            cachacis, eu reclamis. Nullam volutpat risus nec leo commodo, ut
            interdum diam laoreet. Sed non consequat odio. Todo mundo vê os
            porris que eu tomo, mas ninguém vê os tombis que eu levo! Interagi
            no mé, cursus quis, vehicula ac nisi. Sapien in monti palavris qui
            num significa nadis i pareci latim.
          </p>
        </Subtitle>
      </ContentContainer>
    </Container>
  )
}
