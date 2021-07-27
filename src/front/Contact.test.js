import Contact from "./Contact";
import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import axios from "axios";
import { act } from "react-dom/test-utils"
import { StaticRouter as Router } from "react-router-dom";

it('should render contact details', () => {

	const phone_number = "0412 345 678"
	
	render(<Router><Contact settings={{phone_number: phone_number}} /></Router>)
	
	expect(screen.getByText(phone_number)).toBeInTheDocument();
})