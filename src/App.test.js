import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders nav logo", () => {
  render(<App />);

  const navLogo = screen.getByTestId("nav-logo");
  expect(navLogo).toBeInTheDocument();
});
