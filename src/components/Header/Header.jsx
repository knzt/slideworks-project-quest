import "./Header.css"
import Logo from '../../assets/img/logo.png'

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img
        src={Logo}
        alt="Logo" className="logo"/>
      </div>
    </header>
  )
};

export default Header;
