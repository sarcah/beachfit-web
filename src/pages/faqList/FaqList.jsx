import React, { useEffect, useState } from 'react';
import "./faqList.css";
import axios from 'axios';
import FaqItem from './components/FaqItem';
import NewFaqItem from './components/NewFaqItem';
import Notification from '../../components/notifications/Notification';
import { API_URL } from "../../api/auth.js";

export default function FaqList() {
	const [plans, setPlans] = useState({});
	const [newPlan, setNewPlan] = useState(false);
	const [update, setUpdate] = useState(false);
	const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })

	const handleCreate = (created) => {
		if (created) {
			setNewPlan(false);
			setNotify({
				isOpen: true,
				message: 'FAQ item created successfully',
				type: 'success'
			});
		} else setNotify({
				isOpen: true,
				message: 'There was an error in creating the FAQ item. Your data was not saved.',
				type: 'error'
			});
	}

	const handleDelete = (id) => {
		axios.delete(`${API_URL}/faqs/1/items/${id}`)
			.then(response => {
				if (response.status >= 200 && response.status <= 300) {
					setPlans(plans.filter(item => item.id !== id))
					setNotify({
						isOpen: true,
						message: 'FAQ item deleted successfully',
						type: 'success'
					});
				} else Promise.reject();
			}).catch(() => {
				setNotify({
					isOpen: true,
					message: 'There was an error in deleting the FAQ item.',
					type: 'error'
				});
			});
	}

	const handleUpdate = (target) => {
		const formData = {
			question: target.question.value,
			answer:   target.answer.value
		}
		axios.patch(`${API_URL}/faqs/1/items/${target.id.value}`, formData)
			.then(response => {
				if (response.status == 200) {
					setUpdate(!update);
					setNotify({
						isOpen: true,
						message: 'FAQ item updated successfully',
						type: 'success'
					});
				} else Promise.reject();
			})
			.catch(() => {
				setNotify({
					isOpen: true,
					message: 'There was an error in updating the component. Your data was not saved.',
					type: 'error'
				});
			});
	}

	useEffect(() => {
		axios.get(`${API_URL}/faqs/1/items`)
			.then(response => { setPlans(()=>response.data) }).catch();
	}, [newPlan, update])

	return (
		<div>
			<Notification notify={notify} setNotify={setNotify} />
			<h1 className="block text-2xl ml-0 mr-0 font-bold mb-6"> FAQs Page</h1>
			<button className="bg-red-500 mb-8 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setNewPlan(true)}}>Create</button>
			
			<div className="flex flex-col">
				{	newPlan ? <NewFaqItem type="plans" onCreate={handleCreate} onCancel={()=>{setNewPlan(false)}} /> : <></>	}
				{	(plans.length > 0) ? <>{
						plans.map(plan => <FaqItem data={plan} onUpdate={(target) => handleUpdate(target)} onDelete={() => handleDelete(plan.id)} />) 
						}</> : <>You have no FAQs.</> 
				}
			</div>
		</div>
	)
}