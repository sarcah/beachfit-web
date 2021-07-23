import PricingCard from "./PricingCard";
import { act } from "react-dom/test-utils"
import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";

describe('Pricing Card', () => {
	it('renders the Pricing Card Item', async () => {
		const fakePlan = {  id: 1, name: "Fake plan", price: 66, session_times: "Fake session times", sessions_per_week: "Fake sessions per week" }
		const handleDummy = () => { return "Dummy function" }
		
		const spy = jest.spyOn(global, 'fetch').mockImplementation(() => {
			return Promise.resolve({ ok: true, json: () => (Promise.resolve(fakePlan)) })
		});

		await act(async () => {
			const pricingCard = render(<PricingCard type="plans" data={fakePlan} onUpdate={handleDummy} onDelete={handleDummy} />);
			expect(pricingCard.getByText(/Fake plan/i)).toBeInTheDocument();
			expect(pricingCard.getByText(/Fake session times/i)).toBeInTheDocument();
			expect(pricingCard.getByText(/Fake sessions per week/i)).toBeInTheDocument();
		});

		// screen.debug();
		spy.mockRestore();
	})
})