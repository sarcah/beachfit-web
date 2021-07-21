import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import { API_URL } from "../api/auth";
import { PhoneAndroid } from '@material-ui/icons';
import Footer from './components/Footer';
import axios from 'axios';

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
					
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Pricing;