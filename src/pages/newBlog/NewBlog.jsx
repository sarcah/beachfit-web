import React, { useState } from 'react';
import "./newBlog.css";
import axios from "axios"

export default function NewBlog() {

	const API_URL = process.env.REACT_APP_API_URL;
	const [data, setData] = useState([]);

	const handleSubmit = () => {
		const formData = {
			title: document.querySelector("#blogtitle").value,
			body: document.querySelector("#blogbody").value,
			blog_id: 1
		}
		axios.post(`${API_URL}/blogs/1/posts`, formData)
			.then()
			.catch()
	}
	return (
		<div className="newBlog">
			<h1 className="block text-4xl ml-0 mr-0 font-bold">New Blog</h1>
			
			<form action="" onSubmit={handleSubmit} className="newBlogForm">
				
				<div className="newBlogItem">
					<label htmlFor="Blogname">Blog Post Title</label>
					<input type="text" id="blogtitle" placeholder="John" />
				</div>

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
				</div>

				<button type="submit" className="newBlogButton">Create</button>
			</form>
		</div>
	)
}
