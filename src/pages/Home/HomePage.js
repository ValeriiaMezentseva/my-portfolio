import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { theme } from 'constants';

import About from 'components/About/About';

import { Img, Container } from './HomePage.styled';

const AboutPage = () => {
   const { darkTheme } = useSelector(state => state.theme);
   const currentTheme = darkTheme ? 'dark' : 'light';
  const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 4000); 

    return () => clearTimeout(timeoutId);
    }, []);
  
    return (
         <Container>
        {isVisible && <Img src={theme[currentTheme].images.gif} alt="Logo GIF" />}
        {!isVisible && <About /> }
    </Container>
  );
};

export default  AboutPage;