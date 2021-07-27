import React, { useState } from 'react';
import axios from 'axios';
import "./newBlog.css";
import { API_URL, responseOK } from "../../../../api/auth";
import { Redirect } from 'react-router-dom';
import ImageIcon from '@material-ui/icons/Image';
import { BLOG_ACTION } from "../../../blog/Blog";

function BlogEditor({ action, data, notification }) {

	const [blogData, setBlogData] = useState({ ...data });
	const [created, setCreated] = useState(false);
	const [imagePreview, setImagePreview] = useState(null);

	// Send all data as form data
	const handleSubmit = (event, id) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		console.log(event.target.name);

		switch (action) {

			// Post request to create a new blog post
			case BLOG_ACTION.new:
				axios.post(`${API_URL}/blogs/1/posts`, formData)
					.then(response => {
						if (responseOK(response.status)) {
							notification('Blog post created successfully.', 'success');
							setCreated(true);
						} else Promise.reject();
					})
					.catch(() => { notification('There was an error in creating your blog post. Your data was not saved.', 'error') });
				break;

			// Path request to update blog post
			case BLOG_ACTION.update:
				axios.patch(`${API_URL}/blogs/1/posts/${id}`, formData)
					.then(response => {
						if (responseOK(response.status)) {
							notification('Blog post updated successfully.', 'success');
							setCreated(true);
						} else Promise.reject();
					})
					.catch(() => { notification('There was an error in updating your blog post. Your data was not saved.', 'error') });
				break;

			default:
				break;

		}
	}

	// Prevent React from taking ownership of textboxes and other form elements
	const handleTextChange = (event) => {
		event.preventDefault();
		setBlogData(event.target.value);
	}

	// Show a preview of the image before uploading
	const handleImagePreview = (event) => {
		if (event.target.files) {
			console.log(event.target.value)
			setImagePreview(URL.createObjectURL(event.target.files[0]))
			document.getElementById("uploadButton").classList.add("hidden");
		}
	}

	return (
		<div className="blog">
			<div className="blogContainer">
				<div className="blogUpdate">
					<form onSubmit={(event) => { handleSubmit(event, blogData.id) }} name="post" className="newBlogForm flex-col">
						{created ? <Redirect to="/admin/blogs" /> : <></>}
						<input type="hidden" name="blog_id" value="1" />
						<div className="w-9/12 mx-auto">
							<div className="bg-white overflow-auto shadow-sm sm:rounded-lg">
								<div className="mb-4">
									<label className="text-xl text-gray-600">
										Title <span className="text-red-500">*</span>
									</label>
									<br />
									<input type="text" className="border-2 border-gray-300 p-2 w-full" value={blogData.title} onChange={handleTextChange} name="title" required />
								</div>
								<div className="mb-8">
									<label className="text-xl text-gray-600">
										Content <span className="text-red-500">*</span>
									</label>
									<br />
									<textarea className="border-2 border-gray-300 p-2 w-full h-auto" rows="15" value={blogData.body} name="body" onChange={handleTextChange} />
								</div>

								<div className="items-center justify-center bg-grey-lighter mb-4">
									<div className="text-xl text-gray-600">Image</div>
									<img className="w-24 h-auto" src={imagePreview} />
									<label id="uploadButton" className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-700">
										<ImageIcon />
										<span className="mt-2 text-base leading-normal">Select an image</span>
										<input type="file" className="hidden" name="image" accept="image/*" onChange={handleImagePreview} />
									</label>
								</div>
								<div className="mb-4">
									<label className="text-xl text-gray-600">
										Video Link
									</label>
									<br />
									<input type="text" className="border-2 border-gray-300 p-2 w-full" value={blogData.video} onChange={handleTextChange} name="video" />
								</div>
							</div>
						</div>
						<button type="submit" className="newBlogButton hover:bg-red-700">{action == BLOG_ACTION.new ? "Create" : "Update"}</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default BlogEditor
