import { useNavigate } from "react-router-dom";
import "./ConfirmedBooking.css";
import "./Header.js";
import "./Footer.js";
import Header from "./Header.js";
import Hero from "./Hero.js";
import Footer from "./Footer.js";
import Button from "./Button.js";

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <Hero showButton={false} />
      <div className="ConfirmedBooking__message">
        <h3>The booking has been confirmed</h3>
      </div>
      <div className="ConfirmedBooking__button">
        <Button label={"Home"} onClick={onButtonClick}></Button>
      </div>

      {/* <button onClick={onButtonClick}>Home</button> */}
      <Footer />
    </>
  );
};

export default ConfirmedBooking;
