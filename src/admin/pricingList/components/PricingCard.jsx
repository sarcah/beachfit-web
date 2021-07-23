import React, { useState } from 'react';
import "./pricingcard.css";
import { DeleteOutline } from '@material-ui/icons';



export default function PricingCard({ type, data, onUpdate, onDelete }) {

	const [edit, setEdit] = useState(false);
	const [formData, setFormData] = useState({...data});


	let card = (<></>);

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

	switch (type) {
		case "plans":
			card = (
				<form onSubmit={(event) => { handleSubmit(event) }} className="flex flex-col p-8 rounded-lg mb-8 bg-white border-2 bg-opacity-20 shadow-lg pin-r pin-y md:w-4/5">
					<div className="flex justify-between">
						<input type="hidden" name="id" value={formData.id} />
						<span className="featuredTitle">
							{ edit ? <input name="name" style={{ width: "70%" }} type="text" value={formData.name} onChange={handleChange} /> : <>{data.name}</> }
						</span>
						<div className="flex justify-end items-end">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(event)=>{handleEdit(event)}}>{edit ? "Cancel" : "Edit"}</button>
							<DeleteOutline className="userListDelete" style={{ fontSize: 40 }} onClick={onDelete} />
						</div>
					</div>
					<div className="featuredMoneyContainer">
						<span className="featuredMoney">${edit ? <input name="price" type="text" style={{ width: "80px" }} value={formData.price} onChange={handleChange} /> : <>{data.price}</>}</span>
					</div>


					<span className="featuredSub">
						{edit ? <input name="sessions_per_week" type="text" value={formData.sessions_per_week} onChange={handleChange} /> : <>{data.sessions_per_week}</>}
					</span>
					<span className="featuredSub">
						{edit ? <input name="session_times" type="text" value={formData.session_times} onChange={handleChange} /> : <>{data.session_times}</>}
					</span>
					<span className="featuredSub">
						{edit ? <input name="description" type="text" value={formData.description} onChange={handleChange} /> : <>{data.description} </>}
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