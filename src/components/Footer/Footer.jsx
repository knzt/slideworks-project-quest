import "./Footer.css";
// icon
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// local asset
import Logo from "../../assets/img/whitelogo.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="Logo" />
      <hr />
      <div className="footer__info">
        <small>
            <a href="#" title="Acessar página de termos e condições">Terms & Conditions</a>
        </small>
        <small><a href="#" title="Acessar página de políticas de privacidade">Privacy Policy</a></small>
      </div>
      <div className="footer__icons footer__social-icons">
          <a
          href="https://www.facebook.com/"
          target="blank"
          title="Acesse nossa página no Facebook">
            <FaFacebook />
          </a>

          <a
          href="https://twitter.com/"
          target="blank"
          title="Acesse nosso perfil no Twitter">
            <FaTwitter />
          </a>

          <a
          href="https://www.instagram.com/"
          target="blank"
          title="Acesse nosso perfil no Instagram">
            <FaInstagram />
          </a>
        </div>
    </footer>
  );
}

export default Footer;
