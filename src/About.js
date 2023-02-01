import "./About.css";

import imageFish from "./imageFish.png";
import imageCooker from "./imageCooker.png";
import imagePasta from "./imagePasta.png";

const About = () => {
  return (
    <div className="about__div">
      <div className="about__div__titles">
        <h1 className="about__h1__title">Little Lemon</h1>
        <h1 className="about__h1__subtitle">Chicago</h1>
      </div>
      <div className="about__paragraph">
        <p className="about__paragraph__description">
          We believe in the commitment to our community and in fostering long
          term relationships with local farmers and fishermen. Our menus reflect
          these connections, featuring local, seasonal produce and sustainably
          sourced seafood and meats.
        </p>
      </div>
      <div className="about__img__div">
        <img src={imageFish} alt="" className="about__img__fish" />
      </div>
      <div className="about__imgs__div">
        <img src={imageCooker} alt="" className="about__img__cooker" />
        <img src={imagePasta} alt="" className="about__img__pasta" />
      </div>
    </div>
  );
};

export default About;
