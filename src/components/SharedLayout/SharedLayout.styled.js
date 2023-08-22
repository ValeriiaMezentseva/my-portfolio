import styled from '@emotion/styled';
import { CgMenuGridR } from 'react-icons/cg';

export const Main = styled.div`
  position: relative;
  min-height: 100vh;
background-color: ${props => props.theme.colors.backgroundColor};
`;

export const Box = styled.div`
  padding: 10px;

`;

export const ThemeTogglerBox = styled.div`
  position: absolute;
   top: 33px;
  right: 90px;
  z-index: 1;
  cursor: pointer;

    @media screen and (min-width: 680px) {
      right: 345px;
  }
`;


export const ResumeButton = styled.a`
  position: absolute;
  top: 22px;
  right: 127px;
  background-color: ${props => props.theme.colors.normalDark};
  color: ${props => props.theme.colors.quaternaryDarkText};
  align-items: center;
  border: none;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  display: none;
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 16px;
  height: 40px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translate(0, -5px);
    background-color: #ffdeda;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    color: #BD6364;
  }

   &:active {
    background-color:  ${props => props.theme.colors.normalDark};
    color: ${props => props.theme.colors.quaternaryDarkText};
    outline: 0;
  }

  @media screen and (min-width: 480px) {
    display: flex;
  }

  @media screen and (min-width: 680px) {
    padding: 0 40px;
    top: 80px;
    right: 50px;
    height: 48px;
  }
`;

export const MobileMenuButton = styled.button`
  display: flex;
  position: absolute;
  top: 15px;
  right: 30px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;

  transform: ${props => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};

  @media screen and (min-width: 680px) {
    display: none; 
  }

`;

export const MobileMenuIcon = styled(CgMenuGridR)`
  font-size: 40px;
  color: ${props => props.theme.colors.primaryDarkText};
`;

