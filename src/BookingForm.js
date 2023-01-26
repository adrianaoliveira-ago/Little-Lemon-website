import { useState, useContext } from "react";
import { AvalibleTimesDispatch } from "./Main";
// import ConfirmedBooking from "./ConfirmedBooking";

const BookingForm = ({ submitForm }) => {
  const [times, setTimes] = useContext(AvalibleTimesDispatch);

  const occasionType = ["Birthday", "Anniversary"];

  const [time, setTime] = useState("");
  const [occasion, setOcassion] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);

  const onChangeTime = (event) => {
    console.log("onChangeTime", event.target.value);
    const newTime = event.target.value;
    setTime(newTime);
  };

  const onChangeOccasion = (event) => {
    const newOcasion = event.target.value;
    setOcassion(newOcasion);
  };

  const onChangeDate = (event) => {
    const newDate = event.target.value;
    console.log(newDate);
    setDate(newDate);

    // send event to main
    setTimes(newDate);
  };

  const onChangeGuests = (event) => {
    const newGuests = event.target.value;
    setGuests(newGuests);
    console.log(newGuests);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("handleSubmit", date, guests, occasion, time);
    const formData = { date, guests, occasion, time };
    submitForm(formData);

    // after the request is successful
    resetForm();
  };

  const resetForm = () => {
    setDate("");
    setGuests(1);
    setOcassion("");
    setTime("");
  };

  const getMinDate = () => {
    console.log(new Date());
    const todayDate = new Date();
    const todayDateString = todayDate.toISOString().split("T")[0];
    console.log(todayDateString);
    return todayDateString;
  };

  const getMaxDate = () => {
    console.log(new Date());

    const todayDate = new Date();
    const avalibleDays = 30;
    todayDate.setDate(todayDate.getDate() + avalibleDays);

    const maxDateString = todayDate.toISOString().split("T")[0];
    console.log(maxDateString);

    return maxDateString;
  };

  const isButtonDisabled = () => {
    if (time !== "" && date !== "" && guests > 0 && occasion !== "") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <form
      style={{ display: "grid", maxWidth: 200, gap: 20 }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={onChangeDate}
        min={getMinDate()}
        max={getMaxDate()}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={onChangeTime}>
        <option disabled value="">
          -- select an option --
        </option>
        {times.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>

      <label htmlFor="guests">Number of guests </label>
      <input
        type="number"
        placeholder={1}
        min={1}
        max={10}
        id="guests"
        value={guests}
        onChange={onChangeGuests}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={onChangeOccasion}>
        <option disabled value="">
          -- select an option --
        </option>
        {occasionType.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>

      <input
        disabled={isButtonDisabled()}
        type="submit"
        defaultValue="Make Your reservation"
        data-testid="submit-button"
      />
      {/* <ConfirmedBooking /> */}
    </form>
  );
};

export default BookingForm;
