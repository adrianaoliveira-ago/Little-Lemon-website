import logoFooter from "./logoFooter.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer__div">
      <footer className="footer">
        <img src={logoFooter} alt="logo" className="footer__logo" />

        <div className="footer__div__uls">
          <ul className="footer__ul1">
            <p>Doormat Navigation</p>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
          <ul className="footer__ul2">
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
        </div>
      </footer>
    </div>
  );
};

export default Footer;
