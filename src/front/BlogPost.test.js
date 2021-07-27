import BlogPost from "./BlogPost";
import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import axios from "axios";
import { act } from "react-dom/test-utils"
import { StaticRouter as Router } from "react-router-dom";

jest.mock("axios");

const fakeBlog = {
	      id: 1,
	      title: "Fake title",
	      body: "Fake body"
	    };

it('should render the individual blog', async () => {
	axios.get.mockResolvedValue({ data: fakeBlog })
	await act(async () => {
		const title = await render(<Router><BlogPost id={fakeBlog.id} settings={{}} /></Router>)
		expect(title.getByTestId("individualBlog")).toHaveTextContent("Loading");
	})
	expect(screen.getByText(/Fake title/i)).toBeInTheDocument();
})