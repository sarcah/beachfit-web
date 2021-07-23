import FaqItem from "./FaqItem";
import { act } from "react-dom/test-utils"
import { render, screen } from "@testing-library/react";
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
			const faqItem = render(<FaqItem data={fakeItem} />);
			expect(faqItem.getByText(/Test question/i)).toBeInTheDocument();
		});

		// screen.debug();
		spy.mockRestore();
	})
})