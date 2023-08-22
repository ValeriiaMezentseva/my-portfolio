import logo from '../pictures/logo.png';
import darkLogo from '../pictures/logoDark.png'

import gif from '../pictures/logo.gif';
import darkGif from  '../pictures/gifDark.gif'; 

export const lightTheme = Object.freeze({
    fonts: {
        primary: 'Poppins, sans-serif',
        secondary: 'Lato, sans-serif',
        tertiary: 'Inter, sans-serif',
        quaternary: 'Helvetica, sans-serif',
    },
    colors: {
        primaryDarkText: '#d1a092', //dark blue, almost black//
        secondaryDarkText: '#403029', //blue-dark gray//
        tertiaryDarkText: '#2D3D4E', //dark blue//
        quaternaryDarkText: '#FAFAFA', //gray//
        backgroundColor: "#fffbf8",

        lightPink: "#d1a092",
        darkBeige: '#E6CEB8',
        lightBeige: "#fffbf8",
        darkPink: '#BD6364', 
        skinColor: '#ecbc9f',
        


        blackText: '#000000',
    
        whiteText: '#ffffff',

        primaryLightText: '#FAFAFA',
        secondaryLightText: '#e0e0e0', //greyish white//
        tertiaryLightText: '#BDBDBD', //light gray//
        shadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",

        normalDark: '#9db5e0', //bright dark blue //
        purpleAccent: '#680572',
        lightBlue: '#B3DEE5',



        lightBackground: '#edf1f5',
        whiteBackground: '#ffffff',
        primaryDarkBackground: '#1E1F28',
        secondaryDarkBackground: '#22252A',

    },
  
    images: {
        logo: logo,
        gif: gif, 
    },
}); 

export const darkTheme = Object.freeze({
    fonts: {
        primary: 'Poppins, sans-serif',
        secondary: 'Lato, sans-serif',
        tertiary: 'Inter, sans-serif',
        quaternary: 'Helvetica, sans-serif',
    },
    colors: {
        primaryDarkText: '#FFC7C9',
        secondaryDarkText: '#EDE4DA',
        tertiaryDarkText: '#FAFAFA',
        quaternaryDarkText: '#3e4462',
         backgroundColor: "#0B1D3D",

        blackText: '#FAFAFA',
        whiteText: '#ffffff',

        primaryLightText: '#FAFAFA',
        secondaryLightText: '#e0e0e0',
        tertiaryLightText: '#BDBDBD',
       shadow: "rgba(0, 0, 0, 0.90) 0px 22px 70px 4px;",


        normalDark: '#C3D8FF', //light blue//
        purpleAccent: '#BB48C6',
        lightBlue: '#B3DEE5',


        lightBackground: '#1E1F28',
        whiteBackground: '#2A2C36',
        primaryDarkBackground: '#1E1F28',
        primaryGreenBackground: '#1E1F28',
        secondaryDarkBackground: '#8BAA36',

    },
    images: {
        logo: darkLogo,
        gif: darkGif,
    },
}); 

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};