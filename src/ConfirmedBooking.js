import { useNavigate } from "react-router-dom";

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <h3>The booking has been confirmed</h3>
      <button onClick={onButtonClick}>Home</button>
    </>
  );
};

export default ConfirmedBooking;
