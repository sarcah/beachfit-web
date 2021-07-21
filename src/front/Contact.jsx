import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import { API_URL } from "../api/auth";
import { PhoneAndroid } from '@material-ui/icons';
import axios from 'axios';

function Contact() {

	return (
		<>
			<Header />
			<div className="container md:w-4/5 mx-auto text-gray-800 leading-normal mb-64">
				<div className="flex flex-col text-center justify-center h-full bg-gray-100 rounded shadow-lg pt-8 mx-0 sm:mx-6">
					<div className="md:px-32 py-8 w-full">

							<div className="text-center mb-20">
								<h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
									Contact
								</h1>
								<p className="text-2xl md:mt-24 md:mb-24 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-10">Are you ready to start the journey to health, fitness and improved wellbeing?</p>
								<p className="text-xl md:mt-24 md:mb-24 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-10">
								To book in a FREE trial session or ask a question, pop an email to <a className="hover:underline hover:text-red-800 font-bold" href="mailto: info@beachfitandwellbeing.com">info@beachfitandwellbeing.com</a>
								</p>
								<p className="text-xl md:mt-24 md:mb-24 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-10">
								Alternatively call or text on <span className="font-bold">0410 068 060</span></p>
							</div>

					</div>
				</div>
			</div>
		</>
	)
}

export default Contact;