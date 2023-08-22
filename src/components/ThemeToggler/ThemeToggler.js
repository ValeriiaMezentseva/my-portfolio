import { FaMoon, FaSun } from 'react-icons/fa'; // Import the moon and sun icons

import { SwitchBody } from './ThemeToggler.styled';

export const ThemeToggler = ({ status, onClick }) => {
  return (
    <SwitchBody status={status} onClick={onClick}>
      {status ? <FaSun size={22} color="#FFDC97" /> : <FaMoon size={22} color="#403029" />}
    </SwitchBody>
  );
};