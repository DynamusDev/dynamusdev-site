import React, { useState } from 'react';
import Head from 'next/head';

import { useApp } from '../_context/appContext'


import { Header, Screen, Button, Content, HomeComponent, Tips, Projects } from '../components';
import { Container, Title, Card, About, Avatar, AboutMe, Photo, Subtitle, Resume } from '../styles/home';

export default function Home() {
  const { screen, setScreen }: any = useApp();

  function goToHome() {
    setScreen('home')
  }

  function goToProjects() {
    setScreen('projects')
  }

  function goToTips() {
    setScreen('tips')
  }

  return (
    <Container>
      <Header
        title='Bem Vindo'
        buttons={
          <>
            <Button color={screen === 'home' && '#fff'} onClick={goToHome} name='Home' />
            <Button color={screen === 'projects' && '#fff'} onClick={goToProjects} name='Projetos' />
            <Button color={screen === 'tips' && '#fff'} onClick={goToTips} name='Tips' />
          </>
        }
      />
      <Content>
        {
          screen === 'tips' ? <Tips /> : screen === 'projects' ? <Projects /> : <HomeComponent />
        }
      </Content>
    </Container>
  )
}