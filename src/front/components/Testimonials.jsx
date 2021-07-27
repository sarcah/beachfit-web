import React, { useState, useEffect } from 'react';
import { API_URL } from '../../api/auth';
import axios from "axios";

function Testimonials() {

	// Three random testimonials are sampled from the database and sent to the front-end
	// Every testimonial rendered on the page is unique (no repeats)
	const [testimonials, setTestimonials] = useState();
	
	// Every useEffect has a cleanup code in case the component is unmounted when the response is received
	useEffect(() => {
		let mounted = true;
		axios.get(`${API_URL}/testimonials/sample/3`)
			.then(response => { if (mounted) setTestimonials(response.data) })
			.catch();
		return () => { mounted = false }
	}, []);

	return (
		<div data-testid="test" className="flex flex-wrap justify-between pt-6 -mx-6">
			{
				testimonials && testimonials.map(testimonial => {
					return (
						<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
							<div className="flex-1 bg-white rounded-t rounded-b-none shadow-lg">
								<img src={testimonial.image_url} className="h-64 w-auto rounded-t pb-6" alt="" />
								<div className="w-full font-bold text-xl text-gray-900 px-6">{testimonial.name}</div>
								<p className="text-gray-800 text-sm px-6 mb-5">{testimonial.body}</p>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default Testimonials;