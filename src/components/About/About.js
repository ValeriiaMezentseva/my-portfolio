import React from 'react';
import about1 from '../../pictures/10.png';
import about2 from '../../pictures/11.png';
import about3 from '../../pictures/12.png';
import about4 from '../../pictures/13.png';
import about5 from '../../pictures/14.png';



import {
    Container,
    InfoBlock,
    Title,
    Info,
    Img,
    ImageWrapper,
    AboutTitle,
    StrengthsBlock,
    StrengthsTitle,
    StrengthsText,
    TechContainer,
    HTMLIcon,
    CSSIcon,
    SassIcon,
    JSIcon,
    ReactIcon, 
    ReduxIcon,
    GitIcon,
    VSIcon,
    NodeIcon, 
    MongoIcon,
    TechBlock, 
    TechTitle,
    SocialsBox,
    SocialsTitle,
    SocialsLink,
    GitHubIcon, 
    LinkedInIcon, 
    MailIcon
  
} from "./About.styled"; 

const About = () => {
    return (
        <Container>
            <InfoBlock>
                <Title>Hello, I'm Valeriia </Title>
                <Info>
                    a junior full-stack developer based in Europe (originally from Ukraine), with love for creating user-friendly interfaces and architecting back-end applications.
                </Info>
        
            </InfoBlock>
            <AboutTitle> My Tech Stack </AboutTitle>
            <TechContainer>
            <TechBlock>
                <HTMLIcon /> 
                <TechTitle> HTML5 </TechTitle>
            </TechBlock>
            <TechBlock>
                <CSSIcon /> 
                <TechTitle> CSS </TechTitle>
                </TechBlock>
                 <TechBlock>
                <SassIcon /> 
                <TechTitle> SASS </TechTitle>
                </TechBlock>
                 <TechBlock>
                <JSIcon /> 
                <TechTitle> JavaScript </TechTitle>
                </TechBlock>
                 <TechBlock>
                <ReactIcon /> 
                <TechTitle> React </TechTitle>
                </TechBlock>
                 <TechBlock>
                <ReduxIcon /> 
                <TechTitle> Redux </TechTitle>
                </TechBlock>
                  <TechBlock>
                <GitIcon /> 
                <TechTitle> Git </TechTitle>
                </TechBlock>
                  <TechBlock>
                <VSIcon /> 
                <TechTitle> Visual Studio </TechTitle>
                </TechBlock>
                  <TechBlock>
                <NodeIcon /> 
                <TechTitle> Node </TechTitle>
                </TechBlock>
                  <TechBlock>
                <MongoIcon /> 
                <TechTitle> MongoDB </TechTitle>
                </TechBlock>
            </TechContainer>
           
            <AboutTitle> Some of my strengths </AboutTitle>
            <ImageWrapper>
                <StrengthsBlock>
                    <Img src={about1} alt='creative' />
                    <StrengthsTitle>Adaptability</StrengthsTitle>
                        <StrengthsText>I enjoy taking on new challenges, so I'm able to adapt to different situations, tasks or environments to achieve my goals.</StrengthsText>
                </StrengthsBlock>
                <StrengthsBlock>
                    <Img src={about2} alt='team-player' />
                    <StrengthsTitle>Teamwork</StrengthsTitle>
                    <StrengthsText> People motivate and inspire me. Just as Michael Scott once said, 'There is no 'I' in team, but there is a 'me' if you jumble it up'.  </StrengthsText>
                </StrengthsBlock>
                <StrengthsBlock>
                    <Img src={about3} alt='user-intuitive' />
                    <StrengthsTitle>Creativity</StrengthsTitle>
                    <StrengthsText>With a background in teaching I find it easy to come up with creative solutions in my work. </StrengthsText>
                </StrengthsBlock>
                <StrengthsBlock>
                    <Img src={about4} alt='detailed-oriented' />
                    <StrengthsTitle>Diligence</StrengthsTitle>
                    <StrengthsText> Inspired by Taylor Swift's dedication, I apply the same level of care and precision to my work. </StrengthsText>
                </StrengthsBlock>
                <StrengthsBlock>
                    <Img src={about5} alt='detailed-oriented' />
                    <StrengthsTitle>Productivity</StrengthsTitle>
                     <StrengthsText> Drawing from my love for puzzle solving, I can effectively piece together my time, energy, and resources for a successful outcome. </StrengthsText>
                </StrengthsBlock>
                </ImageWrapper>
               
             <SocialsTitle> Contact me </SocialsTitle>
            <SocialsBox>
            <SocialsLink target="_blank" rel='noreferrer' href="https://github.com/ValeriiaMezentseva">
                <GitHubIcon />
                </SocialsLink>
                <SocialsLink target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/valeriia-mezentseva/">
                    <LinkedInIcon /> 
                </SocialsLink>
                <SocialsLink href="mailto:mezencevavalerie@gmail.com">
                    <MailIcon /> 
                    </SocialsLink>
                  </SocialsBox>

        </Container>
    );
}; 

export default About; 