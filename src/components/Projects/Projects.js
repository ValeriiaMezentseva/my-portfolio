import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Element } from 'react-scroll';

import projectImages from 'constants/projectImages';



import {
    List,
    Img,
    ProjectInfo,
    ProjectItem,
    ProjectTitle,
    ProjectText, 
    HTMLIcon,
    CSSIcon,
    SassIcon,
    JSIcon,
    ReactIcon, 
    ReduxIcon,
    NodeIcon, 
    MongoIcon,
    IconsBox,
    HBIcon,
    CarouselContainer,
     LinksBox,
    GitHubIcon, 
    LinkIcon, 
    SocialsLink, 
    BackIcon,
} from './Projects.styled'; 

const Projects = () => {
    


    const projectData = [
        {
            title: "PhoneBook",
            images: projectImages.phb,
            text: "PhoneBook is a responsive web-application to manage all your contacts information. It offers smooth navigation, quick searches, and secure data storage for users and contacts management. Once you're logged in you can add, edit, delete you contacts or add someone to a favorite list. There is also a theme switch feature for better user experience",
            icons: (
                <>
                    <HTMLIcon />
                    <JSIcon />
                    <ReactIcon />
                    <ReduxIcon />
                    <NodeIcon />
                    <MongoIcon />
                </>
            ),
            linkGH: 'https://github.com/ValeriiaMezentseva/goit-react-hw-08-phonebook',
            linkWeb: 'https://valeriiamezentseva.github.io/goit-react-hw-08-phonebook/',
            linkBack: 'https://github.com/ValeriiaMezentseva/goit-node-hw-REST-API-app',
            
        },
        {
            title: "Movie App",
             images: projectImages.movie,
            text: "Movie App is a responsive web-application which delivers user-friendly interface, recommendation system and easy searches. You can see all the details about movie or series, watch trailers, create your own watch lists and favorite lists. I'm using The Movie Database (TMDb) to provide the movies/series information. ",
            icons: (
                <>
                    <HTMLIcon />
                    <CSSIcon />
                    <JSIcon />
                    <ReactIcon />
                    <ReduxIcon />
                </>
            ),
            linkGH: 'https://github.com/ValeriiaMezentseva/movie-app',
            linkWeb: 'https://valeriiamezentseva.github.io/movie-app',
           
        },
        {
            title: "So Yummy App",
             images: projectImages.yummy,
            text: "So Yummy App is a group project, it is a responsive web-application with visually pleasing interface, effortless recipe searches and secure data management. You can explore recipes by categories, create your own recipes, add recipes to your favorites and make up the shopping list. ",
            icons: (
                <>
                    <HTMLIcon />
                    <CSSIcon />
                    <JSIcon />
                    <ReactIcon />
                    <ReduxIcon />
                    <NodeIcon />
                    <MongoIcon />
                </>
            ),
            linkGH: 'https://github.com/ValeriiaMezentseva/so-yummy-app',
            linkWeb: 'https://anenkosofi.github.io/so-yummy-app/',
            linkBack: "https://github.com/anenkosofi/so-yummy-app-backend",
        },
        {
            title: "Filmoteka",
             images: projectImages.film,
            text: "Filmoteka is another group-project following the organized rhythm of Scrum methodology. It's a responsive web-application that has friendly interface, trending movies and smooth registration process. You can create movie lists, switch themes and languages, watch trailers and search movies or series.",
            icons: (
                <>
                    <HTMLIcon />
                    <CSSIcon />
                    <SassIcon />
                    <JSIcon />
                    <HBIcon />
                </>
            ),
            linkGH: 'https://github.com/ValeriiaMezentseva/filmoteka-team-project',
            linkWeb: 'https://katedietkova.github.io/filmoteka-project/',
        },
        {
            title: "Web Studio",
             images: projectImages.webstudio,
            text: "Web Studio is my first project, it is a website with a responsive layout that adapts to different devices. Website echoes Figma's design, using SASS for styling responsive layout, modal windows, mobile menu,  etc.",
            icons: (
                <>
                    <HTMLIcon />
                    <CSSIcon />
                    <SassIcon />
                </>
            ),
            linkGH: 'https://github.com/ValeriiaMezentseva/web-studio',
            linkWeb: 'https://valeriiamezentseva.github.io/web-studio/',
        },
    ];  
    
    const [slideIndexes, setSlideIndexes] = useState(projectData.map(() => 0));

      const handleImageChange = (projectIndex, newIndex) => {
    setSlideIndexes((prevIndexes) =>
      prevIndexes.map((index, currentIndex) =>
        currentIndex === projectIndex ? newIndex : index
      )
    );
  };



    return (
         <Element name="projects">
    
        <List>
           
            {projectData.map((project, projectIndex) => (
            <ProjectItem key={projectIndex}>
                <CarouselContainer>
                <Carousel
            selectedItem={slideIndexes[projectIndex]}
            onChange={(newIndex) => handleImageChange(projectIndex, newIndex)}
            showStatus={true}
                        showThumbs={false}
                        dynamicHeight={true}
                        autoPlay={true}
                        interval={4000}
                        swipeable={true}
                        emulateTouch={true}
                        infiniteLoop={true}
                        showArrows={true}
                        useKeyboardArrows={true}
                        
                        
                        
          >
            {project.images.map((image, imageIndex) => (
              <div key={imageIndex}>
                <Img src={image} alt={project.title} />
              </div>
            ))}
                    </Carousel>
                    </CarouselContainer>
                <ProjectInfo>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <IconsBox> {project.icons} </IconsBox>
                        <ProjectText>{project.text}</ProjectText>
                        <LinksBox>
                        
                            <SocialsLink href={project.linkGH}> <GitHubIcon /> <span>Code</span></SocialsLink>
                         
                            <SocialsLink href={project.linkWeb}><LinkIcon /> <span>Website</span> </SocialsLink>
                            {project.linkBack && (
                                <SocialsLink href={project.linkBack}><BackIcon/><span>Backend</span></SocialsLink>
                            )}
                            </LinksBox>
              
                </ProjectInfo>
                    </ProjectItem>
                
        ))}
              
            </List>
             </Element>
           
            
    ); 
}; 

export default Projects;