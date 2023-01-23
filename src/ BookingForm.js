import { useState } from "react";

const BookingForm = ({ availableTimes }) => {
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
  };

  const onChangeGuests = (event) => {
    const newGuests = event.target.value;
    setGuests(newGuests);
    console.log(newGuests);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit", date, guests, occasion, time);

    // after the request is successful
    resetForm();
  };

  const resetForm = () => {
    setDate("");
    setGuests(1);
    setOcassion("");
    setTime("");
  };

  return (
    <form
      style={{ display: "grid", maxWidth: 200, gap: 20 }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={onChangeDate} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={onChangeTime}>
        {availableTimes.map((item) => {
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
        {occasionType.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>

      <input type="submit" defaultValue="Make Your reservation" />
    </form>
  );
};

export default BookingForm;