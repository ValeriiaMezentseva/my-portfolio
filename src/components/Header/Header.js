import { useSelector } from 'react-redux';

import { theme } from 'constants';


import { Navigation, Img, LogoLink, Link, Span, NavBar} from './Header.styled'; 

const Header = () => {
  const { darkTheme } = useSelector(state => state.theme);
  const currentTheme = darkTheme ? 'dark' : 'light';
  

  return (
    <Navigation>
      <LogoLink to="/">
        <Img src={theme[currentTheme].images.logo} alt="logo" />
      </LogoLink>

      <NavBar>
        <Link to="/">
          <Span> about me </Span>
        </Link>

        <Link to="/projects">
          <Span> My Projects  </Span>
        </Link>
      </NavBar>
            
    </Navigation>
  );
}; 

export default Header; 