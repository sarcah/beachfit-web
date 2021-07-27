import AllBlogs from "./AllBlogs";
import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import axios from "axios";
import { act } from "react-dom/test-utils"
import { StaticRouter as Router } from "react-router-dom";

jest.mock("axios");

const fakeBlogs = [
	    {
	      id: 1,
	      title: "Fake title 1",
	      body: "Fake body 1"
	    },
		{
			id: 2,
			title: "Fake title 2",
			body: "Fake body 2"
		  },
	  ];

it('should render all blogs', async () => {
	axios.get.mockResolvedValue({ data: fakeBlogs })
	await act(async () => {
		const title = await render(<Router><AllBlogs settings={{}} /></Router>)
		expect(title.getByTestId("bloglist")).toHaveTextContent("Loading");	
	})
	expect(screen.getByText(/Fake title 1/i)).toBeInTheDocument();
})