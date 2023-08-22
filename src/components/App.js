import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { useSelector } from 'react-redux';

import { ThemeProvider } from '@emotion/react';
import { theme } from "constants";

import SharedLayout from "components/SharedLayout";


const AboutPage = lazy(() => import('../pages/Home/HomePage'));
const ProjectsPage = lazy(() => import('../pages/Projects/ProjectsPage')); 

export const App = () => {
 
  const { darkTheme } = useSelector(state => state.theme);
  
    
  return (
      <ThemeProvider theme={darkTheme ? theme.dark : theme.light}>
        <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<AboutPage />} />
           <Route path="projects" element={<ProjectsPage />} />
           <Route path="*" element={<div>Looks like this page doesn't exist. Try another page.</div>} />
          </Route>
        </Routes>
        </ThemeProvider>
    )
};
