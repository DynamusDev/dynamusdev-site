import React from 'react';

import { 
  Container
} from '../styles/components/screen';

interface Props {
  onFocus?: any,
  children?: any
}

export function Screen(props: Props) {
  return (
    <Container onFocus={props.onFocus ? props.onFocus : () => {}}>
      {props.children}
    </Container>
  )
}