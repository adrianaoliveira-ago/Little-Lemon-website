import "./Hero.css";

import imageHero from "./imageHero.jpg";

const Hero = () => {
  return (
    <div className="hero__div">
      <img src={imageHero} alt="'" className="hero__photo" />
    </div>
  );
};

export default Hero;
