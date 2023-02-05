import logoFooter from "./logoFooter.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer__div">
      <footer className="footer">
        {/* <div className="footer__div__uls"> */}
        <img src={logoFooter} alt="logo" className="footer__logo" />
        <ul className="footer__ul">
          <p>Doormat Navigation</p>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
        <ul className="footer__ul">
          <p>Contact</p>
          <li>Adress</li>
          <li>Phone number</li>
          <li>E-mail</li>
        </ul>
        <ul className="footer__ul">
          <p>Social Media Links</p>
          <li>Adress</li>
          <li>Phone number</li>
          <li>E-mail</li>
        </ul>
        {/* </div> */}
      </footer>
    </div>
  );
};

export default Footer;
