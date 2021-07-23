import React, { useState, useEffect } from 'react';
import "./blog.css";
import axios from 'axios';
import { API_URL } from "../../api/auth.js";
import BlogEditor from '../blogList/components/newBlog/BlogEditor';


export default function Blog({id, notification}) {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get(`${API_URL}/blogs/1/posts/${id}`)
			.then(response => {
				setData(response.data)
			}).catch();
	}, []);

	return (
		data ? 
		<BlogEditor id={id} title={data.title} body={data.body} notification={notification} /> : null
	);
}