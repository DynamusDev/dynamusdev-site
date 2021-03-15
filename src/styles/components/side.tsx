import styled from "styled-components";

export const Container = styled.aside`
  width: 25%;
  min-width: 350px;
  height: 100%;
  padding: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.colors.side};

  @media (max-width: 390px){
    button {
      font-size: 1.5em;
    }
  }
  @media (max-width: 200px){
    button {
      font-size: 1em;
    }
  }

  #forgot {
      background-color: transparent;
      color: ${props => props.theme.colors.text};
      cursor: pointer;
      text-decoration: none;
      font-size: 15px;
      width: 100%;

      display: flex;
      align-items: flex-start;
    }
`;

export const Bar = styled.header`
  background-color: ${props => props.theme.colors.secundary};
  width: 85%;
  height: 8px;
  margin: 8px 0px;
`;