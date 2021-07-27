import React from 'react';
import Navbar from "./components/Header";
import { PhoneAndroid } from '@material-ui/icons';
import Yvonne from "./img/yvonne.jpg";
import Footer from './components/Footer';

function About({ settings }) {

	const handleShowPhoneNumber = () => {
		document.getElementById("phoneNumber").classList.toggle("hidden");
	}

	return (
		<>
			<Navbar />
			<div className="container md:w-4/5 mx-auto text-gray-800 leading-normal mb-64">
				<div className="flex sm:flex-col text-center justify-center h-full bg-gray-100 rounded shadow-lg pt-8 mx-0 sm:mx-6">
					<div className="h-full">
						<div className="flex p-10">
							<div className="mr-10">
								<img className="w-auto h-auto object-cover object-top sm:float-left rounded-lg" src={Yvonne} alt="" />
							</div>
							<div className="mb-auto mt-auto max-w-lg">
								<h1 className="text-3xl uppercase mb-4">Yvonne Dallman</h1>
								<p className="font-semibold mb-5">Fitness & Well-being Coach</p>
								<p className="leading-8 mb-10"> {settings && settings.about_text}
								</p>
								<p className="leading-8 mb-10">Get in touch today if you'd like to find and more and to book your free trial.</p>

								<a href="mailto: info@beachfitandwellbeing.com">
									<button className="bg-black mr-8 rounded-md px-5 py-3 sm:px-7 sm:w-2/6 hover:bg-gray-800 text-white">Email Me
									</button>
								</a>
								<button onClick={handleShowPhoneNumber} className="bg-black mr-8 rounded-md px-5 py-3 sm:px-7 sm:w-2/6 hover:bg-gray-800 text-white">Call Me</button>
								<div id="phoneNumber" className="mt-8 hidden font-bold"><PhoneAndroid /> {settings && settings.phone_number}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default About;