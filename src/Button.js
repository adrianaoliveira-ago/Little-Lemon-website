import "./Button.css";

const Button = ({ button }) => {
  return (
    <div className="button">
      <button type="button" className="button__button">
        {button}
      </button>
    </div>
  );
};

export default Button;
