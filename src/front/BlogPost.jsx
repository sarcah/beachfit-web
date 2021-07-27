import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';
import { API_URL } from "../api/auth";

function BlogPost({ id, settings }) {

	const [blog, setBlog] = useState(null);

	useEffect(() => {
		axios.get(`${API_URL}/blogs/1/posts/${id}`)
			.then(response => {
				setBlog(response.data)
			})
			.catch(() => { })
	}, [])

	return (
		<>
			<Header settings={settings} />
			<div className="container md:w-4/5 mx-auto text-gray-800 leading-normal mb-64">
				<div className="flex sm:flex-col text-center justify-center h-full bg-gray-100 rounded shadow-lg pt-8 mx-0 sm:mx-6">
					<div className="text-left mx-8"><Link to="/blogs" className="text-green-700 hover:text-green-500 hover:bg-green-100 py-2 px-2 rounded">&lt;&lt; Back</Link></div>
					{
						blog ? (
							<div className="w-11/12 mx-auto">
								<div className="mb-4 md:mb-0 w-full mx-auto relative">
									<div className="px-4 lg:px-0">
										<h2 className="text-4xl font-semibold text-gray-800 leading-tight">
											{blog.title}
										</h2>
									</div>
									{
										(blog.image_url != "") ? (<img src={blog.image_url} className="w-full h-auto" />) : null
									}
								</div>
								<div className="flex flex-col lg:flex-row lg:space-x-12">
									<div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
										<p className="pb-6">
											{blog.body}
										</p>
										<p className="pb-6">
											{
												(blog.video != "") ? (<iframe className="mx-auto" style={{ width: "40rem", height: "22rem" }} src={blog.video} frameBorder={0} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />) : null
											}
										</p>
									</div>

									<div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
										<div className="p-4 border-t border-b md:border md:rounded">
											<div className="flex py-2">
												<div>
													<p className="font-semibold text-gray-700 text-sm">Yvonne Dallman</p>
													<p className="font-semibold text-gray-600 text-xs"> Fitness Trainer </p>
												</div>
											</div>
											<p className="text-gray-700 py-3">
												Yvonne writes about fitness and wellbeing and runs bootcamps on Coogee beach.
											</p>
											<a href="https://instagram.com/beachfitandwellbeing/" target="_blank" rel="noreferrer" className="px-2 py-1 text-gray-100 bg-green-700 hover:bg-green-500 flex w-full items-center justify-center rounded">
												Follow
												<i className="bx bx-user-plus ml-2" />
											</a>
										</div>
									</div>
								</div>
							</div>) : "Loading..."
					}
				</div>
			</div>
			<Footer />
		</>
	)
}

export default BlogPost;