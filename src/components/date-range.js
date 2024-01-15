import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import React, { useState } from "react";

const Calendar = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [activeDate, setActiveDate] = useState(new Date());

  const getHeader = () => {
    return (
      <div className="header">
        <div
          className="navIcon"
          onClick={() => setActiveDate(subMonths(activeDate, 1))}
        >
          <span>&lt;</span>
        </div>
        <h2 className="currentMonth">{format(activeDate, "yyyy年M月")}</h2>
        <div
          className="navIcon"
          onClick={() => setActiveDate(addMonths(activeDate, 1))}
        >
          <span>&gt;</span>
        </div>
      </div>
    );
  };

  const generateDatesForCurrentWeek = (date, activeDate) => {
    let currentDate = date;
    const week = [];
    const isStartDateBeforeEndDate =
      selectedStartDate &&
      selectedEndDate &&
      selectedStartDate < selectedEndDate;

    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      const isSelectedStartDate = isSameDay(cloneDate, selectedStartDate);
      const isSelectedEndDate = isSameDay(cloneDate, selectedEndDate);
      const isInRange =
        selectedStartDate &&
        selectedEndDate &&
        ((isStartDateBeforeEndDate &&
          cloneDate >= selectedStartDate &&
          cloneDate <= selectedEndDate) ||
          (!isStartDateBeforeEndDate &&
            cloneDate <= selectedStartDate &&
            cloneDate >= selectedEndDate));

      week.push(
        <div
          key={currentDate}
          className={`day ${
            isSameMonth(currentDate, activeDate) ? "" : "inactiveDay"
          } ${isSelectedStartDate ? "selectedStartDate" : ""}
          ${isSelectedEndDate ? "selectedEndDate" : ""}
          ${isInRange ? "selectedRange" : ""}
          ${isSameDay(currentDate, new Date()) ? "today" : ""}`}
          onClick={() => handleDateClick(cloneDate)}
        >
          {format(currentDate, "d")}日
        </div>
      );
      currentDate = addDays(currentDate, 1);
    }
    return <>{week}</>;
  };

  const getDates = () => {
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;

    const allWeeks = [];

    while (currentDate <= endDate) {
      allWeeks.push(generateDatesForCurrentWeek(currentDate, activeDate));
      currentDate = addDays(currentDate, 7);
    }

    return (
      <div key={currentDate.toISOString()} className="weekContainer">
        {allWeeks}
      </div>
    );
  };

  const handleDateClick = (clickedDate) => {
    if (!selectedStartDate) {
      // Set as the start date
      setSelectedStartDate(clickedDate);
      setSelectedEndDate(null);
    } else if (!selectedEndDate) {
      // Set as the end date
      setSelectedEndDate(clickedDate);
    } else if (clickedDate < selectedStartDate) {
      // Reset start date, set clicked date as end date
      setSelectedStartDate(clickedDate);
    } else {
      // Set as the end date
      setSelectedEndDate(clickedDate);
    }
  };

  return (
    <section className="section">
      {getHeader()}
      {getDates()}
    </section>
  );
};

export default Calendar;
