import logo from "./logo.svg";
import "./Nav.css";

const Nav = () => {
  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    document.documentElement.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };
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
          <a href="/" data-testid="Home" className="nav__home">
            Home
          </a>
        </li>
        <li className="nav__li__links">
          <a
            href="#about-section"
            onClick={(event) => {
              event.preventDefault();
              scrollTo("about-section");
            }}
            data-testid="About"
            className="nav__about"
          >
            About
          </a>
        </li>
        <li className="nav__li__links">
          <a
            href="#highlights-menu"
            className="nav__menu"
            onClick={(event) => {
              event.preventDefault();
              scrollTo("highlights-menu");
            }}
            data-testid="Menu"
            className="nav__about"
          >
            Menu
          </a>
        </li>
        <li className="nav__li__links">
          <a
            href="#reservation-form"
            className="nav__reservations"
            onClick={(event) => {
              event.preventDefault();
              scrollTo("reservation-form");
            }}
            data-testid="reservation"
          >
            Reservations
          </a>
        </li>
        <li className="nav__li__links">
          <a href="./order-online" className="nav__order">
            Order Online
          </a>
        </li>
        <li className="nav__li__links">
          <a href="./login" data-testid="Login" className="nav__login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
