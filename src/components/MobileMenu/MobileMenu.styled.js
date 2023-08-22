import styled from "@emotion/styled";
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

export const ResumeButton = styled.a`
  background-color: ${props => props.theme.colors.normalDark};
  color: ${props => props.theme.colors.quaternaryDarkText};
  align-items: center;
  border: none;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
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
    display: none;
  }
`;


export const MobileMenuClose = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;


  @media screen and (min-width: 680px) {
    display: none; 
  }
`; 



export const MobileMenuCloseIcon = styled(IoIosCloseCircleOutline)`
    font-size: 34px;
  color: ${props => props.theme.colors.primaryDarkText};

      &:hover {
    color: red;
  }
`

export const MobileMenuBox = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.isOpen ? "0" : "-100%")};
  width: 80%;
  max-width: 320px;
  height: 100%;
  background-color: ${props => props.theme.colors.backgroundColor};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
  opacity: ${props => (props.isOpen ? "1" : "0")};
  transition: right 0.3s ease-in-out, opacity 0.3s ease-in-out; 
  

  @media screen and (min-width: 680px) {
    display: none;
  }
  
`;

export const MobileNav = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column;
  margin-top: 70px;
  gap: 10px;
`; 

export const Link = styled(NavLink)`
  display: flex;
  font-family: 'Disket Mono', monospace;
 font-weight: normal; 
  text-decoration: none; 
  align-items: center;
  font-size: 18px;
  padding-bottom: 5px;
  color: ${props => props.theme.colors.primaryDarkText};
  transition: color 0.3s ease, transform 0.3s ease;
   position: relative;

  &:hover {
    color: ${props => props.theme.colors.primaryDarkText};
    transform: scale(1.2);
    
      &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 1px;
      bottom: 0;
      background: ${props => props.theme.colors.normalDark};
      transform: scaleX(0);
      transform-origin: left;
      transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1), transform 0.3s ease; /* Add width animation */
    }
  }

  &.active {
    color: ${props => props.theme.colors.normalDark}; 

      &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px; 
      bottom: 0;
      background: ${props => props.theme.colors.normalDark}; 
      transform: scaleX(1);
      transform-origin: left;
      transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
    }
  }
`;
