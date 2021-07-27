import React from 'react';
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import SettingsIcon from '@material-ui/icons/Settings';

function LinkIcon({ linkText }) {
	switch (linkText) {
		case "Home":
			return (<HomeIcon />)
		case "Blogs":
			return (<DescriptionIcon />)
		case "Pricings":
			return (<LocalAtmIcon />)
		case "FAQs":
			return (<LiveHelpIcon />)
		case "Settings":
			return (<SettingsIcon />)
	}
}

export default function SideBarLink({ linkTo, linkText }) {
	const active = (useLocation().pathname == linkTo);
	return (
		<Link to={linkTo} className="link">
			<li className={`sidebarListItem ${active ? "active" : ""}`}>
				<LinkIcon className="sidebarIcon" linkText={linkText} />&nbsp;
				{linkText}
			</li>
		</Link>
	)
}