import React, { useState } from 'react';
import Head from 'next/head';

import Lottie from 'react-lottie';
import game from '../../public/icons/game.json';
import full from '../../public/icons/full.json';


import { Header, Screen, Button, Content } from '../components';
import { Container, Title, Card, About, Avatar, AboutMe, Photo, Subtitle, Resume } from '../styles/home';

export default function Home() {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const gameOptions = {
    loop: true,
    autoplay: true,
    animationData: game,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const fullOptions = {
    loop: true,
    autoplay: true,
    animationData: full,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Container>
      <Head>
        <title>dynamusdev | Home</title>
      </Head>
      <Header
        title='Alexandre'
        buttons={
          <>
            <Button name='Home' />
            <Button name='Projetos' />
            <Button name='Tips' />
          </>
        }
      />
      <Content>
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
              isStopped={isStopped}
              isPaused={isPaused}
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
      </Content>
    </Container>
  )
}