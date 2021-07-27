import PricingList from "./PricingList";
import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import axios from "axios";
import { act } from "react-dom/test-utils"

jest.mock("axios");

const fakePlan = [
	    {
	      id: 1,
	      name: "Fake plan",
	      price: 66,
	      description: "fake description",
	      session_times: "Fake session times",
	      sessions_per_week: "Fake sessions per week",
	    },
	  ];
	
const notification = () => { return "Dummy Function" }

it('returns the first plan', async () => {
	axios.get.mockResolvedValue({ data: fakePlan })
	await act(async () => {
		const title = await render(<PricingList notification={notification} />)
		expect(title.getByTestId("pricingcards")).toHaveTextContent("You have no Plans.");	
	})
	expect(screen.getByTestId("pricingcards")).toHaveTextContent("Fake plan");
})