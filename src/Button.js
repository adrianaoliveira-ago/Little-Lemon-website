import "./Button.css";

const Button = ({ label, onClick }) => {
  return (
    <div className="button">
      <button type="button" className="button__button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
