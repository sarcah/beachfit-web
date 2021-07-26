import React from 'react';
import "./newBlog.css";
import { BLOG_ACTION } from '../../../blog/Blog';
import BlogEditor from './BlogEditor';

export default function NewBlog({notification}) {

	return (
		<div className="newBlog">
			<h1 className="block text-2xl ml-0 mr-0 font-bold">New Blog Post</h1>
			<BlogEditor action={BLOG_ACTION.new} notification={notification} />
		</div>
	)
}
