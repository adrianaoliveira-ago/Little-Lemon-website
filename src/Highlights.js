import "./Highlights.css";
import Highlight from "./Highlight";
import imageHighlights1 from "./ImageHighlights1.jpg";
import imageHighlights2 from "./ImageHighlights2.jpg";
import imageHighlights3 from "./ImageHighlights3.jpg";
import ImageCar from "./ImageCar.png";

const Highlights = () => {
  return (
    <div>
      <div className="Highlights__div">
        <h1 className="Highlights__title">This Weeks specials!</h1>
      </div>
      <div className="Highlights__component">
        <Highlight
          image={imageHighlights1}
          title={"Greek Salad"}
          price={"$12,99"}
          description={
            "The famous greek salad of lettuce, peppers, olives and our Chicago style feta cheese, garnished with cruncy garlarc and rosemary croutons."
          }
          order={"Order a delivery"}
          logo={ImageCar}
        />
        <Highlight
          image={imageHighlights3}
          title={"Bruschetta"}
          price={"$5,99"}
          description={
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
          }
          order={"Order a delivery"}
          logo={ImageCar}
        />
        <Highlight
          image={imageHighlights2}
          title={"Lemon Desert"}
          price={"$5,00"}
          description={
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          }
          order={"Order a delivery"}
          logo={ImageCar}
        />
      </div>
    </div>
  );
};

export default Highlights;
