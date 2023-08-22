import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.img`
padding: 0;
margin: 0;
margin-left: 10px; 
margin-top:10px; 
width: 60px;
@media screen and (min-width: 480px) {
      width: 70px;
  };
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
 
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  text-decoration: none; 
  align-items: center;
  gap: 10px;
  font-size: 18px;
  color: ${props => props.theme.colors.primaryDarkText};
  padding: 8px 8px;
  margin-right: 30px;
  border-radius: 10px;
  transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
    color: ${props => props.theme.colors.primaryDarkText};
    transform: scale(1.2);
      
  }
`

export const Link = styled(NavLink)`
  display: flex;
  text-decoration: none; 
  align-items: center;
  font-size: 18px;
  padding-bottom: 5px;
  color: ${props => props.theme.colors.primaryDarkText};
  margin-right: 30px;
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

export const Span = styled.span`
 font-family: 'Disket Mono', monospace;
 font-weight: normal; 
display: flex; 
align-items: center;
height: 30px; 
  @media screen and (max-width: 679px) {
display: none; 
  };
`;
