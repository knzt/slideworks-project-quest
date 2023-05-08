import "./Header.css"
import Logo from '../../assets/img/logo.png'
import { useContext } from 'react';
import { ThemeContext } from '../../themeContext';
import {FaSun, FaMoon} from 'react-icons/fa'

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <header className={isDarkMode ? 'dark-mode header' : 'header'}>
      <div className="header-container">
        <img
        src={Logo}
        alt="Logo" className="logo"/>
      </div>
      <div>
         <button
          title={isDarkMode ? 'mudar para o modo claro' : 'mudar para o modo escuro'}
          onClick={toggleDarkMode}>
          {isDarkMode ? <FaMoon/> : <FaSun/>}
        </button>
    </div>

    </header>
  )
};

export default Header;
