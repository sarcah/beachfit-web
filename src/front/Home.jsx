import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import S3FileUpload from "react-s3";
import axios from "axios";
import { API_URL } from '../api/auth';
import heroImage from "./img/GMQtRz5w.jpeg"
import idea from "./img/idea.png";
import heart from "./img/heart.png";
import power from "./img/power.png";
import Footer from './components/Footer';


const Home = () => {

	const [testimonials, setTestimonials] = useState();

	useEffect(() => {
		axios.get(`${API_URL}/testimonials/sample/3`)
			.then(response => setTestimonials(response.data)).catch();
	}, []);

	return (
		<>
			<Header />
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

					{/*Testimonials Container*/}
					<div className="text-center mt-10 sm:text-3xl text-2xl font-medium title-font text-gray-900 ">Testimonials</div>
					<div className="flex flex-wrap justify-between pt-6 -mx-6">
						{
							testimonials && testimonials.map(testimonial => {
								return (
									<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
										<div className="flex-1 bg-white rounded-t rounded-b-none shadow-lg">
											<img src="https://source.unsplash.com/collection/225/800x600" className="h-64 w-full rounded-t pb-6" alt="" />
											<div className="w-full font-bold text-xl text-gray-900 px-6">{testimonial.name}</div>
											<p className="text-gray-800 text-sm px-6 mb-5">{testimonial.body}</p>
										</div>
									</div>
								)
							})
						}
					</div>
					{/*/ Post Content*/}
				</div>

				<table className="w-full table mt-20">
					<tbody>
						<tr className="bg-white">
							<td className="p-0">
								
								
								
								<div className="text-xl">
									<div className="relative">
										<p className="text-center">
										<img src={idea} className="mx-auto w-24" />
											<strong>Inspiring</strong>
											<br />
											<br />
											Not only do we create fun workouts to push you to your limits,
											what can be better than having the sunrise on Coogee Beach as
											your backdrop?!
										</p>
									</div>
								</div>
							</td>
							<td className="p-0">
								
								<div className="text-xl">
									<div className="relative">
										<p className="text-center">
										<img src={heart} className="mx-auto w-24" />
											<strong className>
												<br />
												Inclusive
											</strong>
											<br />
											<br />
											Whether you are an experienced gym-goer or new to exercise, we
											cater to all levels. We keep class numbers low, so that you get
											the guidance you deserve.
										</p>
									</div>
								</div>
							</td>
							<td className="p-0">
								<div className="text-xl">
									<div className="relative">
										<p className="text-center">
											<img src={power} className="mx-auto w-24" />
											<strong>Innovative</strong>
											<br />
											<br />
											If it doesn't challenge you, it doesn't change you and at
											BeachFit and Wellbeing, no two workouts are the same to really
											keep you on your toes!
										</p>
									</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>


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

				<Footer />
			</div>
		</>
	);
}

export default Home;