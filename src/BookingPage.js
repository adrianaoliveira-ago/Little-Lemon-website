import BookingForm from "./ BookingForm";

const BookingPage = ({ availableTimes }) => {
  return (
    <>
      <BookingForm availableTimes={availableTimes} />
    </>
  );
};

export default BookingPage;
