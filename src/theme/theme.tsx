import { shade } from 'polished';
export const light = {
  title: 'light',

  colors: {
    primary: '#58595B',
    secundary: '#716969',

    background: '#e1e1e6',
    header: shade(0.15, '#e1e1e6'),
    side: shade(0.15, '#e1e1e6'),
    button: shade(0.85, '#61dafb'),
    text: '#121214',
  },
}

export const dark = {
  title: 'dark',

  colors: {
    primary: shade(0.75, '#121214'),
    secundary: '#61dafb',

    background: shade(0.75, '#121214'),
    header: shade(0.15, '#121214'),
    side: shade(0.55, '#121214'),
    button: '#eba417',
    text: '#61dafb'
  },
}