import pdf from '../../pictures/Resume.pdf'; 

import {
  MobileMenuBox,
  MobileMenuClose,
  MobileNav,
  Link,
  MobileMenuCloseIcon,
  ResumeButton
} from "./MobileMenu.styled";

const MobileMenu = ({ isOpen, toggleMenuHandler }) => {


  const closeMenuHandler = () => {
    toggleMenuHandler();
  };

  return (
    <MobileMenuBox isOpen={isOpen}>
      <MobileMenuClose type="button" onClick={closeMenuHandler}>
        <MobileMenuCloseIcon />
      </MobileMenuClose>
      <MobileNav>
        <Link to="/" end onClick={closeMenuHandler}>
          About me
        </Link>
        <Link to="/projects" onClick={closeMenuHandler}>
          My Projects
        </Link>
        <ResumeButton href={pdf} target="_blank" rel='noreferrer'> Resume</ResumeButton>

      </MobileNav>
    </MobileMenuBox>
  );
};

export default MobileMenu;