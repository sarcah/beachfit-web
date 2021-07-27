import React from 'react';
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {

	// The Admin homepage only includes three links to other parts of the Admin page
	// The original plan was to create a website tracker and an Instagram feed on this page, but had to be slashed due to time constraints
	return (
		<div className="home">
			<div className="w-full flex flex-wrap justify-between">

				<Link to="/admin/blogs" className="featuredItem p-8 cursor-pointer">
					<span className="text-xl">Blogs</span>
				</Link>

				<Link to="/admin/faqs" className="featuredItem p-8 cursor-pointer">
					<span className="text-xl">FAQs</span>
				</Link>

				<Link to="/admin/pricings" className="featuredItem p-8 cursor-pointer">
					<span className="text-xl">Pricings</span>
				</Link>

			</div>

		</div>
	)
}