import { useState } from "react";
import BookingPage from "./BookingPage";
import { useReducer } from "react";

const Main = () => {
  const availableTimesArrayInitialState = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  const updateTimes = () => {
    return availableTimesArrayInitialState;
  };

  // const [times, setTimes] = useState(availableTimesArray);
  const [times, dispatchTimes] = useReducer(
    updateTimes,
    availableTimesArrayInitialState
  );

  // const initializeTimes = () => {// }
  return (
    <main>
      <BookingPage availableTimes={times} />
    </main>
  );
};

export default Main;
