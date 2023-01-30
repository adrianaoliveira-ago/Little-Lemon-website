import "./Testimonial.css";

const Testimonial = ({ rating, image, name, review }) => {
  return (
    <div className="testimonial__div">
      <img src={rating} alt="" className="testimonial__image__star" />
      <img src={image} alt="" className="testimonial__image" />
      <h1 className="testimonial__name">{name}</h1>
      <p className="testimonial__paragraph">{review}</p>
    </div>
  );
};

export default Testimonial;
