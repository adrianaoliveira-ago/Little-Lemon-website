import "./Highlight.css";

const Highlight = ({ image, title, price, description, order, logo }) => {
  return (
    <div className="Highlight__component">
      <img src={image} alt="" className="Highlight__image" />
      <div className="Highlight__div">
        <h1 className="Highlight__title">{title}</h1>
        <h2 className="Highlight__price">{price}</h2>
      </div>
      <div className="Highlight__description__order">
        <p className="Highlight__description">{description}</p>
        <h1 className="Highlight__order">{order}</h1>
        <img src={logo} alt="" className="Highlight__logo__car"></img>
      </div>
    </div>
  );
};

export default Highlight;
