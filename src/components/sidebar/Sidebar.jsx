import React from 'react';
import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<div>
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarList">
						<Link to="/admin" className="link">
							<li className="sidebarListItem active">
								<LineStyle className="sidebarIcon" />
								Home
							</li>
						</Link>

						<Link to="/admin/users" className="link">
							<li className="sidebarListItem">
								<LineStyle className="sidebarIcon" />
								Users
							</li>
						</Link>

						<Link to="/admin/products" className="link">
							<li className="sidebarListItem">
								<Timeline className="sidebarIcon" />
								Products
							</li>
						</Link>
					</ul>
				</div>

				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Quick Menu</h3>
					<ul className="sidebarList">
						
						<Link to="/admin" className="link">
							<li className="sidebarListItem active">
								<LineStyle className="sidebarIcon" />
								Home
							</li>
						</Link>
						
						<Link to="/admin/users" className="link">
							<li className="sidebarListItem">
								<LineStyle className="sidebarIcon" />
								Users
							</li>
						</Link>

						<Link to="/admin/products" className="link">
							<li className="sidebarListItem">
								<Timeline className="sidebarIcon" />
								Products
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	)
}
