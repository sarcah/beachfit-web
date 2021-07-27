import React, { useEffect, useState } from 'react';
import "./pricingList.css";
import axios from 'axios';
import PricingCard from './components/PricingCard';
import NewPricingCard from './components/NewPricingCard';
import { API_URL, responseOK } from '../../api/auth';

// Constants used for pricing types - either a membership plan or a class pass
export const PRICING_TYPE = {
	plan: "plans",
	pass: "passes"
}

export default function PricingList({ notification }) {

	// State variable declarations
	const [plans, setPlans] = useState(null);
	const [passes, setPasses] = useState(null);
	const [newPlan, setNewPlan] = useState(false);
	const [newPass, setNewPass] = useState(false);
	const [update, setUpdate] = useState(false);


	// The handleDelete function sends a delete request to the servers for a pricing plan and also deletes it from the React view
	const handleDelete = (endpoint, id) => {

		axios.delete(`${API_URL}/pricings/1/${endpoint}/${id}`)
			.then(response => {
				if (responseOK(response.status)) {
					notification('Pricing plan deleted successfully.', 'success');
					if (endpoint == PRICING_TYPE.plan) setPlans(plans.filter(item => item.id !== id))
					else if (endpoint == PRICING_TYPE.pass) setPasses(plans.filter(item => item.id !== id))
				} else Promise.reject();
			})
			.catch(() => { notification('There was an error in deleting the pricing plan.', 'error'); });
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
				if (responseOK(response.status)) {
					setUpdate(!update);
					notification('Pricing plan updated successfully.', 'success');
				} else Promise.reject();
			})
			.catch(() => { notification('There was an error in updating the pricing plan.', 'error'); });
	}

	useEffect(() => {
		let mounted = true;
		axios.get(`${API_URL}/pricings/1/plans`)
			.then(response => { if (mounted) setPlans(() => response.data) }).catch();
		return () => { mounted = false }
	}, [newPlan, update])

	useEffect(() => {
		let mounted = true;
		axios.get(`${API_URL}/pricings/1/passes`)
			.then(response => { if (mounted) setPasses(response.data) }).catch();
		return () => { mounted = false }
	}, [newPass])

	return (
		<div>
			<h1 className="block text-2xl ml-0 mr-0 font-bold mb-6"> Pricings Page</h1>
			<button className="bg-red-500 mb-8 hover:bg-red-700 text-white font-bold py-2 px-4 mr-4 rounded" onClick={() => { setNewPlan(true) }}>Create a Membership Plan</button>
			<button className="bg-red-500 mb-8 hover:bg-red-700 text-white font-bold py-2 px-4 mr-4 rounded" onClick={() => { setNewPass(true) }}>Create a Class Pass</button>
			<div className="flex flex-row flex-wrap">
					{newPlan ? <NewPricingCard type={PRICING_TYPE.plan} onCreate={() => { setNewPlan(false) }} onCancel={() => { setNewPlan(false) }} /> : <></>}
				
					{newPass ? <NewPricingCard type={PRICING_TYPE.pass} onCreate={() => { setNewPass(false) }} onCancel={() => { setNewPass(false) }} /> : <></>}
				
				<div data-testid="pricingcards">
					{
						(plans) ? plans.map(plan => <div key={plan.id}><PricingCard type={PRICING_TYPE.plan} data={plan} onUpdate={(target) => handleUpdate(target, PRICING_TYPE.plan)} onDelete={() => handleDelete(PRICING_TYPE.plan, plan.id)} /></div>) : <>You have no Plans.</>
					}
				</div>
				
					{
						(passes) ? passes.map(pass => <div key={pass.id}><PricingCard type={PRICING_TYPE.pass} data={pass} onUpdate={(target) => handleUpdate(target, PRICING_TYPE.pass)} onDelete={() => handleDelete(PRICING_TYPE.pass, pass.id)} /></div>) : <>You have no Passes.</>
					}

			</div>
		</div>
	)
}