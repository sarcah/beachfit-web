import React from 'react';
import "./sidebar.css";
import SideBarLink from './SideBarLink';

export default function Sidebar() {
	return (
		<div>
			<div className="p-5 text-gray-600 sticky">
				<div className="mb-2">
					<h3 className="text-xl text-gray-500">Dashboard</h3>
					<ul className="p-1 list-none">
						<SideBarLink linkTo="/admin" linkText="Home" />
						<SideBarLink linkTo="/admin/blogs" linkText="Blogs" />
						<SideBarLink linkTo="/admin/pricings" linkText="Pricings" />
						<SideBarLink linkTo="/admin/faqs" linkText="FAQs" />
						<SideBarLink linkTo="/admin/settings" linkText="Settings" />
					</ul>
				</div>
			</div>
		</div>
	)
}
