/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, {useContext, useState} from 'react';

import { Translator, Switch } from './'

import { 
  Head,
  Text,
  Back,
  Space,
  File,
  Close,
  ButtonsContainer
} from '../styles/components/header';

interface Props {
  backButton?: boolean,
  nextButton?: boolean,
  fileButton?: boolean,
  closeButton?: boolean,
  onBackClick?: any,
  onNextClick?: any,
  onFileClick?: any,
  onCloseClick?: any,
  background?: string,
  title?: string,
  buttons?: object,
  textStyle?: React.CSSProperties
}

export function Header(props: Props) {

  return (
  <Head style={{background: props.background && props.background}}>
    {
      props.title ? <Text style={props.textStyle}> <Translator path={props.title} /> </Text> : <Space />
    }
    {
      props.fileButton ? <File onClick={props.onFileClick} /> : <Space />
    }
    <ButtonsContainer> {props.buttons} </ButtonsContainer>
    {
      props.closeButton ? <Close onClick={props.onCloseClick} /> : <Space />
    }
    <Switch />
  </Head>
  )
}