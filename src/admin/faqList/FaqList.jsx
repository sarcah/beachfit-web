import React, { useEffect, useState } from 'react';
import "./faqList.css";
import axios from 'axios';
import FaqItem from './components/FaqItem';
import NewFaqItem from './components/NewFaqItem';
import { API_URL } from "../../api/auth.js";

export default function FaqList({notification}) {
	const [plans, setPlans] = useState({});
	const [newPlan, setNewPlan] = useState(false);
	const [update, setUpdate] = useState(false);

	const handleCreate = (created) => {
		if (created) {
			setNewPlan(false);
			notification('FAQ item created successfully.', 'success')
		} else notification('There was an error in creating the FAQ item. Your data was not saved.', 'error');
	}

	const handleDelete = (id) => {
		axios.delete(`${API_URL}/faqs/1/items/${id}`)
			.then(response => {
				if (response.status >= 200 && response.status <= 300) {
					setPlans(plans.filter(item => item.id !== id))
					notification('FAQ item deleted successfully.','success');
				} else Promise.reject();
			}).catch(() => { notification('There was an error in deleting the FAQ item.','error'); });
	}

	const handleUpdate = (target) => {
		const formData = {
			question: target.question.value,
			answer: target.answer.value
		}
		axios.patch(`${API_URL}/faqs/1/items/${target.id.value}`, formData)
			.then(response => {
				if (response.status == 200) {
					setUpdate(!update);
					notification('FAQ item updated successfully', 'success');
				} else Promise.reject();
			})
			.catch(() => { notification('There was an error in updating the component. Your data was not saved.', 'error'); });
	}

	useEffect(() => {
		axios.get(`${API_URL}/faqs/1/items`)
			.then(response => { setPlans(() => response.data) }).catch();
	}, [newPlan, update])

	return (
		<div>
			<h1 className="block text-2xl ml-0 mr-0 font-bold mb-6"> FAQs Page</h1>
			<button className="bg-red-500 mb-8 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => { setNewPlan(true) }}>Create</button>
			<div className="flex flex-col">
				{newPlan ? <NewFaqItem type="plans" onCreate={handleCreate} onCancel={() => { setNewPlan(false) }} /> : <></>}
				{(plans.length > 0) ? <>{
					plans.map(plan => <FaqItem data={plan} onUpdate={(target) => handleUpdate(target)} onDelete={() => handleDelete(plan.id)} />)
				}</> : <>You have no FAQs.</>
				}
			</div>
		</div>
	)
}