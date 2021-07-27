import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Navlink from "./Navlink";
import MenuIcon from '@material-ui/icons/Menu';
import "./navbar.css";

// The Navbar is affected by its settings values
// The client wanted to be able to show/hide blogs, show/hide FAQs and other information
// The navbar displays buttons based on what settings the client has selected
function Navbar({ settings }) {
	return (
		<div className="sm:px-4 md:px-0 md:w-4/5 mx-auto -mt-32">
			<div className="mx-0 sm:mx-6">
				<nav className="mt-0 w-full">
					<div className="container mx-auto flex items-center bg-white">
						<div className="flex w-1/2 sm:pl-4 text-sm">
						<label htmlFor="menuCheck" id="navBurger" className="sm:hidden block"><MenuIcon /></label>
						<input type="checkbox" id="menuCheck" className="hidden" />
							<ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
								<Navlink linkTo="/" linkText="Home" />
								<Navlink linkTo="/about" linkText="About" />
								<Navlink linkTo="/contact" linkText="Contact" />
								{settings && settings.faq_show ? <Navlink linkTo="/faq" linkText="FAQ" /> : <></>}
								<Navlink linkTo="/timetable" linkText="Timetable" />
								<Navlink linkTo="/pricing" linkText="Pricing" />
								{settings && settings.blog_show ? <Navlink linkTo="/blogs" linkText="Blogs" /> : <></>}
							</ul>
						</div>
						<div className="flex w-1/2 justify-end content-center">
							<a className="inline-block text-gray-700 no-underline hover:text-gray-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
								href="mailto:yvonnedallman@hotmail.co.uk" target="_blank" rel="noreferrer">
								<MailOutlineIcon className="fill-current h-4" />
							</a>
							<a className="inline-block text-gray-700 no-underline hover:text-gray-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
								href="https://instagram.com/beachfitandwellbeing/" target="_blank" rel="noreferrer">
								<InstagramIcon className="fill-current h-4" />
							</a>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Navbar;