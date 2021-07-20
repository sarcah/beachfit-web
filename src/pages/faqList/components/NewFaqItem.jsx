import React, { useState } from 'react';
import "./faqitem.css";
import axios from "axios";
import { API_URL } from "../../../api/auth.js";

export default function NewFaqItem({ data, onCreate, onCancel }) {

	const [value, setValue] = useState({ ...data });

	const handleChange = (event) => {
		event.preventDefault();
		setValue(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const target = event.target;
		const formData = {
			question: target.question.value,
			answer: target.answer.value,
			faq_id: 1
		}
		axios.post(`${API_URL}/faqs/1/items/${target.id.value}`, formData)
			.then(response => {
				if (response.status == 201) onCreate(true);
				else Promise.reject()
			})
			.catch(() => { onCreate(false); })
	}

	return (
		<form onSubmit={(event) => { handleSubmit(event) }} className="faqItem flex-shrink-0 mb-10">
			<div className="flex justify-between">
				<input type="hidden" name="id" value={value.id} />
				<span className="faqTitle">
					<input name="question" style={{ width: "90%" }} type="text" value={value.question} onChange={handleChange} />
				</span>
				<div className="flex justify-end items-end">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onCancel}>Cancel</button>
				</div>
			</div>
			<div className="faqMoneyContainer">
				<span className="faqMoney"><input name="answer" type="text" style={{ width: "80%" }} value={value.answer} onChange={handleChange} /></span>
			</div>
			<br />
			<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Create</button>
		</form>




		// <form onSubmit={(event) => { handleSubmit(event) }} className="faqItem flex-shrink-0 mb-10">
		// 	<div className="flex justify-between">
		// 		<input type="hidden" name="id" value={value.id} />
		// 		<span className="faqTitle">
		// 			<input name="name" style={{ width: "70%" }} type="text" value={value.name} onChange={handleChange} />

		// 		</span>
		// 		<div className="flex justify-end items-end">
		// 			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onCancel}>Cancel</button>
		// 		</div>
		// 	</div>
		// 	<div className="faqMoneyContainer">
		// 		<span className="faqMoney"><input name="price" type="text" style={{ width: "80px" }} value={value.price} onChange={handleChange} /></span>
		// 	</div>

		// 	<span className="faqSub">
		// 		<input name="sessions_per_week" type="text" value={value.sessions_per_week} onChange={handleChange} />
		// 	</span>
		// 	<span className="faqSub">
		// 		<input name="session_times" type="text" value={value.session_times} onChange={handleChange} />
		// 	</span>
		// 	<span className="faqSub">
		// 		<input name="description" type="text" value={value.description} onChange={handleChange} />
		// 	</span>
		// 	<br />
		// 	<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Create</button>
		// </form>
	)
}