import BlogList from "./BlogList";
import { act } from "react-dom/test-utils"
import { render, screen } from "@testing-library/react";
import { StaticRouter as Router } from "react-router-dom";
import { expect } from "@jest/globals";

describe('BlogsList', () => {
	it('renders the blogs', async () => {
		const fakePost = {
			id: 1, question: "Test blog", answer: "Full blog body"
		}
		
		const spy = jest.spyOn(global, 'fetch').mockImplementation(() => {
			return Promise.resolve({ ok: true, json: () => (Promise.resolve(fakePost)) })
		});

		await act(async () => {
			const product = render(<Router><BlogList /></Router>);
			expect(product.getByText(/Loading/i)).toBeInTheDocument();
		});

		// screen.debug();
		spy.mockRestore();
	})
})