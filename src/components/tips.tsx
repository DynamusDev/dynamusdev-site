import React from 'react';
import Head from 'next/head'

import { Header, Screen, Side, Content } from '../components'
import { Resume, About, Card, Title, AboutMe, Subtitle, Avatar } from '../styles/home';
import { color } from '../theme/color'

export function Tips() {

  return (
    <>
      <Head>
        <title>dynamusdev | Tips</title>
      </Head>
      <Screen>
        <Card>
          <About>
            <Title>Alexandre Nascimento</Title>
            <p>Sou Desenvolvedor Full-Stack</p>
            <button> <p>Sobre mim</p> </button>
          </About>
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
        </Card>
      </Screen>
    </>
  )
}