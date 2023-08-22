import styled from "@emotion/styled";

import { BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoRedux, BiLogoVisualStudio, BiLogoNodejs, BiLogoMongodb } from 'react-icons/bi'; 
import { FaSass } from 'react-icons/fa'; 
import { DiJavascript1 } from 'react-icons/di';
import { BsGit } from 'react-icons/bs'; 
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'; 
import { IoMail } from 'react-icons/io5'; 


export const Container = styled.div`
  max-width: 100%;
  margin: 10px auto;
  scroll-behavior: smooth;

  @media screen and (max-width: 1200px) {
    padding: 0 20px;
  }
`;


export const InfoBlock = styled.div`
  width: 70%;
  padding: 10px;
  margin-top: 40px;
  line-height: 1.5;


  @media screen and (min-width: 1000px) {
    margin-top: 0;
    margin-left: 40px;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: fade-in 2s ease-out forwards;
`;

export const Title = styled.h1`
 font-family: 'Disket Mono', monospace;
 font-weight: normal; 
font-size: 28px;
  line-height: 1.2;
  padding: 0; 
  color: ${props => props.theme.colors.primaryDarkText};
  padding: 5px;

      @media screen and (min-width: 679px) {
      font-size: 35px;
  }

  
`;

export const Info = styled.p`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 20px;
  font-weight: 400;
  padding: 0;
  margin: 0;
  color: ${props => props.theme.colors.secondaryDarkText};
  margin-bottom: 20px;

        @media screen and (min-width: 679px) {
      font-size: 24px;
  }
  
`;

export const Img = styled.img`
width: 170px;
border-radius: 50%; 
cursor: pointer;

  &:hover ~ p {
    opacity: 1;
    transform: translateY(0);
  }
  
`;



export const AboutTitle = styled.h2`
 font-family: 'Disket Mono', monospace;
 font-weight: normal; 
  font-size: 26px;
  line-height: 1.2;
  cursor: default; 
  color: ${props => props.theme.colors.primaryDarkText};
  padding: 10px;
  margin-top: 100px; 
   text-align: center;
    @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: fade-in 2s ease-out forwards;

  &:hover {
    color: ${props => props.theme.colors.normalDark};
  }

          @media screen and (min-width: 679px) {
      font-size: 30px;
  }

`;

export const ImageWrapper = styled.div`
margin-top: 80px;
  display: grid;
 
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

    @media screen and (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }

`;

export const StrengthsBlock = styled.div`
  position: relative;
  display: flex;
   margin: 0;
  
  flex-direction: column;
  align-items: center;
  width: 100%;
   @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: fade-in 2s ease-out forwards;

  &:nth-of-type(odd) {
    color: ${props => props.theme.colors.primaryDarkText}; 
  }

  &:nth-of-type(even) {
    color: ${props => props.theme.colors.normalDark};
  }

      @media screen and (min-width: 480px) {
       margin: 10px;
  }

`; 



export const StrengthsTitle = styled.h3`
margin-top: 10px;
margin-bottom: 5px;
cursor: default; 

`;

export const StrengthsText = styled.p`
margin: 0; 
padding: 10px; 
text-align: center;
width: 80%;
cursor: default; 
color: ${props => props.theme.colors.secondaryDarkText};
opacity: 0;
transform: translateY(-20px);
transition: opacity 0.3s ease, transform 0.3s ease;
background-color: ${props => props.theme.colors.lightBeige};
box-shadow: ${props => props.theme.colors.shadow};
border-radius: 20px; 
`;




export const TechContainer = styled.div`
display: flex;
flex-wrap: wrap; 
justify-content: center;
gap: 50px;
margin-top: 60px;
 @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: fade-in 2s ease-out forwards;



`;

export const TechBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: ${props => props.theme.colors.secondaryDarkText}; 

&:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
`;

export const HTMLIcon = styled(BiLogoHtml5)`
width: 80px; 
height: 80px;
&:hover{
    color: #E44D26; 
}
`;

export const CSSIcon = styled(BiLogoCss3)`
width: 80px; 
height: 80px;
&:hover{
    color: #48A0DC; 
}
`; 

export const SassIcon = styled(FaSass)`
width: 80px; 
height: 80px;
&:hover{
    color: #F06292; 
}
`; 

export const JSIcon = styled(DiJavascript1)`
width: 80px; 
height: 80px;
&:hover{
    color: #FFD600; 
}
`;

export const ReactIcon = styled(BiLogoReact)`
width: 80px; 
height: 80px;
&:hover{
    color: #00D8FF; 
}
`;

export const ReduxIcon = styled(BiLogoRedux)`
width: 80px; 
height: 80px;
&:hover{
    color: #6C4EB0; 
}
`;

export const GitIcon = styled(BsGit)`
width: 80px; 
height: 80px;
&:hover{
    color: #F03C2E; 
}
`;

export const VSIcon = styled(BiLogoVisualStudio)`
width: 80px; 
height: 80px;
&:hover{
    color: #016EC5; 
}

`;

export const NodeIcon = styled(BiLogoNodejs)`
width: 80px; 
height: 80px;
&:hover{
    color: #83CD29; 
}
`; 

export const MongoIcon = styled(BiLogoMongodb)`
width: 80px; 
height: 80px;
&:hover{
    color: #6CAC48; 
}
`;

export const TechTitle = styled.h3`
 color: ${props => props.theme.colors.secondaryDarkText};
 margin: 0; 
 margin-top: 10px;
 cursor: default; 
`;

export const SocialsBox = styled.div`
display: flex;
justify-content: center; 
margin-bottom: 80px; 
gap: 30px;
`; 

export const SocialsTitle = styled.h2`
 font-family: 'Disket Mono', monospace;
 font-weight: normal; 
  font-size: 26px;
  line-height: 1.2;
  cursor: default; 
  color: ${props => props.theme.colors.primaryDarkText};
  padding: 10px;
   text-align: center;
   margin-bottom: 40px;
     &:hover {
    color: ${props => props.theme.colors.normalDark};
  }
            @media screen and (min-width: 679px) {
      font-size: 30px;
  }
`;

export const SocialsLink = styled.a`
 cursor: pointer;
  text-decoration: none;
   color: ${props => props.theme.colors.blackText};
`;

export const GitHubIcon = styled(AiFillGithub)`
 width: 40px; 
 height: 40px; 

  &:hover,
  &:focus {
      fill: ${props => props.theme.colors.purpleAccent};
  }

      @media screen and (min-width: 480px) {
  width: 60px; 
 height: 60px; 
  }
`;

export const LinkedInIcon = styled(AiFillLinkedin)`
 width: 40px; 
 height: 40px; 

  &:hover,
  &:focus {
      fill: #0277b5;
  }
        @media screen and (min-width: 480px) {
  width: 60px; 
 height: 60px; 
  }
`;

export const MailIcon = styled(IoMail)`
 width: 40px; 
 height: 40px; 

  &:hover,
  &:focus {
      fill: #d44c3d;
  }

        @media screen and (min-width: 480px) {
  width: 60px; 
 height: 60px; 
  }
`;
