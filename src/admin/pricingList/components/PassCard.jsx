import React from 'react';
import { DeleteOutline } from '@material-ui/icons';

// The PassCard is a component that creates Class Pass cards in the Admin site
function PassCard({ edit, data, formData, onDelete, handleSubmit, handleEdit, handleChange }) {
	return (
		<form onSubmit={(event) => { handleSubmit(event) }} className="flex flex-col p-8 rounded-lg mb-8 bg-white border-2 bg-opacity-20 shadow-lg pin-r pin-y md:w-4/5">
			<div className="flex justify-between">
				<input type="hidden" name="id" value={formData.id} />
				<span className="featuredTitle">
					{edit ? <input name="name" className="w-full border-2 rounded-md hover:border-blue-400 my-1" style={{ width: "70%" }} type="text" value={formData.name} onChange={handleChange} /> : <>{data.name}</>}
				</span>
				<div className="flex justify-end items-end">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(event) => { handleEdit(event) }}>{edit ? "Cancel" : "Edit"}</button>
					<DeleteOutline className="text-red-600 cursor-pointer" style={{fontSize: 40}} onClick={onDelete} />
				</div>
			</div>
			<div className="featuredMoneyContainer">
				<span className="featuredMoney">{edit ? <input name="price" className="w-full border-2 rounded-md hover:border-blue-400 my-1" type="text" style={{ width: "80px" }} value={formData.total_cost} onChange={handleChange} /> : <>{data.total_cost}</>}</span>
			</div>


			<span className="featuredSub">
				{edit ? <input name="sessions_per_week" className="w-full border-2 rounded-md hover:border-blue-400 my-1" type="text" value={formData.class_cost} onChange={handleChange} /> : <>{data.class_cost}</>}
			</span>

			<br />
			{edit ? <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit">Update</button> : ""}
		</form>
	)
}

export default PassCard;