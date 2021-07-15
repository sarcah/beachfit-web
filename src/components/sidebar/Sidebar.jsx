import React from 'react';
import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
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
						<SideBarLink linkTo="/admin/faq" linkText="FAQs" />
						<SideBarLink linkTo="/admin/settings" linkText="Settings" />



						{/*<Link to="/admin" className="link">
							<li className="sidebarListItem active">
								<LineStyle className="sidebarIcon" />
								Home
							</li>
						</Link>

						<Link to="/admin/blogs" className="link">
							<li className="sidebarListItem">
								<LineStyle className="sidebarIcon" />
								Blogs
							</li>
						</Link>

						<Link to="/admin/products" className="link">
							<li className="sidebarListItem">
								<Timeline className="sidebarIcon" />
								Pricings
							</li>
						</Link>

						<Link to="/admin/products" className="link">
							<li className="sidebarListItem">
								<Timeline className="sidebarIcon" />
								FAQs
							</li>
						</Link>

						<Link to="/admin/products" className="link">
							<li className="sidebarListItem">
								<Timeline className="sidebarIcon" />
								Settings
							</li>
	</Link>*/}
					</ul>
				</div>

				
			</div>
		</div>
	)
}
