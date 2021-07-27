import React from 'react';
import { DeleteOutline } from '@material-ui/icons';

// The PlanCard is a component that creates Membership Plan cards in the Admin site
function PlanCard({ edit, data, formData, onDelete, handleChange, handleEdit, handleSubmit }) {
	return (
		<form onSubmit={(event) => { handleSubmit(event) }} className="flex flex-col p-8 rounded-lg mb-8 bg-white border-2 bg-opacity-20 shadow-lg pin-r pin-y md:w-4/5">
			<div className="flex justify-between">
				<input type="hidden" name="id" value={formData.id} />
				<span className="featuredTitle">
					{edit ? <input name="name" className="w-full border-2 rounded-md hover:border-blue-400 my-1" type="text" value={formData.name} onChange={handleChange} /> : <>{data.name}</>}
				</span>
				<div className="flex justify-end items-end">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(event) => { handleEdit(event) }}>{edit ? "Cancel" : "Edit"}</button>
					<DeleteOutline className="text-red-600 cursor-pointer" style={{fontSize: 40}} onClick={onDelete} />
				</div>
			</div>
			<div className="featuredMoneyContainer">
				<span className="featuredMoney">${edit ? <input name="price" className="w-40 border-2 rounded-md hover:border-blue-400 my-1" type="text" value={formData.price} onChange={handleChange} /> : <>{data.price}</>}</span>
			</div>


			<span className="featuredSub">
				{edit ? <input name="sessions_per_week" className="w-full border-2 rounded-md hover:border-blue-400 my-1" type="text" value={formData.sessions_per_week} onChange={handleChange} /> : <>{data.sessions_per_week}</>}
			</span>
			<span className="featuredSub">
				{edit ? <input name="session_times" className="w-full border-2 rounded-md hover:border-blue-400 my-1" type="text" value={formData.session_times} onChange={handleChange} /> : <>{data.session_times}</>}
			</span>
			<span className="featuredSub">
				{edit ? <input name="description" className="w-full border-2 rounded-md hover:border-blue-400 my-1" type="text" value={formData.description} onChange={handleChange} /> : <>{data.description} </>}
			</span>
			<br />
			{edit ? <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit">Update</button> : ""}
		</form>
	)
}

export default PlanCard;