import React, { useState } from 'react';
import "./faqitem.css";
import { DeleteOutline } from '@material-ui/icons';

export default function FaqItem({ data, onUpdate, onDelete }) {

	const [edit, setEdit] = useState(false);
	const [formData, setFormData] = useState({...data});

	const handleEdit = (event) => {
		event.preventDefault();
		setEdit(!edit);
	}

	const handleChange = (event) => {
		const { name, value } = event.target;
		const stateObject = {...formData, [name]:value};
		setFormData(stateObject);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		setEdit(!edit)
		onUpdate(event.target);
	}

	return (
		<form onSubmit={(event) => { handleSubmit(event) }} className="flex flex-col p-8 rounded-lg mb-8 bg-white border-2 bg-opacity-20 shadow-lg pin-r pin-y md:w-4/5">
			<div className="flex justify-between">
				<input type="hidden" aria-role="PricingID" name="id" value={formData.id} />
				<span className="faqTitle">
					{edit ? <input name="question" style={{ width: "70%" }} type="text" value={formData.question} onChange={handleChange} /> : <>{data.question}</>
					}
				</span>
				<div className="flex justify-end items-end">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(event)=>{handleEdit(event)}}>{edit ? "Cancel" : "Edit"}</button>
					<DeleteOutline className="userListDelete" style={{ fontSize: 40 }} onClick={onDelete} />
				</div>
			</div>
			<div className="faqMoneyContainer">
				<span className="faqMoney">{edit ? <input name="answer" type="text" style={{ width: "80px" }} value={formData.answer} onChange={handleChange} /> : <>{data.answer}</>}</span>
			</div>
			<br />
			{edit ? <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit">Update</button> : ""}
		</form>
	)
}