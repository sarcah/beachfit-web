import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';

// A Static stateless component that displays the class timetable
// Values for contact information are set through settings
function Timetable({ settings }) {

	return (
		<>
			<Header settings={settings} />
			<div className="container md:w-4/5 mx-auto text-gray-800 leading-normal mb-64">
				<div className="flex flex-col text-center justify-center h-full bg-gray-100 rounded shadow-lg pt-8 mx-0 sm:mx-6">
					<div className="md:px-32 py-8 w-full">
						<div className="shadow overflow-hidden rounded border-b border-gray-200">
							<div className="text-center mb-20">
								<h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
									Session Timetable
								</h1>
								<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-10">

									Please e-mail any questions to <a className="hover:underline hover:text-red-800 font-bold" href={`mailto: ${settings && settings.email_address}`}>{settings && settings.email_address}</a>

								</p>
								Alternatively call or text on <span data-testid="phoneNumber" className="font-bold">{ settings && settings.phone_number }</span>
							</div>
							<div className="grid min-w-full bg-white">
								<div className="bg-gray-800 grid grid-cols-3 text-white">
									<div className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Monday</div>
									<div className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Wednesday</div>
									<div className="text-left py-3 px-4 uppercase font-semibold text-sm">Friday</div>
								</div>
								<div className="text-gray-700 grid grid-cols-3 ">
									<div data-testid="mondayTimes" className="w-full text-left py-3 px-4">6:00 AM - 6:40 AM</div>
									<div className="w-full text-left py-3 px-4">6:00 AM - 6:40 AM</div>
									<div className="w-full text-left py-3 px-4">6:00 AM - 6:40 AM</div>
								</div>
								<div className="bg-gray-100 grid grid-cols-3 ">
									<div className="w-full text-left py-3 px-4">6:45 AM - 7:25 AM</div>
									<div className="w-full text-left py-3 px-4">6:45 AM - 7:25 AM</div>
									<div className="w-full text-left py-3 px-4">6:45 AM - 7:25 AM</div>
								</div>
								<div data-testid="sessionTimesWeek" className="text-gray-700 grid grid-cols-1 text-center py-3 pt-12 pb-12 px-4 font-bold leading-8">
									We run two sessions every Monday, Wednesday and Friday. You can choose one session per day that we train.
									Sessions run for 40 minutes on Coogee Beach.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Timetable;