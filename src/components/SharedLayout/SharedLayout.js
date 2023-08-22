import { Outlet } from 'react-router-dom';
import { Suspense, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from 'components/Loader/Loader';
import Header  from 'components/Header';
import Footer from 'components/Footer';

import MobileMenu from '../MobileMenu/MobileMenu';

import pdf from '../../pictures/Resume.pdf'; 
import { toggleTheme } from 'redux/theme/themeSlice';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import {Main, Box, ThemeTogglerBox, ResumeButton, MobileMenuButton, MobileMenuIcon} from './SharedLayout.styled'

const SharedLayout = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const dispatch = useDispatch();
    const { darkTheme } = useSelector(state => state.theme);

    const themeToggleHandler = () => {
        dispatch(toggleTheme());
    };

      const toggleMenuHandler = () => {
    return setToggleMenu(prevState => !prevState);
      };
    
    return (
        <Main>
            <Header />
            <ThemeTogglerBox>
                <ThemeToggler status={darkTheme} onClick={themeToggleHandler} />
            </ThemeTogglerBox>
            <ResumeButton href={pdf} target="_blank" rel='noreferrer'> Resume</ResumeButton>

             <MobileMenuButton isOpen={toggleMenu} type="button" onClick={toggleMenuHandler}>
        <MobileMenuIcon />
      </MobileMenuButton>

            {toggleMenu && (
        <MobileMenu isOpen={toggleMenu} toggleMenuHandler={toggleMenuHandler}/>
      )}

            <Box>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </Box>
            <Footer />
        </Main>
    );
}; 

export default SharedLayout;