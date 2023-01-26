import logo from "./logo.svg";
import "./Nav.css";

const Nav = () => {
  return (
    //     <Routes>
    //     <Route path="/" element={<HomePage />}></Route>
    //     <Route path="/booking" element={<BookingPage />}></Route>
    // </Routes>
    <nav className="nav">
      <img
        src={logo}
        alt="logo"
        className="nav__logo__header"
        data-testid="nav-logo"
      />

      <ul className="nav__links">
        <li className="nav__li__links">
          <a href="/" data-testid="Home">
            Home
          </a>
        </li>
        <li className="nav__li__links">
          <a href="/about" data-testid="About">
            About
          </a>
        </li>
        <li className="nav__li__links">
          <a href="/menu">Menu</a>
        </li>
        <li className="nav__li__links">
          <a href="/reservations">Reservations</a>
        </li>
        <li className="nav__li__links">
          <a href="./order-online">Order Online</a>
        </li>
        <li className="nav__li__links">
          <a href="./login" data-testid="Login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
