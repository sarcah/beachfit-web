import BlogEditor from "./BlogEditor";
import { act } from "react-dom/test-utils"
import { render, screen } from "@testing-library/react";
import { StaticRouter as Router } from "react-router-dom";
import { expect } from "@jest/globals";
import axios from "axios";

describe('Individual Blog Editor', () => {
	it('renders the given blog in the editor', async () => {

		const notification = () => { return "Dummy function" }


		const fakePost = {
			id: 1, title: "Test blog", body: "Full blog body"
		}
		
		const spy = jest.spyOn(axios, 'get').mockImplementation(() => {
			return Promise.resolve(fakePost)
		});

		await act(async () => {
			const blogs = render(<Router><BlogEditor action="NEW" data={fakePost} notification={notification} /></Router>);
			
		});
		expect(screen.getByText(/Title/i)).toBeInTheDocument();
		expect(screen.getByDisplayValue(/Test blog/i)).toBeInTheDocument();
		expect(screen.getByDisplayValue(/Full blog body/i)).toBeInTheDocument();
		
		spy.mockRestore();
	})
})