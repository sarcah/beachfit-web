import React from 'react'
import { Link } from 'react-router-dom';
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

function Navbar() {
	return (
		<div className="px-4 md:px-0 md:w-4/5 mx-auto -mt-32">
			<div className="mx-0 sm:mx-6">
				<nav className="mt-0 w-full">
					<div className="container mx-auto flex items-center bg-white">
						<div className="flex w-1/2 pl-4 text-sm">
							<ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
								<li className="mr-2">
									<Link className="inline-block py-2 sm:px-2 px-1 text-black no-underline hover:underline" to="/about">About</Link>
								</li>
								<li className="mr-2">
									<Link className="inline-block py-2 sm:px-2 px-1 text-black no-underline hover:underline" to="/contact">Contact</Link>
								</li>
								<li className="mr-2">
									<Link className="inline-block py-2 sm:px-2 px-1 text-black no-underline hover:underline" to="/faq">FAQ</Link>
								</li>
								<li className="mr-2">
									<Link className="inline-block py-2 sm:px-2 px-1 text-black no-underline hover:underline" to="/timetable">Timetable</Link>
								</li>
								<li className="mr-2">
									<Link className="inline-block py-2 sm:px-2 px-1 text-black no-underline hover:underline" to="/pricing">Pricing</Link>
								</li>
							</ul>
						</div>
						<div className="flex w-1/2 justify-end content-center">
							<a className="inline-block text-gray-700 no-underline hover:text-gray-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
								 href="https://www.facebook.com/BeachFitAndWellbeing" target="_blank">
								<FacebookIcon className="fill-current h-4" />
							</a>
							<a className="inline-block text-gray-700 no-underline hover:text-gray-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
								 href="https://instagram.com/beachfitandwellbeing/" target="_blank">
								<InstagramIcon className="fill-current h-4" />
							</a>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Navbar
