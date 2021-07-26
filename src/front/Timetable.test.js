import Timetable from "./Timetable";
import { render, screen } from "@testing-library/react";
import { describe } from "yargs";
import { StaticRouter as Router } from "react-router-dom";


describe('Timetable', () => {
	it('should show the Timetable', () => {
		render(<Router><Timetable /></Router>);
		const text = screen.getByText(/6:00 AM/i);
		expect(text).toBeInTheDocument();
	});

	it('should show the email and phone number', () => {
		
		render(<Router><Timetable /></Router>);
		const table = screen.getByRole('div');
		expect(table).toHaveTextContent(/0410 068 060/);
	})
});

test('Show timetable', () => {
	render(<Router><Timetable /></Router>);
	const button = screen.getByText(/We run two sessions every Monday, Wednesday and Friday/i);
	expect(button).toBeInTheDocument();
  });