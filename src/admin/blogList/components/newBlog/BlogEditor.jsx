import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./newBlog.css";
import { API_URL } from "../../../../api/auth";
import { Redirect } from 'react-router-dom';
import Notification from '../../../components/notifications/Notification';

function BlogEditor({ action, id, title, body, notification }) {

	const [value, setValue] = useState(body);
	const [text, setText] = useState(title);
	const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
	const [created, setCreated] = useState(false);
	const [file, setFile] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();

		const target = event.target;
		const formData = {
			title: target.title.value,
			body: value,
			blog_id: 1
		}

		if (action == "new") {
			axios.post(`${API_URL}/blogs/1/posts`, formData)
				.then(response => {
					if (response.status >= 200 && response.status <= 300) {
						notification('Blog post created successfully.', 'success');
						setCreated(true);
					} else Promise.reject();
				})
				.catch(() => { notification('There was an error in creating your blog post. Your data was not saved.', 'error') });
		} else {
			axios.patch(`${API_URL}/blogs/1/posts/${id}`, formData)
				.then(response => {
					if (response.status >= 200 && response.status <= 300) {
						notification('Blog post updated successfully.', 'success');
						setCreated(true);
					} else Promise.reject();
				})
				.catch(() => { notification('There was an error in updating your blog post. Your data was not saved.', 'error') });
		}
	}

	const handleTextChange = (event) => {
		event.preventDefault();
		setText(event.target.value);
	}

	const handleUpload = async (event) => {
		const file = event.target.files[0];
		if (!file) return;
		setFile({ loading: true });
		const payload = await fetch(`${API_URL}/s3/direct_post`).then(response => response.json());
		const url = payload.url;
		const formData = new FormData();
	}

	return (
		<div className="blog">
			<div className="blogContainer">
				<div className="blogUpdate">
					<form onSubmit={(event) => { handleSubmit(event) }} className="newBlogForm flex-col">
						{created ? <Redirect to="/admin/blogs" /> : <></>}
						<Notification notify={notify} setNotify={setNotify} />
						<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
							<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
								<div className="mb-4">
									<label className="text-xl text-gray-600">
										Title <span className="text-red-500">*</span>
									</label>
									<br />
									<input type="text" className="border-2 border-gray-300 p-2 w-full" value={title} onChange={handleTextChange} name="title" required />
								</div>
								<div className="mb-8">
									<label className="text-xl text-gray-600">
										Content <span className="text-red-500">*</span>
									</label>
									<br />
									<textarea className="border-2 border-gray-300 p-2 w-full h-full" value={value} name="body" onChange={handleTextChange} />
									<input type="file" onChange={handleUpload} />
								</div>
							</div>
						</div>
						<button type="submit" className="newBlogButton hover:bg-red-700">{action == "new" ? "Create" : "Update"}</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default BlogEditor
