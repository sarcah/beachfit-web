import React, { useEffect, useState } from 'react';
import "./pricingList.css";
import axios from 'axios';
import PricingCard from './components/PricingCard';

export default function PricingList() {
	const API_URL = process.env.REACT_APP_API_URL;
	const [plans, setPlans] = useState([]);
	const [passes, setPasses] = useState([]);
	const [newPlan, setNewPlan] = useState(false);

	const handleDelete = (endpoint, id) => {
		setPlans(plans.filter(item => item.id !== id)) //Change this to a fetch later
		axios.delete(`${API_URL}/pricings/1/${endpoint}/${id}`)
			.then(response => console.log(response.data));
	}

	useEffect(() => {
		axios.get(`${API_URL}/pricings/1/plans`)
			.then(response => { setPlans(response.data) }).catch();
	}, [])

	useEffect(() => {
		axios.get(`${API_URL}/pricings/1/passes`)
			.then(response => { setPasses(response.data) }).catch();
	}, [])

	const createNewPlan = () => {
		setNewPlan(true);
	}

	return (
		<div>
			<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={createNewPlan}>Create</button>
			<div className="flex flex-row">
			{
				(plans.length > 0) ? <>{
					plans.map(plan => <PricingCard type="plans" data={plan} editMode={false} onDelete={() => handleDelete("plans", plan.id)} />)
					
					}</> : <div>You have no Plans.</div>
			}
			{

			}
			</div>
		</div>
	)
}
