import styled from "styled-components";
import { FiArrowLeft, FiFile, FiX } from 'react-icons/fi';

export const Head = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  overflow: none;
  border-radius: 8px;
  background: ${props => props.theme.colors.header};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: auto;
  height: 100%;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    color: ${props => props.theme.colors.text};

    width: auto;
    height: 20px;

    background-color: transparent;
  }
`;

export const Text = styled.h1`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.button};
`;

export const Back = styled(FiArrowLeft).attrs({
  size: 25,
  color: '#FFF'
})`
  
`;

export const File = styled(FiFile).attrs({
  size: 25,
  color: '#333'
})`
  
`;

export const Close = styled(FiX).attrs({
  size: 25,
  color: '#333'
})`
  
`;

export const Space = styled.div`
  width: 25px;
  height: 25px;
`;