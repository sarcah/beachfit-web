import FaqItem from "./FaqItem";
import { act } from "react-dom/test-utils"
import { render, screen } from "@testing-library/react";
import { StaticRouter as Router } from "react-router-dom";
import { expect } from "@jest/globals";

describe('FAQItem', () => {
	it('renders the FAQ Item', async () => {
		const fakeItem = {
			id: 1, question: "Test question", answer: "Test answer"
		}
		
		const spy = jest.spyOn(global, 'fetch').mockImplementation(() => {
			return Promise.resolve({ ok: true, json: () => (Promise.resolve(fakeItem)) })
		});

		await act(async () => {
			const product = render(<Router><FaqItem data={fakeItem} /></Router>);
			expect(product).getByRole("PricingID").toBeInTheDocument();
		});

		expect(screen.getByText(/Test question/i)).toBeInTheDocument();
	
		// screen.debug();
		spy.mockRestore();
	})
})