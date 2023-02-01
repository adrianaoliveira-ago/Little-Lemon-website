// import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Highlights from "./Highlights";
import BookingPage from "./BookingPage";
import { useReducer, createContext } from "react";
import { fetchAPI, submitAPI } from "./api";
import Testimonials from "./Testimonials";
import Buttons from "./Buttons";
import About from "./About";

export const AvalibleTimesDispatch = createContext(null);

const Main = () => {
  const navigate = useNavigate();

  const initializeTimes = () => {
    return fetchAPI(new Date());
  };

  const updateTimesReducer = (state, newDate) => {
    console.log("updateTimes", newDate);
    const newTimes = fetchAPI(new Date(newDate));
    console.log(newTimes.length);
    return newTimes;
  };

  const [times, setTimes] = useReducer(updateTimesReducer, initializeTimes());

  const submitForm = (formData) => {
    console.log(formData);
    const response = submitAPI(formData);

    if (response === true) {
      console.log("Success");
      navigate("/confirmation");
    }
  };

  return (
    <main>
      <AvalibleTimesDispatch.Provider value={[times, setTimes]}>
        <Hero />
        <Buttons />
        <Highlights />
        <Testimonials />
        <About />
        <BookingPage submitForm={submitForm} />
      </AvalibleTimesDispatch.Provider>
    </main>
  );
};

export default Main;
