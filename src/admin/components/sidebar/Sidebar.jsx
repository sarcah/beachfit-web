import React from 'react';
import "./sidebar.css";
import SideBarLink from './SideBarLink';

export default function Sidebar() {
	return (
		<div>
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarList">
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
