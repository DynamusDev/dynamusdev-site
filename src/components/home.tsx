import React from 'react';
import Head from 'next/head'
import Lottie from 'react-lottie';
import full from '../../public/icons/full.json';

import { Header, Screen, Side, Content } from '../components'
import { Resume, About, Card, Title, AboutMe, Subtitle, Avatar } from '../styles/home';
import { color } from '../theme/color'

export function HomeComponent() {
  const fullOptions = {
    loop: true,
    autoplay: true,
    animationData: full,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <Head>
        <title>dynamusdev | Home</title>
      </Head>
      <Screen>
        <Card>
          <About>
            <Title>Alexandre Nascimento</Title>
            <p>Sou Desenvolvedor Full-Stack</p>
            <button> <p>Sobre mim</p> </button>
          </About>
          <Lottie options={fullOptions}
            height={200}
            width={200}
            isStopped={false}
            isPaused={false}
          />
        </Card>
        <Card>
          <AboutMe>
            <Subtitle>Sobre mim</Subtitle>
            <p>Baiano, nerd, casado, 25 anos.<br />
                Apaixonado por tecnologia e em como ela se atualiza e se torna necessária no dia a dia. <br />
                Atualmente morando em São Paulo.<br />
                Realizo também um trabalho como membro gestor do coletivo @pretxs_no_topo. <br />
              <br />
                "A imaginação é mais importante que a ciência, porque a ciência é limitada,<br /> ao passo que a imaginação abrange o mundo inteiro." - Albert Einstein
              </p>
          </AboutMe>
          <Avatar
            src="/images/foto.jpg"
            alt="Avatar"
          />
        </Card>
        <Card style={{ flexDirection: 'column', padding: 8 }}>
          <Subtitle>Resumo</Subtitle>
          <Card>
            <Resume>
              <p>Experiência</p>
              <h1>Mais de 4 anos de experiência como</h1>
              <h3>Desenvolvedor</h3>
            </Resume>
          </Card>
        </Card>
      </Screen>
    </>
  )
}