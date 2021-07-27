import React from 'react';
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import SettingsIcon from '@material-ui/icons/Settings';

// Each link has a different icon
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

	// Depending on which page the user is on, updates CSS of the link to highlight it
	const active = (useLocation().pathname == linkTo);
	
	return (
		<Link to={linkTo} className="link">
			<li className={`sidebarListItem p-1 cursor-pointer flex items-center w-full rounded-xl ${active ? "active" : ""}`}>
				<LinkIcon className="mr-1 text-xl" linkText={linkText} />&nbsp;
				<div className="hidden sm:block">{linkText}</div>
			</li>
		</Link>
	)
}