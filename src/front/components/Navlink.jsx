import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Navlink({linkTo, linkText}) {
	const active = (useLocation().pathname === linkTo);
	return (
		<li>
			<Link className={`inline-block rounded-sm py-2 sm:px-2 px-1 text-black no-underline hover:bg-gray-600 hover:text-white ${active ? "bg-gray-300" : ""}`} to={linkTo}>{linkText}</Link>
		</li>
	)
}

export default Navlink;