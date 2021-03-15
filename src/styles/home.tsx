import styled from 'styled-components';
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.colors.background};
  background-size: 1447px 1850px;
  padding: 15px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 1.8rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 25px;
`;

export const Subtitle = styled.h3`
  font-weight: 600;
  font-size: 1.8rem;
  color: ${props => props.theme.colors.button};
  margin-bottom: 15px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.header};

  height: auto;
  min-height: 350px;
  width: 98%;

  margin-top: 30px;
  border-radius: 8px;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 65%;
  height: 100%;

  p {
    font-size: 2.8rem;
    font-weight: 600;
    color: ${props => props.theme.colors.button};
  }

  button {
    height: 40px;
    width: 180px;
    margin-top: 20px;

    background: ${props => props.theme.colors.button};
    border-radius: 8px;

    p {
      color: ${props => props.theme.colors.background};
      font-size: 16px;
    }
  }
`;

export const Avatar = styled(Image).attrs({
  width:250,
  height:250,
})`
  border-radius: 30px;
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;

  width: 75%;
  height: 100%;

  h1 {
    font-weight: 600;
    font-size: 2.5rem;
    color: ${props => props.theme.colors.text};
    margin-bottom: 15px;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${props => props.theme.colors.text};
  }
`;

export const Photo = styled(Image).attrs({
  width:400,
  height:400,
})`
`;

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;

  width: 75%;
  height: 100%;

  p {
    font-size: 1.7rem;
    font-weight: 500;
    color: ${props => props.theme.colors.button};
    margin-bottom: 15px;
  }

  h1 {
    font-weight: 700;
    font-size: 2.5rem;
    color: ${props => props.theme.colors.text};
  }

  h3 {
    font-weight: 600;
    font-size: 2.5rem;
    color: ${props => props.theme.colors.button};
    margin-bottom: 15px;
  }
`;