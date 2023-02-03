import "./Hero.css";
import Button from "./Button";

import imageHero from "./imageHero.jpg";

const Hero = ({ showButton = true }) => {
  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    document.documentElement.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="hero__div">
      <div className="hero__div__2">
        <div className="hero__div__title">
          <h1 className="hero__title">Little Lemon</h1>
        </div>
        <div className="hero__div__subtitle">
          <h1 className="hero__subtitle">Chicago</h1>
        </div>

        <div className="hero__div__description">
          <p className="hero__div__paragraph">
            To provide a restaurant that serves locally grown food with amazing
            taste, at an affordable price, where all can enjoy the flavor of
            community.
          </p>
        </div>

        {showButton === true && (
          <div className="hero__div__button">
            <Button
              label={"Reserve a Table"}
              onClick={(event) => {
                event.preventDefault();
                scrollTo("reservation-form");
              }}
              data-testid="About"
            />
          </div>
        )}

        <img src={imageHero} alt="'" className="hero__photo" />
      </div>
    </div>
  );
};

export default Hero;
