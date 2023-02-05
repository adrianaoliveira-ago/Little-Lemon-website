import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ConfirmedBooking from "./ConfirmedBooking";
import Header from "./Header";

const GenericPage = ({ text }) => {
  return (
    <div>
      <Header />
      <h1 style={{ paddingTop: "20px", textAlign: "center" }}>{text}</h1>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/confirmation",
    element: <ConfirmedBooking />,
  },
  {
    path: "/order-online",
    element: (
      <GenericPage text={"Order Online is not available at the moment"} />
    ),
  },
  {
    path: "/login",
    element: <GenericPage text={"Login is not available at the moment"} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
