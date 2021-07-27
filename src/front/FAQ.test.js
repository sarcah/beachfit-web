import FAQ from "./FAQ";
import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import axios from "axios";
import { act } from "react-dom/test-utils"
import { StaticRouter as Router } from "react-router-dom";

jest.mock("axios");

const fakeFAQ = [
	    {
	      id: 1,
	      question: "Fake question",
	      answer: "Fake answer"
	    },
	  ];

it('returns FAQs', async () => {
	axios.get.mockResolvedValue({ data: fakeFAQ })
	await act(async () => {
		const title = await render(<Router><FAQ settings={{}} /></Router>)
		expect(title.getByTestId("faqTest")).toHaveTextContent("Loading");	
	})
	expect(screen.getByTestId("faqTest")).toHaveTextContent("Fake question");
})