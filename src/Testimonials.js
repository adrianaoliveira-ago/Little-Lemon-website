import Testimonial from "./Testimonial";
import "./Testimonials.css";

import Image1 from "./Image1.png";
import Image2 from "./Image2.png";
import Image3 from "./Image3.png";
import Image4 from "./Image4.png";
// import ImageStar from "./ImageStar.png";
import rating from "./rating.png";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials__div">
        <h1 className="testimoniais__title">Testimonials</h1>

        <Testimonial
          rating={rating}
          image={Image1}
          name={"Joseph"}
          review={
            "This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again."
          }
        />
        <Testimonial
          rating={rating}
          image={Image2}
          name={"Johan"}
          review={
            "It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations."
          }
        />
        <Testimonial
          rating={rating}
          image={Image3}
          name={"Amanda"}
          review={
            "This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority. Food is pretty good, some italian classics and some twists, and for their prices it’s 100% worth it."
          }
        />
        <Testimonial
          rating={rating}
          image={Image4}
          name={"Joana"}
          review={
            "Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended."
          }
        />
      </div>
    </>
  );
};

export default Testimonials;
