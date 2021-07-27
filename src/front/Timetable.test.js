import Timetable from "./Timetable";
import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import { StaticRouter as Router } from "react-router-dom";

describe("Timetable", () => {
  it("should show the Timetable", () => {
    render(
      <Router>
        <Timetable />
      </Router>
    );
    const text = screen.getByTestId("mondayTimes");
    expect(text).toHaveTextContent(/6:00 AM/i);
  });

  it("should show the email and phone number", () => {
    render(
      <Router>
        <Timetable />
      </Router>
    );
    const phoneNumber = screen.getByTestId("phoneNumber");
    expect(phoneNumber).toBeInTheDocument();
  });

  it("returns the first plan", () => {
    render(
      <Router>
        <Timetable />
      </Router>
    );
    const session_times = screen.getByTestId("sessionTimesWeek");
    expect(session_times).toHaveTextContent(
      /We run two sessions every Monday, Wednesday and Friday/i
    );
  });
});