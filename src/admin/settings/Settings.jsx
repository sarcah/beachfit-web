import React, { useState, useEffect } from 'react';
import { API_URL, responseOK } from "../../api/auth";
import axios from 'axios';
import "./settings.css"

function Settings({ notification }) {

	const [settings, setSettings] = useState(null);
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		let mounted = true;
		axios.get(`${API_URL}/settings`)
			.then(response => {
				if (responseOK(response.status)) {
					if (mounted) setSettings(response.data);
				} else Promise.reject();
			})
			.catch(() => { notification("There was an error accessing your settings at this time", "error"); })
		return () => { mounted = false }
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;

		const formData = {
			id: 1,
			blog_show: form.blog_show.checked,
			faq_show: form.faq_show.checked,
			testimonial_show: form.testimonial_show.checked,
			about_text: form.about_text.value,
			phone_number: form.phone_number.value,
			email_address: form.email_address.value
		}
		axios.patch(`${API_URL}/settings`, formData)
			.then(response => {
				if (responseOK(response.status)) notification("Settings updated successfully", "success");
				else Promise.reject();
			})
			.catch(() => { notification("There was an error updating your settings at this time", "error") })
	}

	const handleChange = (event) => {
		const target = event.target;
		const value = (target.type === 'checkbox') ? target.checked : target.value;
		const name = target.name;
		setSettings({ ...settings, [name]: value });
	}



	return (
		<div>
			<h1 className="block text-2xl ml-0 mr-0 font-bold mb-6"> Settings Page</h1>
			<div className="flex flex-col" data-testid="siteSettings">
				{
					(settings) ?
						<form onSubmit={handleSubmit} name="settings">
							<div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Blogs:</div>
							<div className="flex flex-row text-sm tracking-tight mb-4 font-medium text-gray-700">
								<p className="mx-3">Hide</p>
								<label htmlFor="blog_show" className="flex items-center cursor-pointer">
									<div className="relative">
										<input type="checkbox" name="blog_show" id="blog_show" className="hidden" checked={settings.blog_show} onChange={handleChange} />
										<div className="w-10 h-3 pb-2 bg-gray-400 rounded-full shadow-inner" />
										<div className="toggle_dot absolute pb-2 w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0" />
									</div>
								</label>
								<p className="mx-3">Show</p>
							</div>

							<div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">FAQs:</div>
							<div className="flex flex-row text-sm tracking-tight mb-4 font-medium text-gray-700">
								<p className="mx-3">Hide</p>
								<label htmlFor="faq_show" className="flex items-center cursor-pointer">
									<div className="relative">
										<input type="checkbox" name="faq_show" id="faq_show" className="hidden" checked={settings.faq_show} onChange={handleChange} />
										<div className="w-10 h-3 pb-2 bg-gray-400 rounded-full shadow-inner" />
										<div className="toggle_dot absolute pb-2 w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0" />
									</div>
								</label>
								<p className="mx-3">Show</p>
							</div>

							<div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Testimonials:</div>
							<div className="flex flex-row text-sm tracking-tight mb-4 font-medium text-gray-700">
								<p className="mx-3">Hide</p>
								<label htmlFor="testimonial_show" className="flex items-center cursor-pointer">
									<div className="relative">
										<input type="checkbox" name="testimonial_show" id="testimonial_show" className="hidden" checked={settings.testimonial_show} onChange={handleChange} />
										<div className="w-10 h-3 pb-2 bg-gray-400 rounded-full shadow-inner" />
										<div className="toggle_dot absolute pb-2 w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0" />
									</div>
								</label>
								<p className="mx-3">Show</p>
							</div>


							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-8/12 px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-text-1">
										Contact E-mail Address
									</label>
									<input name="email_address" className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
										id="grid-text-1" type="text" placeholder="Enter email" value={settings.email_address} onChange={handleChange} required />
								</div>

								<div className="w-8/12 px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-text-2">
										Contact Phone Number
									</label>
									<input name="phone_number" className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
										id="grid-text-2" type="text" placeholder="Enter phone number" value={settings.phone_number} onChange={handleChange} required />
								</div>

								<div className="w-8/12 px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="about_text">
										About Me
									</label>
									<textarea name="about_text" id="about_text"
										className="bg-white rounded-md border leading-normal resize-none w-full h-40 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" required value={settings.about_text} onChange={handleChange} />
								</div>

								<div className="personal w-full border-t border-gray-400 pt-4">
									<div className="flex justify-start">
										<button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">
											Save Changes
										</button>
									</div>
								</div>
							</div>

						</form> : <>Loading...</>
				}
			</div>
		</div>
	)
}

export default Settings;