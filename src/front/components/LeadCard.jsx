import React from 'react';
import heroImage from "../img/GMQtRz5w.jpeg"

function LeadCard() {
	return (
		<div className="flex h-full flex-col text-center justify-center bg-white rounded overflow-hidden shadow-lg">
			<div className="w-full flex flex-col flex-grow flex-shrink">
				<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
					<div className="w-full font-bold text-3xl text-gray-900 px-6 mb-6">
						It’s time to put YOU first!
					</div>
					<div className="text-gray-800 text-xl text-base px-6 mb-5">
						At BeachFit and Wellbeing we are passionate about helping you become fitter, stronger and healthier. Our workouts on the beautiful Coogee Beach, are designed to motivate and inspire you on your fitness journey, wherever you may be.
					</div>
				</div>
			</div>
			<div className="w-full rounded-t">
				<img src={heroImage} className="h-full w-full shadow" />
			</div>
		</div>
	)
}

export default LeadCard
