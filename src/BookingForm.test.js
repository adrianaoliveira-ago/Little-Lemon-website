import { render, screen } from "@testing-library/react";
// import BookingForm from "./BookingForm";
import Main from "./Main";

// test("Renders the BookingForm heading", () => {
//   render(<BookingForm />);
//   const headingElement = screen.getByText("Book Now");
//   expect(headingElement).toBeInTheDocument();
// });

test("Render submit button", () => {
  render(<Main />);

  const buttonSubmitElement = screen.getByTestId("submit-button");

  expect(buttonSubmitElement).toBeInTheDocument();
});
