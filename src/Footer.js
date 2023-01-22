import logoFooter from "./logoFooter.svg";

const Footer = () => {
  return (
    <footer>
      <img src={logoFooter} alt="logoFooter" />
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
