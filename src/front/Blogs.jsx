import React, { useState, useEffect } from 'react';
import { API_URL } from "../api/auth";
import { Link } from "react-router-dom";
import axios from 'axios';
import Header from "./components/Header";
import Footer from './components/Footer';


function Blogs() {

	const [blogs, setBlogs] = useState(null);

	useEffect(() => {
		axios.get(`${API_URL}/blogs/1/posts`)
			.then(response => {
				setBlogs(response.data)
			})
			.catch(() => { })
	}, []);

	return (
		<>
			<Header />
			<div className="container md:w-4/5 mx-auto text-gray-800 leading-normal mb-64">
				<div className="flex flex-col text-center justify-center h-full bg-gray-100 rounded shadow-lg pt-8 mx-0 sm:mx-6">
					<div className="max-w-screen-lg mx-auto">
						<main className="mt-12">
							{/* featured section */}
							<div className="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
								{/* main post */}
								<div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
									<img
										src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
										className="rounded-md object-cover w-full h-64"
									/>
									<span className="text-green-700 text-sm hidden md:block mt-4">

										Technology
									</span>
									<h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
										{blogs ? blogs[0].title : "Loading ..."}
									</h1>
									<p className="text-gray-600 mb-4">
										{blogs ? blogs[0].body : "Loading ..."}
									</p>
									{blogs ?
										<Link to={`/blogs/${blogs[0].id}`} className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100">
											Read more
										</Link> : "Loading ..."}
								</div>
								{/* sub-main posts */}

							</div>
							{/* end featured section */}
							{/* recent posts */}
							<div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
								<h2 className="font-bold text-3xl">Latest blog posts</h2>
								<a className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
									View all
								</a>
							</div>
							<div className="block space-x-0 lg:flex lg:space-x-6">

								{
									blogs ?
										blogs.map(blog => {
											return (<div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
												<img src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded" alt="technology" />
												<div className="p-4 pl-0">
													<h2 className="font-bold text-2xl text-gray-800">
														{blog.title}
													</h2>
													<p className="text-gray-700 mt-2">
														{blog.body}
													</p>
													<Link to={`/blogs/${blog.id}`} className="inline-block py-2 rounded text-green-900 mt-2 ml-auto">Read more</Link>
												</div>
											</div>)
										}) : <>Loading &hellip;</>
								}

							</div>
							{/* end recent posts */}


						</main>
						{/* main ends here */}
						{/* footer */}

					</div>











				</div>
			</div>
			<Footer />
		</>
	)
}

export default Blogs;