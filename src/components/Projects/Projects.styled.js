import styled from "@emotion/styled";

import { BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoRedux, BiLogoNodejs, BiLogoMongodb } from 'react-icons/bi'; 
import { FaSass } from 'react-icons/fa'; 
import { DiJavascript1 } from 'react-icons/di';
import { SiHandlebarsdotjs } from 'react-icons/si'; 
import { AiFillGithub } from 'react-icons/ai'; 
import { BsCodeSlash, BsLink45Deg } from 'react-icons/bs';


export const List = styled.ul`
display: flex; 
flex-direction: column; 
justify-content: center; 
margin: 10px; 
margin-top:50px; 
margin-bottom: 30px;

padding: 20px; 

   @media screen and (min-width: 745px) {
      margin: 50px; 
  }

`; 

export const ProjectItem = styled.li`
display: flex;
 flex-direction: column;
align-items: center;
margin-bottom: 50px; 
padding: 0;
border-radius: 10px;
gap: 20px;
justify-content: space-between;

  opacity: 0;
  transform: translateY(-50px);
  animation: fadeInUp 0.9s ease forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

     @media screen and (min-width: 630px) {
      padding: 15px;
     padding-left: 30px;
padding-right: 30px;
  }


  
    @media screen and (min-width: 1078px) {
        box-shadow: rgb(204, 219, 232) -3px 1px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
        &:nth-of-type(odd) {
   flex-direction: row;

  }

  &:nth-of-type(even) {
 
 flex-direction: row-reverse;

  }
  }

`;


export const Img = styled.img`
  width: 100%;
  height: 100%;
border-radius: 10px;
cursor: pointer;

`;

export const ProjectInfo = styled.div`
display: flex;
flex-direction: column;  
align-items: center;
width: 100%;

padding: 15px;
border-radius: 10px;

  opacity: 0;
  transform: translateX(20px);
  animation: fadeInUp 0.8s ease forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }


`;

export const ProjectTitle = styled.h3`
 font-family: 'Disket Mono', monospace;
 font-weight: normal;
 font-size: 16px; 
 margin: 0; 
padding: 0;
 color: ${props => props.theme.colors.secondaryDarkText}; 
cursor: default;

&:hover{
    color: ${props => props.theme.colors.primaryDarkText};
}

   @media screen and (min-width: 480px) {
     font-size: 20px;
  }

`;

export const ProjectText = styled.p`
  font-family: ${props => props.theme.fonts.secondary};
  text-align: center; 
  font-size: 16px;
   color: ${props => props.theme.colors.secondaryDarkText};

   @media screen and (min-width: 480px) {
     font-size: 18px;
  }
`;

export const IconsBox = styled.ul`
display: flex; 
gap: 5px;
margin: 0; 
padding:0; 
margin-top: 10px;
color: ${props => props.theme.colors.secondaryDarkText}; 
@media screen and (min-width: 480px) {
    gap: 10px;
  }

`;

export const HTMLIcon = styled(BiLogoHtml5)`
width: 35px; 
height: 35px;

&:hover{
    color: #E44D26; 
}

   @media screen and (max-width: 480px) {
    width: 30px; 
height: 30px;
  }
`;

export const CSSIcon = styled(BiLogoCss3)`
width: 35px; 
height: 35px;
&:hover{
    color: #48A0DC; 
}
   @media screen and (max-width: 480px) {
    width: 30px; 
    height: 30px;
  }
`; 

export const SassIcon = styled(FaSass)`
width: 35px; 
height: 35px;

&:hover{
    color: #F06292; 
}
@media screen and (max-width: 480px) {
    width: 30px; 
    height: 30px;
  }
`; 

export const JSIcon = styled(DiJavascript1)`
width: 35px; 
height: 35px;

&:hover{
    color: #FFD600; 
}
@media screen and (max-width: 480px) {
    width: 30px; 
    height: 30px;
  }
`;

export const ReactIcon = styled(BiLogoReact)`
width: 35px; 
height: 35px;

&:hover{
    color: #00D8FF; 
}
@media screen and (max-width: 480px) {
    width: 30px; 
    height: 30px;
  }
`;

export const ReduxIcon = styled(BiLogoRedux)`
width: 35px; 
height: 35px;

&:hover{
    color: #6C4EB0; 
}
@media screen and (max-width: 480px) {
    width: 30px; 
    height: 30px;
  }
`;


export const NodeIcon = styled(BiLogoNodejs)`
width: 35px; 
height: 35px;

&:hover{
    color: #83CD29; 
}
@media screen and (max-width: 480px) {
    width: 30px; 
    height: 30px;
  }
`; 

export const MongoIcon = styled(BiLogoMongodb)`
width: 35px; 
height: 35px;

&:hover{
    color: #6CAC48; 
}
@media screen and (max-width: 480px) {
    width: 30px; 
    height: 30px;
  }
`;

export const HBIcon = styled(SiHandlebarsdotjs)`
width: 35px; 
height: 35px;

&:hover{
    color: #ED6C35; 
}
@media screen and (max-width: 480px) {
    width: 30px; 
    height: 30px;
  }
`; 

export const CarouselContainer = styled.div`
 max-width: 500px; 
 max-height: 300px;
  margin: 0;
  padding: 0;

  opacity: 0;
  transform: translateX(-20px);
  animation: fadeInUp 0.8s ease forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

`;

export const LinksBox = styled.div`
display: flex;
flex-direction: column; 
   @media screen and (min-width: 480px) {
     flex-direction: row;
  }



`;



export const SocialsLink = styled.a`
display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.colors.secondaryDarkText};
  margin-right: 10px; /* Adjust the spacing as needed */

&:nth-of-type(odd) {
  &:hover,
  &:focus {
      color: ${props => props.theme.colors.purpleAccent};
  }
span {
  color: ${props => props.theme.colors.primaryDarkText};
  &:hover,
  &:focus {
      color: ${props => props.theme.colors.purpleAccent};
  }
 }

  }

  &:nth-of-type(even) {
     &:hover,
     &:focus {
      color: #EB8386;
  }
    span {
      color: ${props => props.theme.colors.normalDark};
      &:hover,
      &:focus {
      color: #EB8386;
  }
    }
 


  }

    @media screen and (max-width: 480px) {
   margin-bottom: 5px;

  }



`;

export const GitHubIcon = styled(AiFillGithub)`
 width: 30px; 
 height: 30px; 
 margin-right: 5px; 

  &:hover,
  &:focus {
      fill: #680572;
  }
  @media screen and (max-width: 480px) {
    width: 25px; 
    height: 25px;

  }
`;

export const LinkIcon = styled(BsLink45Deg)`
 width: 30px; 
 height: 30px; 
 margin-right: 5px; 

  &:hover,
  &:focus {
      color: #680572;
  }
    @media screen and (max-width: 480px) {
    width: 25px; 
    height: 25px;
   
  }
`;

export const BackIcon = styled(BsCodeSlash)`
 width: 28px; 
 height: 28px; 
 margin-right: 5px; 

  &:hover,
  &:focus {
      color: #680572;
  }
    @media screen and (max-width: 480px) {
    width: 25px; 
    height: 25px;
   
  }
`;