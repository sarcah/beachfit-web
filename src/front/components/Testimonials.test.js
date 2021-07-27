import Testimonials from "./Testimonials";
import { act } from "react-dom/test-utils"
import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import axios from "axios";
import { StaticRouter as Router } from "react-router-dom";

describe('Testimonials component', () => {
	it('renders Testimonials', async () => {
		const fakeTestimonial = [{  id: 1, name: "Fake testimonial", body: "Fake testimonial body" }]
		
		const spy = jest.spyOn(axios, 'get').mockImplementation(() => {
			return Promise.resolve({ ok: true, json: () => (Promise.resolve(fakeTestimonial)) })
		});

		await act(async () => {
			const testimonialCard = render(<Router><Testimonials /></Router>);
		});

		expect(screen.getByTestId("test")).toBeInTheDocument();
		
		spy.mockRestore();
	})
})