import React from 'react';
import Navbar from "../components/Navbar";
import { PhoneAndroid } from '@material-ui/icons';
import Yvonne from "./yvonne.jpg";

function About() {

	const handleShowPhoneNumber = () => {
		document.getElementById("phoneNumber").classList.toggle("hidden");
	}

	return (
		<>
			<Navbar />
			<div className="container md:w-4/5 mx-auto text-gray-800 leading-normal mb-64">
				<div className="flex flex-col text-center justify-center h-full bg-gray-100 rounded shadow-lg pt-8 mx-0 sm:mx-6">
					<div className="h-full">
						<div className="flex p-10">
							<div className="mr-10">
								<img className="w-auto h-auto object-cover object-top float-left rounded-lg" src={Yvonne} alt="" />
							</div>
							<div className="mb-auto mt-auto max-w-lg">
								<h1 className="text-3xl uppercase mb-4">Yvonne Dallman</h1>
								<p className="font-semibold mb-5">Fitness & Well-being Coach</p>
								<p className="leading-8 mb-10"> Hi! I am Yvonne Dallman, owner of Beachfit & Wellbeing. BeachFit and Wellbeing was established in 2012 on the beautiful Coogee Beach. Our aim is to inspire our members to be the fittest, healthiest version of themselves and push to their limits, whatever they might be. Using a variety of equipment and techniques, no two workouts are ever the same, keeping things fresh and the body guessing.
									BeachFit and Wellbeing is headed up by Yvonne Dallman – a physiotherapist and fitness professional – who has been training people from all walks of life for over 10 years. Yvonne’s passion for health, fitness and wellbeing, coupled with her background as a physio, means that workouts are challenging whether you’re an avid exerciser or a complete beginner.
								</p>
								<p className="leading-8 mb-10">Get in touch today if you'd like to find and more and to book your free trial.</p>

								<a href="mailto: info@beachfitandwellbeing.com">
									<button className="bg-black mr-8 rounded-md py-3 px-7 w-2/6 hover:bg-gray-800 text-white">
										Email Me
									</button>
								</a>
								<button onClick={handleShowPhoneNumber} className="bg-black rounded-md py-3 px-7 w-2/6 hover:bg-gray-800 text-white">Call Me</button>
								<div id="phoneNumber" className="mt-8 hidden font-bold"><PhoneAndroid /> +61 410 068 060</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About;