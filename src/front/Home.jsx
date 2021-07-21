import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import S3FileUpload from "react-s3";
import Footer from './components/Footer';
import IdeasTable from './components/IdeasTable';
import LeadCard from './components/LeadCard';
import Testimonials from './components/Testimonials';


const Home = () => {

	
	return (
		<>
			<Header />
			<div className="container md:w-4/5 mx-auto text-gray-800 leading-normal mb-64">
				<div className="flex flex-col text-center justify-center h-full bg-white rounded shadow-lg pt-8 mx-0 sm:mx-6">
					{/*Lead Card*/}
					<LeadCard />

					{/*Testimonials Container*/}
					<div className="text-center mt-10 sm:text-3xl text-2xl font-medium title-font text-gray-900 ">Testimonials</div>
						<Testimonials />
				</div>
					{/*/ Post Content*/}
				

				<IdeasTable />


				{/*Subscribe*/}
				<div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
					<h2 className="font-bold break-normal text-2xl md:text-4xl">
						Subscribe to Ghostwind CSS
					</h2>
					<h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">
						Get the latest posts delivered right to your inbox
					</h3>
					<div className="w-full text-center pt-4">
						<form action="#">
							<div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
								<input
									type="email"
									placeholder="youremail@example.com"
									className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
								/>
								<button
									type="submit"
									className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
								>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
				{/* /Subscribe*/}

				<Footer />
			</div>
		</>
	);
}

export default Home;