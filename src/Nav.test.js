import { render, screen } from "@testing-library/react";

import Nav from "./Nav";

test("Renders button Home", () => {
  render(<Nav />);

  const buttonHomePage = screen.getByText("Home");
  expect(buttonHomePage).toBeInTheDocument();
});

test("Renders button Login", () => {
  render(<Nav />);

  const buttonLoginPage = screen.getByText("Login");
  expect(buttonLoginPage).toBeInTheDocument();
});

test("Renders button About", () => {
  render(<Nav />);

  const buttonLoginAbout = screen.getByText("About");
  expect(buttonLoginAbout).toBeInTheDocument();
});
