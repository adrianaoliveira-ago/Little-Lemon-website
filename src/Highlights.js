import "./Highlights.css";
import imageHighlights1 from "./ImageHighlights1.jpg";
import imageHighlights2 from "./ImageHighlights2.jpg";
import imageHighlights3 from "./ImageHighlights3.jpg";

const Highlights = () => {
  return (
    <div className="Highlights__divs">
      <div className="Highlights__div1">
        <img src={imageHighlights1} alt="" className="Highlights__photo1" />
      </div>

      <div className="Highlights__div3">
        <img src={imageHighlights3} alt="" className="Highlights__photo3" />
      </div>

      <div className="Highlights__div2">
        <img src={imageHighlights2} alt="" className="Highlights__photo2" />
      </div>
    </div>
  );
};

export default Highlights;
