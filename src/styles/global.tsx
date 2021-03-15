import { createGlobalStyle } from 'styled-components'
import {color} from '../theme/color'

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  };

  /* div, header {
    min-width: 336px;
  } */

  h1 {
    font-family: Raleway, sans-serif;
    font-size: 1.4rem;
  }

  body, form {
    font-family: Raleway, sans-serif;
    font-size: 1.4rem;
    background-color: ${props => props.theme.colors.background};
    text-rendering: optimizeLegibility;
    color: ${color.grey};
  };

  html, body, #root {
    height: 100vh;
  };

  @media(max-width: 1366px){
    html{
      font-size: 83.75%
    }
  }
  @media(max-width: 720px){
    html{
      font-size: 87.5%
    }
  }

  select {
    color: ${props => props.theme.colors.text};
  }

  input, button, textarea {
    font-family: 400 18px Raleway, sans-serif;
    width: 100%;
    height: 60px;
    resize: vertical;
    color: ${color.grey};
    background-color: ${props => props.theme.colors.background};
    border: 0.3px solid ${props => props.theme.colors.primary};
    border-radius: 8px;
    padding: 0 24px;
    margin-bottom: 15px;
    text-align: center;
    font-family: Raleway, sans-serif;
  };

  button {
    cursor: pointer;
    background-color: transparent;
    border-width: 0;
    transition: filter .2s;
  }

  button:hover{
    filter: brightness(90%);
  }

  .empty {
    width: 80vw;
    text-align: center;
    font-family: Raleway, sans-serif;
  }

  .button{
    font-family: 400 18px Raleway, sans-serif;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    justify-content: space-around;
    line-height: 60px;

    p {
      font-family: 400 20px Raleway, sans-serif;
      color: #FFF;
    }
  }
`;