import About from "./About";
import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import { StaticRouter as Router } from "react-router-dom";

it('should render the About page contact details', () => {

	const phone_number = "0412 345 678"
	render(<Router><About settings={{phone_number: phone_number}} /></Router>)
	expect(screen.getByText(phone_number)).toBeInTheDocument();
	expect(screen.getByText(/Get in touch today if you'd like to find and more and to book your free trial/i)).toBeInTheDocument();
})