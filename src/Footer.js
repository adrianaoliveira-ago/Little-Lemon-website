import logoFooter from "./logoFooter.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="logo" className="footer__logo" />
      <ul>
        <p>Doormat Navigation</p>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
      <ul>
        <p>Contact</p>
        <li>Adress</li>
        <li>Phone number</li>
        <li>email</li>
      </ul>
      <ul>
        <p>Social Media Links</p>
        <li>Adress</li>
        <li>Phone number</li>
        <li>email</li>
      </ul>
    </footer>
  );
};

export default Footer;
