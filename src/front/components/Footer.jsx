import React from 'react';

// Footer simply renders a page footer with copyright information
function Footer() {
	return (
		<footer className="bg-gray-900">
			<div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
				<div className="w-full mx-auto flex flex-wrap items-center">
					<div className="flex w-full justify-center text-white font-extrabold">
						<p className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline" >
							<span className="text-base text-gray-200">Copyright 2021 &mdash; Punit Dharmadhikari & Sarah Cahill &mdash; Web Developers</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;