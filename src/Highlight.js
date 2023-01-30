import "./Highlight.css";

const Highlight = ({ image, title, price, description, order }) => {
  return (
    <div className="Highlight__component">
      <img src={image} alt="" className="Highlight__image" />
      <h1>{title}</h1>
      <h2>{price}</h2>
      <p>{description}</p>
      <h1>{order}</h1>
    </div>
  );
};

export default Highlight;
