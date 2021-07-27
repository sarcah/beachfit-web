import React, { useState } from 'react';
import "./pricingcard.css";
import axios from "axios";
import { API_URL, responseOK } from "../../../api/auth.js";
import { PRICING_TYPE } from '../PricingList';

export default function NewPricingCard({ type, data, onCreate, onCancel }) {

	// The useState hook updates elements on the page
	const [value, setValue] = useState({ ...data });

	// Create a blank card and add the form to it depending on the type
	let card = (<></>);

	// Disallow React from hijacking elements
	const handleChange = (event) => {
		event.preventDefault();
		setValue(event.target.value);
	}

	// The handleSubmit below checks to see what type of data is being submitted: Either a plan or a pass
	// It uses control flow to create objects accordingly
	const handleSubmit = (event, type) => {
		event.preventDefault();
		const target = event.target;
		let formData;
		
		switch(type) {
			case PRICING_TYPE.plan:
				formData = {
					name: target.name.value,
					price: target.price.value,
					description: target.description.value,
					sessions_per_week: target.sessions_per_week.value,
					session_times: target.session_times.value,
					pricing_id: 1
				}
			break;

			case PRICING_TYPE.pass:
				formData = {
					name: target.name.value,
					total_cost: target.total_cost.value,
					class_cost: target.class_cost.value,
					pricing_id: 1
				}
			break;
		}

		
		axios.post(`${API_URL}/pricings/1/${type}`, formData)
			.then(response => {
				if (responseOK(response.status)) onCreate(true);
				else Promise.reject()
			})
			.catch(() => { onCreate(false); })
	}

	switch (type) {
		case PRICING_TYPE.plan:
			card = (
				<form onSubmit={(event) => { handleSubmit(event, PRICING_TYPE.plan) }} className="flex flex-col p-8 rounded-lg mb-8 bg-white border-2 bg-opacity-20 shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5 flex-shrink-0">
					<div className="flex justify-between">
						<input type="hidden" name="id" value={value.id} />
						<span className="featuredTitle">
							<input name="name" className="w-full border-2 rounded-md hover:border-blue-400 my-1" placeholder="Name of plan, e.g. 'Full Membership'" type="text" value={value.name} onChange={handleChange} />
						</span>
						<div className="flex justify-end items-end">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onCancel}>Cancel</button>
						</div>
					</div>
					<div className="featuredMoneyContainer">
						<span className="featuredMoney">$<input className="w-40 border-2 rounded-md hover:border-blue-400 my-1" name="price" id="planPrice" type="text" style={{ width: "80px" }} value={value.price} onChange={handleChange} /></span>
					</div>

					<span className="featuredSub">
						<input name="sessions_per_week" className="w-full border-2 rounded-md hover:border-blue-400 my-1" type="text" placeholder="Enter a descriptive statement for sessions per week, e.g. '3 sessions per week'" value={value.sessions_per_week} onChange={handleChange} />
					</span>
					<span className="featuredSub">
						<input name="session_times" className="w-full border-2 rounded-md hover:border-blue-400 my-1" type="text" placeholder="Enter a descriptive statement for session times, e.g. '6am or 6:45am Mon / Wed / Fri'" value={value.session_times} onChange={handleChange} />
					</span>
					<span className="featuredSub">
						<input name="description" className="w-full border-2 rounded-md hover:border-blue-400 my-1" type="text" placeholder="Enter a description" value={value.description} onChange={handleChange} />
					</span>
					<br />
					<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Create</button>
				</form>
			)
			break;

		case PRICING_TYPE.pass:
			card = (
				<form onSubmit={(event) => { handleSubmit(event, PRICING_TYPE.pass) }} className="flex flex-col p-8 rounded-lg mb-8 bg-white border-2 bg-opacity-20 shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5 flex-shrink-0">
					<div className="flex justify-between">
						<input type="hidden" name="id" value={value.id} />
						<span className="featuredTitle">
							<input name="name" className="w-full border-2 rounded-md hover:border-blue-400 my-1" placeholder="Enter a descriptive name, e.g. 'Ten Class Pass'" type="text" value={value.name} onChange={handleChange} />
						</span>
						<div className="flex justify-end items-end">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onCancel}>Cancel</button>
						</div>
					</div>
					<div className="featuredMoneyContainer">
						<span className="w-full"><input name="total_cost" placeholder="Enter a descriptive statement, e.g. '$100 for 10 classes' " type="text" style={{ width: "30rem" }} value={value.total_cost} onChange={handleChange} /></span>
					</div>
					<span className="featuredSub">
						<input name="class_cost" className="w-full" placeholder="(Optional) Enter individual descriptive price, e.g. '$28 per class'" type="text" value={value.class_cost} onChange={handleChange} />
					</span>
					<br />
					<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Create</button>
				</form>
			)
			break;

		default:
			break;
	}

	return card;
}