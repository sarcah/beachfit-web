import Blogs from "./Blogs";
import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import axios from "axios";
import { act } from "react-dom/test-utils"
import { StaticRouter as Router } from "react-router-dom";

jest.mock("axios");

const fakeBlogs = [
	    {
	      id: 1,
	      title: "Fake title",
	      body: "Fake body"
	    },
	  ];

it('should render all blogs', async () => {
	axios.get.mockResolvedValue({ data: fakeBlogs })
	await act(async () => {
		const title = await render(<Router><Blogs settings={{}} /></Router>)
		expect(title.getByTestId("bloglist")).toHaveTextContent("Loading");	
	})
	expect(screen.getByText(/Fake title/i)).toBeInTheDocument();
})