import React from 'react'
import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

export default function SideBarLink({linkTo, linkText}) {
	const active = (useLocation().pathname == linkTo);

	return (
		<Link to={linkTo} className="link">
			<li className={`sidebarListItem ${active ? "active" : ""}`}>
				<LineStyle className="sidebarIcon" />
				{linkText}
			</li>
		</Link>
	)
}