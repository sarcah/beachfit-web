import React, { useEffect, useState } from 'react';
import "./pricingList.css";
import axios from 'axios';
import PricingCard from './components/PricingCard';
import NewPricingCard from './components/NewPricingCard';
import Notification from '../components/notifications/Notification';

export default function PricingList() {
	const API_URL = process.env.REACT_APP_API_URL;
	const [plans, setPlans] = useState({});
	const [passes, setPasses] = useState({});
	const [newPlan, setNewPlan] = useState(false);
	const [newPass, setNewPass] = useState(false);
	const [update, setUpdate] = useState(false);
	const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })

	const handleDelete = (endpoint, id) => {
		setPlans(plans.filter(item => item.id !== id))
		axios.delete(`${API_URL}/pricings/1/${endpoint}/${id}`)
			.then(response => {
				if (response.status >= 200 && response.status <= 300)
					setNotify({
						isOpen: true,
						message: 'Pricing plan deleted successfully.',
						type: 'success'
					})
				else Promise.reject();
			})
			.catch(() => {
				setNotify({
					isOpen: true,
					message: 'There was an error in deleting the pricing plan.',
					type: 'error'
				})
			});
	}

	const handleUpdate = (target, endpoint) => {
		const formData = {
			name: target.name.value,
			price: target.price.value,
			description: target.description.value,
			sessions_per_week: target.sessions_per_week.value,
			session_times: target.session_times.value
		}
		axios.patch(`${API_URL}/pricings/1/${endpoint}/${target.id.value}`, formData)
			.then(response => {
				if (response.status == 200) {
					setUpdate(!update);
					setNotify({
						isOpen: true,
						message: 'Pricing plan deleted successfully.',
						type: 'success'
					})
				
				} else Promise.reject();
			})
			.catch(() => {
				setNotify({
					isOpen: true,
					message: 'There was an error in updating the pricing plan.',
					type: 'error'
				})
			})
	}

	useEffect(() => {
		axios.get(`${API_URL}/pricings/1/plans`)
			.then(response => { setPlans(() => response.data) }).catch();
	}, [newPlan, update])

	useEffect(() => {
		axios.get(`${API_URL}/pricings/1/passes`)
			.then(response => { setPasses(response.data) }).catch();
	}, [newPass])

	return (
		<div>
			<Notification notify={notify} setNotify={setNotify} />
			<h1 className="block text-2xl ml-0 mr-0 font-bold mb-6"> Pricings Page</h1>
			<button className="bg-red-500 mb-8 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => { setNewPlan(true) }}>Create</button>
			<div className="flex flex-row flex-wrap">
				{newPlan ? <NewPricingCard type="plans" onCreate={() => { setNewPlan(false) }} onCancel={() => { setNewPlan(false) }} /> : <></>}
				{
					(plans.length > 0) ? <>{
						plans.map(plan => <PricingCard type="plans" data={plan} onUpdate={(target) => handleUpdate(target, "plans")} onDelete={() => handleDelete("plans", plan.id)} />)
					}</> : <>You have no Plans.</>
				}

			</div>
		</div>
	)
}