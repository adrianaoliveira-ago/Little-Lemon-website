import BookingForm from "./BookingForm";

const BookingPage = ({ submitForm }) => {
  return (
    <>
      <BookingForm submitForm={submitForm} />
    </>
  );
};

export default BookingPage;
