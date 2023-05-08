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
        <small>Terms & Conditions</small>
        <small>Privacy Policy</small>
      </div>
      <div className="footer__icons footer__social-icons">
          <a
          href="https://www.facebook.com/"
          target="blank">
            <FaFacebook />
          </a>

          <a
          href="https://twitter.com/"
          target="blank">
            <FaTwitter />
          </a>

          <a
          href="https://www.instagram.com/"
          target="blank">
            <FaInstagram />
          </a>
        </div>
    </footer>
  );
}

export default Footer;
