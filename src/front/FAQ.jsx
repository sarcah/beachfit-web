import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import { API_URL } from "../api/auth";
import { PhoneAndroid } from '@material-ui/icons';
import axios from 'axios';
import Footer from './components/Footer';

// FAQs are pulled from the database and displayed on the front site
// Admin can add/delete/edit FAQs at will
function FAQ({ settings }) {

	const [faqs, setFaqs] = useState([]);

	// Simply toggles the displaying of the phone number information
	const handleShowPhoneNumber = () => {
		document.getElementById("phoneNumber").classList.toggle("hidden");
	}

	// Every useEffect has a cleanup code in case the component is unmounted when the response is received
	useEffect(() => {
		let mounted = true;
		axios.get(`${API_URL}/faqs/1/items`)
			.then(response => { if (mounted) setFaqs(response.data) })
			.catch();
		return () => { mounted = false }
	}, [])

	return (
		<>
			<Header settings={settings} />
			<div className="container md:w-4/5 mx-auto text-gray-800 leading-normal mb-64">
				<div className="flex flex-col text-center justify-center h-full bg-gray-100 rounded shadow-lg pt-8 mx-0 sm:mx-6">
					<div>
						<section className="text-gray-700">
							<div className="container px-5 py-24 mx-auto">
								<div className="text-center mb-20">
									<h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
										Frequently Asked Questions
									</h1>
									<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
										The most common questions about how our business works and what we can do for you.
									</p>
								</div>
								<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
									<div className="w-full px-4 py-2" data-testid="faqTest">
										{(faqs.length > 0) ?
											faqs.map(faq => {
												return (
													<details key={faq.id} className="mb-4">
														<summary className="font-semibold cursor-pointer bg-gray-200 rounded-md py-2 px-4">{faq.question}</summary>
														<span className="leading-8">{faq.answer}</span>
													</details>
												)
											}) : <>Loading &hellip;</>
										}
									</div>
								</div>

								Want to find out more? E-mail or call me to book your free trial.
								<div className="flex flex-row justify-center mt-12 flex-1">
									<div className="sm:w-2/6"><a href={`mailto:${settings && settings.email_address}`}><button className="bg-black mr-8 rounded-md px-5 py-3 sm:px-7 hover:bg-gray-800 text-white">Email Me</button></a></div>
									<div className="sm:w-2/6"><button onClick={handleShowPhoneNumber} className="bg-black mr-8 rounded-md px-5 py-3 sm:px-7  hover:bg-gray-800 text-white">Call Me</button><div id="phoneNumber" className="mt-8 hidden font-bold"><PhoneAndroid /> { settings && settings.phone_number }</div></div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default FAQ;