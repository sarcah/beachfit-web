import React, { useState, useEffect } from 'react';
import "./blog.css";
import axios from 'axios';
import { API_URL } from "../../api/auth.js";
import BlogEditor from '../blogList/components/newBlog/BlogEditor';

// Constants that determine what action is being performed on a blog post - create or update
export const BLOG_ACTION = {
	new: "NEW",
	update: "UPDATE"
}

export default function Blog({id, notification}) {
	const [blogData, setBlogData] = useState(null);

	useEffect(() => {
		axios.get(`${API_URL}/blogs/1/posts/${id}`)
			.then(response => { setBlogData(response.data) })
			.catch();
	}, []);

	return (
		blogData ? 
		(<BlogEditor data={blogData} action={BLOG_ACTION.update} notification={notification} />) : null
	);
}