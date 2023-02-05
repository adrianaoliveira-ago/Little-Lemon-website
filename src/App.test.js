import { render, screen } from "@testing-library/react";
import App from "./App";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("renders nav logo", () => {
  render(<App />);

  const navLogo = screen.getByTestId("nav-logo");
  expect(navLogo).toBeInTheDocument();
});
