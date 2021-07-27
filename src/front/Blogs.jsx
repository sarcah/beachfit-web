import React, { useState, useEffect } from 'react';
import { API_URL } from "../api/auth";
import { Link } from "react-router-dom";
import axios from 'axios';
import Header from "./components/Header";
import Footer from './components/Footer';

// This displays the main Blogs page with a featured blog and several others, ordered according to creation date
function Blogs({ settings }) {

	const [blogs, setBlogs] = useState(null);
	
	// Every useEffect has a cleanup code in case the component is unmounted when the response is received
	useEffect(() => {
		let mounted = true;
		axios.get(`${API_URL}/blogs/1/featured-posts`)
			.then(response => { if (mounted) setBlogs(response.data) })
			.catch(() => { })
		return () => { mounted = false }
	}, []);

	// The first blog is removed and placed in featuredBlog, while the rest are rendered to the screen further down the document
	const featuredBlog = blogs ? blogs.shift() : null;

	return (
		<>
			<Header settings={settings} />
			<div className="container md:w-4/5 mx-auto text-gray-800 leading-normal mb-64">
				<div className="flex flex-col text-center justify-center h-full bg-gray-100 rounded shadow-lg pt-8 mx-0 sm:mx-6">
					<div className="max-w-screen-lg mx-auto">
						<main className="mt-12">
							{/* featured section */}
							<div className="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
								{/* main post */}
								<div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
									{(blogs) ? ((featuredBlog.video != "") ?
										(<iframe className="mx-auto" style={{ width: "40rem", height: "22rem" }} src={featuredBlog.video} frameBorder={0} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />) : (<img src={featuredBlog.image_url} className="w-full h-auto" />)) : null
									}
									<h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
										{blogs ? (<Link to={`/blogs/${featuredBlog.id}`} className="hover:text-gray-600">{featuredBlog.title}</Link>) : "Loading ..."}
									</h1>
									<p className="text-gray-600 mb-4">
										{blogs ? `${featuredBlog.body.substr(0, 300)}...` : "Loading ..."}
									</p>
									{blogs ?
										<Link to={`/blogs/${featuredBlog.id}`} className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100 hover:bg-green-400">
											Read more
										</Link> : "Loading ..."}
								</div>
								{/* sub-main posts */}

							</div>
							{/* end featured section */}
							{/* recent posts */}
							<div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
								<h2 className="font-bold text-3xl">Latest blog posts</h2>
								<Link to="/blogs/all" className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
									View all
								</Link>
							</div>
							<div data-testid="bloglist" className="block space-x-0 lg:flex lg:space-x-6">

								{
									blogs ?
										blogs.map(blog => {
											return (<div key={blog.id} className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
												<div className="w-64 h-64">
													<Link to={`/blogs/${blog.id}`}><img src={blog.image_url} className="rounded w-full h-full" /></Link></div>
												<div className="p-4 pl-0">
													<h2 className="font-bold text-2xl text-gray-800">
														<Link to={`/blogs/${blog.id}`} className="hover:text-gray-600" >{blog.title.substr(0, 50)}...</Link>
													</h2>
													<p className="text-gray-700 mt-2">
														{blog.body.substr(0, 300)}...
													</p>
													<Link to={`/blogs/${blog.id}`} className="inline-block py-2 px-4 rounded text-green-900 mt-2 ml-auto hover:bg-green-400 hover:border-4 hover:border-green-500">Read more</Link>
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