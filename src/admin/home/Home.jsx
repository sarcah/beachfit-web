import React from 'react';
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
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