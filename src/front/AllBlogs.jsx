import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { API_URL } from "../api/auth";
import Header from './components/Header';
import Footer from './components/Footer';

// AllBlogs displays all blogs in a long list
function AllBlogs({ settings }) {

	const [blogs, setBlogs] = useState(null);

	// Every useEffect has a cleanup code in case the component is unmounted when the response is received
	useEffect(() => {
		let mounted = true;
		axios.get(`${API_URL}/blogs/1/posts`)
			.then(response => { if (mounted) setBlogs(response.data) })
			.catch(() => { })
		return () => { mounted = false }
	}, []);


	return (
		<>
			<Header  settings={settings} />
			<div className="container md:w-4/5 mx-auto text-gray-800 leading-normal mb-64">
				<div className="flex flex-col justify-center h-full bg-gray-100 rounded shadow-lg pt-8 mx-0 sm:mx-6">
				<div className="text-left mx-8"><Link to="/blogs" className="text-green-700 hover:text-green-500 hover:bg-green-100 py-2 px-2 rounded">&lt;&lt; Back</Link></div>
					<div className="w-10/12 md:w-4/7 ml-4" data-testid="bloglist">
						{/* post 1 */}
						{
							blogs ? blogs.map(blog => {
								return (
									<div key={blog.id} className="rounded w-full flex flex-col md:flex-row mb-10">
										<div className="block lg:block h-auto m-4 md:m-0">
											<Link to={`/blogs/${blog.id}`}>
												<img src={blog.image_url} className="rounded-md" />
											</Link>
										</div>
										<div className="bg-white rounded px-4">
											<div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
												<Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
											</div>
											<p className="block p-2 pl-0 pt-1 text-sm text-gray-600">
												<Link to={`/blogs/${blog.id}`}>{blog.body.substr(0, 200)}...</Link>
											</p>
										</div>
									</div>)
							}) : <>Loading...</>
						}
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default AllBlogs;