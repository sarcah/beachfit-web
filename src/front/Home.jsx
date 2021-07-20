import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import MainSVG1 from "./svg/MainSVG1";
import MainSVG2 from "./svg/MainSVG2";
import MainSVG3 from "./svg/MainSVG3";
import { Link } from 'react-router-dom';
import background from "./cover.jpg";
import beachfitLogo from "./beachfit-logo.png";
import S3FileUpload from "react-s3";
import axios from "axios";
import { API_URL } from '../api/auth';
import heroImage from "./GMQtRz5w.jpeg"


const Home = () => {

	const [testimonials, setTestimonials] = useState();

	useEffect(() => {
		axios.get(`${API_URL}/testimonials/sample/3`)
			.then(response => setTestimonials(response.data)).catch();
	}, []);

	return (
		<>
		<Navbar />
		<div className="container md:w-4/5 mx-auto text-gray-800 leading-normal mb-64">
				<div className="flex flex-col text-center justify-center h-full bg-white rounded shadow-lg pt-8 mx-0 sm:mx-6">
						{/*Lead Card*/}
						<div className="flex h-full flex-col text-center justify-center bg-white rounded overflow-hidden shadow-lg">
							<div className="w-full flex flex-col flex-grow flex-shrink">
								<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
									<div className="w-full font-bold text-3xl text-gray-900 px-6 mb-6">
										It’s time to put YOU first!
									</div>
									<div className="text-gray-800 text-xl text-base px-6 mb-5">
										At BeachFit and Wellbeing we are passionate about helping you become fitter, stronger and healthier. Our workouts on the beautiful Coogee Beach, are designed to motivate and inspire you on your fitness journey, wherever you may be.
									</div>
								</div>
							</div>
							<div className="w-full rounded-t">
								<img src={heroImage} className="h-full w-full shadow" />
							</div>


						</div>
						{/*/Lead Card*/}
						{/*Posts Container*/}
						Testimonials
						<div className="flex flex-wrap justify-between pt-12 -mx-6">
							{/*1/3 col */}
							{
								testimonials && testimonials.map(testimonial => {
									return (
										<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
											<div className="flex-1 bg-white rounded-t rounded-b-none shadow-lg">

												<img
													src="https://source.unsplash.com/collection/225/800x600"
													className="h-64 w-full rounded-t pb-6" alt=""
												/>

												<div className="w-full font-bold text-xl text-gray-900 px-6">
													{testimonial.name}
												</div>
												<p className="text-gray-800 text-sm px-6 mb-5">
													{testimonial.body}
												</p>

											</div>
										</div>
									)
								})
							}


							{/*1/2 col */}
							
							{/*1/2 col */}
							
							{/*2/3 col */}
							
							
						</div>
						{/*/ Post Content*/}
					</div>
					{/*Subscribe*/}
					<div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
						<h2 className="font-bold break-normal text-2xl md:text-4xl">
							Subscribe to Ghostwind CSS
						</h2>
						<h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">
							Get the latest posts delivered right to your inbox
						</h3>
						<div className="w-full text-center pt-4">
							<form action="#">
								<div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
									<input
										type="email"
										placeholder="youremail@example.com"
										className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
									/>
									<button
										type="submit"
										className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
									>
										Subscribe
									</button>
								</div>
							</form>
						</div>
					</div>
					{/* /Subscribe*/}
					{/*Author*/}
					<div className="flex w-full items-center font-sans p-8 md:p-24">
						<img
							className="w-10 h-10 rounded-full mr-4"
							src="http://i.pravatar.cc/300"
							alt="Avatar of Author"
						/>
						<div className="flex-1">
							<p className="text-base font-bold text-base md:text-xl leading-none">
								Ghostwind CSS
							</p>
							<p className="text-gray-600 text-xs md:text-base">
								Tailwind CSS version of Ghost's Casper theme by{" "}
								<a
									className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
									href="https://www.tailwindtoolbox.com"
								>
									TailwindToolbox.com
								</a>
							</p>
						</div>
						<div className="justify-end">
							<button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">
								Read More
							</button>
						</div>
					</div>
					{/*/Author*/}
			<footer className="bg-gray-900">
				<div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
					<div className="w-full mx-auto flex flex-wrap items-center">
						<div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
							<a
								className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline"
								href="#"
							>
								👻 <span className="text-base text-gray-200">Ghostwind CSS</span>
							</a>
						</div>
						<div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
							<ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
								<li>
									<a
										className="inline-block py-2 px-3 text-white no-underline"
										href="#"
									>
										Active
									</a>
								</li>
								<li>
									<a
										className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
										href="#"
									>
										link
									</a>
								</li>
								<li>
									<a
										className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
										href="#"
									>
										link
									</a>
								</li>
								<li>
									<a
										className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
										href="#"
									>
										link
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
		</>
	);
}

export default Home;