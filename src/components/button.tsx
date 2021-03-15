import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';

import { Translator, I18n } from './'

import { 
  Container
} from '../styles/components/button';

interface Props {
  to?: any,
  onClick?: any,
  type?: "button" | "submit" | "reset" | undefined,
  backColor?: string,
  i18n?: boolean,
  containerStyle?: React.CSSProperties,
  name?: string
}

export function Button(props: Props) {

  return (
    <Container 
      className="button" 
      onClick={props.onClick}
      type={props.type}
      style={{
        ...props.containerStyle, 
        background: props.backColor || 'transparent'
        }} 
    >
      {
        props.i18n ? <I18n />
          : <>
              <p >
                <Translator path={props.name} />
              </p>
            </>
      }
    </Container>
  )
}