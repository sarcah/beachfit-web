import Blog from "./Blog";
import { act } from "react-dom/test-utils"
import { render, screen } from "@testing-library/react";
import { StaticRouter as Router } from "react-router-dom";
import { expect } from "@jest/globals";
import axios from "axios";


describe('BlogsList', () => {
	it('renders the given blog', async () => {

		const notification = () => { return "Dummy notification" }

		const fakePost = {
			id: 1, title: "Test blog", body: "Full blog body"
		}
		
		const spy = jest.spyOn(axios, 'get').mockImplementation(() => {
			return Promise.resolve(fakePost)
		});

		await act(async () => {
			const blogs = render(<Router><Blog data={fakePost} aciton="UPDATE" notification={notification} /></Router>);
			expect(blogs.getByTestId("blogdata")).toHaveTextContent("Loading");
		});
		
		expect(screen.getByTestId("blogdata")).toHaveTextContent("Loading...");

		spy.mockRestore();
	})
})