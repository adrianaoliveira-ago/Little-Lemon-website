import BookingForm from "./BookingForm";
import "./BookingForm.css";
const BookingPage = ({ submitForm }) => {
  return (
    <div className="Bookinnform">
      <BookingForm submitForm={submitForm} />
    </div>
  );
};

export default BookingPage;
