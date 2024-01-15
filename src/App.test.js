import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Calendar from "./components/date-range";

test("handles date click correctly", () => {
  render(<Calendar />);

  // Click on the 1st day of the month
  const dateElement = screen.getByText(/1/i);
  fireEvent.click(dateElement);

  // Expect that the selected start date is set to the clicked date
  expect(screen.getByText(/1日/i)).toHaveClass("selectedStartDate");

  // Click on the 5th day of the month
  const anotherDateElement = screen.getByText(/5日/i);
  fireEvent.click(anotherDateElement);

  // Expect that the selected end date is set to the clicked date
  expect(screen.getByText(/5日/i)).toHaveClass("selectedEndDate");

  // Click on a date earlier than the selected start date
  const earlierDateElement = screen.getByText(/28日/i);
  fireEvent.click(earlierDateElement);

  // Expect that the selected start date is updated to the clicked date, and end date is null
  expect(screen.getByText(/28日/i)).toHaveClass("selectedStartDate");
  expect(screen.getByText(/5日/i)).not.toHaveClass("selectedEndDate");
});
