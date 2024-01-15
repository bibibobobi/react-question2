import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Calendar from "./components/date-range";

test("renders Calendar component", () => {
  render(<Calendar />);
  const headerElement = screen.getByText(/yyyy年M月/i);
  expect(headerElement).toBeInTheDocument();
});

test("handles date click correctly", () => {
  render(<Calendar />);
  const dateElement = screen.getByText(/1日/i);
  fireEvent.click(dateElement);
});
