import "./Hero.css";
import Button from "./Button";

import imageHero from "./imageHero.jpg";

const Hero = () => {
  return (
    <div className="hero__div">
      <div className="hero__div__title">
        <h1 className="hero__title">Little Lemon</h1>
      </div>
      <div className="hero__div__subtitle">
        <h1 className="hero__subtitle">Chicago</h1>
      </div>
      <div className="hero__div__button">
        <Button button={"Reserve a Table"} />
      </div>
      <img src={imageHero} alt="'" className="hero__photo" />
    </div>
  );
};

export default Hero;
