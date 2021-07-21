import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import { API_URL } from "../api/auth";
import Footer from './components/Footer';
import axios from 'axios';
import "./pricing.css";
import { Link } from 'react-router-dom';

function Pricing() {

	const [plans, setPlans] = useState([]);
	const [passes, setPasses] = useState([]);

	useEffect(() => {
		axios.get(`${API_URL}/pricings/1/plans`)
			.then(response => { setPlans(response.data) }).catch();
	}, []);

	useEffect(() => {
		axios.get(`${API_URL}/pricings/1/passes`)
			.then(response => { setPasses(response.data) }).catch();
	}, []);

	return (
		<>
			<Header />
			<div className="container md:w-4/5 mx-auto text-gray-800 leading-normal mb-64">
				<div className="flex flex-col text-center justify-center h-full bg-gray-100 rounded shadow-lg pt-8 mx-0 sm:mx-6">
					<div>
						<h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
							Our Pricing
						</h1>
						{/* <div className="flex flex-row justify-center my-4 text-sm tracking-tight font-medium text-gray-700">
							<p className="mx-3">Annually</p>
							<label htmlFor="toggle" className="flex items-center cursor-pointer">
								<div className="relative">
									
									<input id="toggle" type="checkbox" className="hidden" />
									
									<div className="w-10 h-3 bg-gray-400 rounded-full shadow-inner" />
									
									<div className="toggle_dot absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0" />
								</div>
							</label>
							<p className="mx-3">Monthly</p>
						</div> */}


						<div className="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center">
							{
								(plans.length > 0) ? plans.map(plan => {
									return (
										<div className="border rounded-lg text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-gray-100 font-medium z-10 shadow-lg">
											<div className>{plan.name}</div>
											<div id="annual" className="font-bold text-6xl mb-6 annual">${plan.price}</div><hr />
											<div className="text-sm my-3">{plan.description}</div><hr />
											<div className="text-sm my-3">{plan.sessions_per_week}</div><hr />
											<div className="text-sm my-3">{plan.session_times}</div><hr />
											<Link to="/contact">
												<div className="bg-gradient-base border border-blue-600 hover:bg-white text-white hover:text-blue-600 font-bold uppercase text-xs mt-5 py-2 px-4 rounded cursor-pointer">
													Contact Me
												</div>
											</Link>
										</div>)
								}) : <>Loading &hellip;</>
							}
						</div>
						<div className="text-xl md:mt-24 md:mb-24 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-10">
							If you don't wish to commit to a membership, we also did class passes. You’ve got three packages to choose from:</div>

						<div className="flex flex-row justify-center items-center">
							{
								(passes.length > 0) ? passes.map(pass => {
									return (

										<div className="max-w-lg h-full bg-white shadow-md rounded-lg mx-auto">
											<div className="py-4 px-8 mt-3">
												<div className="flex flex-col mb-8">
													<h2 className="text-gray-700 font-semibold text-2xl tracking-wide mb-2">
														{pass.name}
													</h2>

												</div>
												<div className="bg-gray-100 rounded-lg">
													<div className="py-4 px-4">
														<div className="flex flex-col">
															<h4 className="text-lg font-semibold mb-3">
																{pass.total_cost}
															</h4>
															<div className="flex flex-col text-lg font-semibold mb-3">
																<span className="mb-1">{pass.class_cost}&nbsp;</span>
															</div>
														</div>
													</div>
												</div>
												<div className="mt-8 mb-8">
													This option allows you to drop in to classes, as your schedule permits. All passes must be used within 4 months of purchase.</div>
												<div className="py-4">
													<Link to="/contact" className="block tracking-widest uppercase text-center shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Contact Me</Link>
												</div>
											</div>
										</div>

									);
								}) : <>Loading &hellip;</>
							}
						</div>

					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Pricing;