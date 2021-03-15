import { shade } from 'polished';
export const light = {
  title: 'light',

  colors: {
    primary: '#58595B', 
    secundary: '#716969',

    background: '#f1edf2',
    header: shade(0.15, '#f1edf2'),
    side: shade(0.15, '#f1edf2'),
    button: shade(0.45, '#000044'),
    text: shade(0.75, '#000044'),
  },
}

export const dark = {
  title: 'dark',

  colors: {
    primary: shade(0.75, '#000044'), 
    secundary: '#333',

    background: shade(0.75, '#000044'),
    header: shade(0.55, '#000044'),
    side: shade(0.55, '#000044'),
    button: '#a5a5a5',
    text: '#f1edf2'
  },
}