import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./newBlog.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { API_URL } from "../../../../api/auth";
import { Redirect } from 'react-router-dom';
import Notification from '../../../components/notifications/Notification';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlParser2 } from 'react-html-parser';

function BlogEditor({ action, id, title, body, notification }) {
	
	const [value, setValue] = useState(body);
	const [text, setText] = useState(title);
	const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
	const [created, setCreated] = useState(false);
	const [file, setFile] = useState(null);

	console.log(body);

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
						notification('Blog post created successfully.','success');
						setCreated(true);
					} else Promise.reject();
				})
				.catch(() => { notification('There was an error in creating your blog post. Your data was not saved.','error') });
		} else {
			axios.patch(`${API_URL}/blogs/1/posts/${id}`, formData)
				.then(response => {
					if (response.status >= 200 && response.status <= 300) {
						notification('Blog post updated successfully.','success');
						setCreated(true);
					} else Promise.reject();
				})
				.catch(() => { notification('There was an error in updating your blog post. Your data was not saved.','error') });
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
				<div className="blogShow">
					{ReactHtmlParser(text)}
					{ReactHtmlParser(value)}
				</div>
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
									<textarea className="border-2 border-gray-300 p-2 w-full h-full" value={value} onChange={handleTextChange} />
									<input type="file" onChange={handleUpload} />
								</div>
							</div>
						</div>
						<button type="submit" className="newBlogButton hover:bg-red-700">{action == "new" ? "Create" : "Update"}</button>
						{/* <div className="newBlogItem mb-10">
					<label htmlFor="Blogname">Blog Post Title</label>
					<input type="text" name="title" id="blogtitle" placeholder="Blog Title" />
				</div>
				<div className="newBlogItem mb-10">
					<label>Blog Post Body</label>
				<CKEditor style={{height: "400px"}}
					editor={ ClassicEditor }
					onChange={handleChange}
					data="Po" />
					</div> */}

						{/* 

				<div className="newBlogItem">
					<label htmlFor="fullname">Body</label>
					<input type="text" id="blogbody" placeholder="John Doe" />
				</div>

				<div className="newBlogItem">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" placeholder="john@example.com" />
				</div>

				<div className="newBlogItem">
					<label htmlFor="password">Email</label>
					<input type="password" id="password" placeholder="" />
				</div>

				<div className="newBlogItem">
					<label htmlFor="phone">Phone</label>
					<input type="text" id="phone" placeholder="+61 123 456 789" />
				</div>

				<div className="newBlogItem">
					<label htmlFor="address">Address</label>
					<input type="text" id="address" placeholder="Sydney, Australia" />
				</div>

				<div className="newBlogItem">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" placeholder="" />
				</div> */}


					</form>
				</div>
			</div>
		</div>
	)
}

export default BlogEditor
