import PricingList from "./PricingList";
import { render, screen } from "@testing-library/react";
import { describe } from "yargs";


describe('Pricing list', () => {
	it('should show loading', () => {
		render(<PricingList />);
		const text = screen.getByText(/Loading/i);
		expect(text).toBeInTheDocument();
	});

	it('should show the Pricing Cards', () => {
		const pricingCards = [
			{ id: 72, name: "Full Membership", price: 49 },
			{ id: 73, name: "Partial Membership", price: 33 },
		]
		render(<PricingList />);
		const table = screen.getByRole('form');
		expect(table).toHaveTextContent(/Full Membership/);
	})
});

test('Render the create button', () => {
	render(<PricingList />);
	const button = screen.getByText(/Create/i);
	expect(button).toBeInTheDocument();
  });