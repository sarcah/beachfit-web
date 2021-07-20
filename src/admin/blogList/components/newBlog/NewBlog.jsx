import React, { useState } from 'react';
import "./newBlog.css";

import BlogEditor from './BlogEditor';

export default function NewBlog() {
	

	return (
		<div className="newBlog">
			<h1 className="block text-2xl ml-0 mr-0 font-bold">New Blog Post</h1>
			<BlogEditor action="new" />
		</div>
	)
}
