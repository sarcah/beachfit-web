import React, { useState } from 'react';
import "./pricingcard.css";
import axios from "axios";
import { API_URL } from "../../../api/auth.js";

export default function NewPricingCard({ type, data, onCreate, onCancel }) {
	const [value, setValue] = useState({ ...data });

	let card = (<></>);

	const handleChange = (event) => {
		event.preventDefault();
		setValue(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const target = event.target;
		const formData = {
			name: target.name.value,
			price: target.price.value,
			description: target.description.value,
			sessions_per_week: target.sessions_per_week.value,
			session_times: target.session_times.value,
			pricing_id: 1
		}
		axios.post(`${API_URL}/pricings/1/plans/${target.id.value}`, formData)
			.then(response => {
				if (response.status == 201) onCreate(true); 
				else Promise.reject()
			})
			.catch(() => {onCreate(false);})
	}

	switch (type) {
		case "plans":
			card = (
				<form onSubmit={(event) => { handleSubmit(event) }} className="featuredItem flex-shrink-0 mb-10">
					<div className="flex justify-between">
						<input type="hidden" name="id" value={value.id} />
						<span className="featuredTitle">
							<input name="name" style={{ width: "70%" }} type="text" value={value.name} onChange={handleChange} />

						</span>
						<div className="flex justify-end items-end">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onCancel}>Cancel</button>
						</div>
					</div>
					<div className="featuredMoneyContainer">
						<span className="featuredMoney">$<input name="price" type="text" style={{ width: "80px" }} value={value.price} onChange={handleChange} /></span>
					</div>

					<span className="featuredSub">
						<input name="sessions_per_week" type="text" value={value.sessions_per_week} onChange={handleChange} />
					</span>
					<span className="featuredSub">
						<input name="session_times" type="text" value={value.session_times} onChange={handleChange} />
					</span>
					<span className="featuredSub">
						<input name="description" type="text" value={value.description} onChange={handleChange} />
					</span>
					<br />
					<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Create</button>
				</form>
			)
			break;

		case "passes":
			card = (
				<div className="featuredItem">
					<span className="featuredTitle">Revenue</span>
					<div className="featuredMoneyContainer">
						<span className="featuredMoney">$2,424</span>
						<span className="featuredMoneyRate">-11.4 </span>
					</div>
					<span className="featuredSub">Compared to last month</span>
				</div>
			)
			break;

		default:
			break;
	}

	return card;
}