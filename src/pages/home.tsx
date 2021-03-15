import React from 'react';
import Head from 'next/head'

import { Header, Screen, Side, Content } from '../components'
import { Container, Title } from '../styles/home';
import { color } from '../theme/color'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <Header
        title='Hello'
        textStyle={{color: color.whiteChick}}
      />
      <Content>
        <Side />
        <Screen>
          <Title> Hello  </Title>
        </Screen>
      </Content>
    </Container>
  )
}

export default Home;