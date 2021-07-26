import Blog from "./Blog";
import { act } from "react-dom/test-utils"
import { render } from "@testing-library/react";
import { StaticRouter as Router } from "react-router-dom";
import { expect } from "@jest/globals";
import axios from "axios";


describe('BlogsList', () => {
	it('renders the given blog', async () => {

		const fakePost = {
			id: 1, title: "Test blog", body: "Full blog body"
		}
		
		const spy = jest.spyOn(axios, 'get').mockImplementation(() => {
			return Promise.resolve(fakePost)
		});

		await act(async () => {
			const blogs = render(<Router><Blog id={fakePost.id} /></Router>);
			expect(blogs.getByText(/Title/i)).toBeInTheDocument();
		});
		
		spy.mockRestore();
	})
})