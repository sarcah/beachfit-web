import React, { useState, useEffect } from 'react';
import "./pricingcard.css";
import { DeleteOutline } from '@material-ui/icons';
import axios from "axios";


export default function PricingCard({ type, data, editMode, onDelete }) {
	const API_URL = process.env.REACT_APP_API_URL;

	const [edit, setEdit] = useState(editMode);
	const [value, setValue] = useState({ ...data });
	const [submit, setSubmit] = useState(false);
	const [deleted, setDeleted] = useState(false);

	let card = (<></>);

	const handleEdit = (event) => {
		event.preventDefault();
		setEdit(!edit);
		setSubmit(false);
	}

	const handleChange = (event) => {
		event.preventDefault();
		setValue(event.target.value);
	}



	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmit(true);
		const target = event.target;
		const formData = {
			name: target.name.value,
			price: target.price.value,
			description: target.description.value,
			sessions_per_week: target.sessions_per_week.value,
			session_times: target.session_times.value
		}
		axios.patch(`${API_URL}/pricings/1/plans/${target.id.value}`, formData)
			.then(response => {
				if (response.status == 200) {
					setEdit(!edit)
				}
			})
			.catch()
	}


	const handleDelete = () => {
		axios.delete(`${API_URL}/pricings/1/plans/${data.id}`)
			.then(response => {

			})
			.catch()
	}

	switch (type) {
		case "plans":
			card = (
				<form onSubmit={(event, value) => { handleSubmit(event) }} className="featuredItem">
					<div className="flex justify-between">
						<input type="hidden" name="id" value={value.id} />
						<span className="featuredTitle">
							{edit ? <input name="name" style={{ width: "70%" }} type="text" value={value.name} onChange={handleChange} /> : <>{data.name}</>
							}
						</span>
						<div className="flex justify-end items-end">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleEdit}>{edit ? "Cancel" : "Edit"}</button>
							<DeleteOutline className="userListDelete" style={{ fontSize: 40 }} onClick={onDelete} />
						</div>
					</div>
					<div className="featuredMoneyContainer">
						<span className="featuredMoney">${edit ? <input name="price" type="text" style={{ width: "80px" }} value={value.price} onChange={handleChange} /> : <>{data.price}</>}</span>
					</div>


					<span className="featuredSub">
						{edit ? <input name="sessions_per_week" type="text" value={value.sessions_per_week} onChange={handleChange} /> : <>{data.sessions_per_week}</>}
					</span>
					<span className="featuredSub">
						{edit ? <input name="session_times" type="text" value={value.session_times} onChange={handleChange} /> : <>{data.session_times}</>}
					</span>
					<span className="featuredSub">
						{edit ? <input name="description" type="text" value={value.description} onChange={handleChange} /> : <>{data.description} </>}
					</span>
					<br />
					{edit ? <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit">Update</button> : ""}
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