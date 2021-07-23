import Pricing from "./Pricing";
import { act } from "react-dom/test-utils"
import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import axios from "axios";
import { StaticRouter as Router } from "react-router-dom";

describe('Pricing page', () => {
	it('renders the Pricing Card Item', async () => {
		const fakePlan = [{  id: 1, name: "Fake plan", price: 66, description: "fake description", session_times: "Fake session times", sessions_per_week: "Fake sessions per week" }]
		
		const spy = jest.spyOn(global, 'fetch').mockImplementation(() => {
			return Promise.resolve({ ok: true, json: () => (Promise.resolve(fakePlan)) })
		});

		await act(async () => {
			const pricingCard = render(<Router><Pricing /></Router>);
			expect(pricingCard.getByTestId("annual")).toHaveTextContent("Loading");
			
		});

		// expect(pricingCard.getByRole("div")).toHaveTextContent("Fake plan");

		// screen.debug();
		spy.mockRestore();
	})
})