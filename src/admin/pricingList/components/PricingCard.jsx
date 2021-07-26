import React, { useState } from 'react';
import "./pricingcard.css";
import { PRICING_TYPE } from "../PricingList";
import PlanCard from './PlanCard';
import PassCard from './PassCard';


export default function PricingCard({ type, data, onUpdate, onDelete }) {

	const [edit, setEdit] = useState(false);
	const [formData, setFormData] = useState({ ...data });

	const handleEdit = (event) => {
		event.preventDefault();
		setEdit(!edit);
	}

	const handleChange = (event) => {
		const { name, value } = event.target;
		const stateObject = { ...formData, [name]: value };
		setFormData(stateObject);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		setEdit(!edit)
		onUpdate(event.target);
	}

	switch (type) {
		case PRICING_TYPE.plan:
			return (
				<PlanCard edit={edit} data={data} formData={formData} onDelete={onDelete} handleChange={handleChange} handleEdit={handleEdit} handleSubmit={handleSubmit} />
			)

		case PRICING_TYPE.pass:
			return (
				<PassCard edit={edit} data={data} formData={formData} onDelete={onDelete} handleSubmit={handleSubmit} handleEdit={handleEdit} handleChange={handleChange} />
			)

		default:
			break;
	}
}