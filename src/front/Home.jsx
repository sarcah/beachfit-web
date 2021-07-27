import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import IdeasTable from './components/IdeasTable';
import LeadCard from './components/LeadCard';
import Testimonials from './components/Testimonials';


const Home = ({ settings }) => {

	
	return (
		<>
			<Header settings={settings} />
			<div className="container md:w-4/5 mx-auto text-gray-800 leading-normal mb-64">
				<div className="flex flex-col text-center justify-center h-full bg-white rounded shadow-lg pt-8 mx-0 sm:mx-6">
					{/*Lead Card*/}
					<LeadCard />

					{/*Testimonials Container*/}
						{
							settings && settings.testimonial_show ? <>
							<div className="text-center mt-10 sm:text-3xl text-2xl font-medium title-font text-gray-900 ">Testimonials</div>
							<Testimonials /></> : <></>
						}
				</div>
					{/*/ Post Content*/}
				

				<IdeasTable />


				{/*Subscribe*/}
				<div className="container font-sans bg-white rounded mt-8 p-4 md:p-24 text-center">
					
					<div className="w-full text-center pt-4">
						<form action="#">
							<div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
								
							</div>
						</form>
					</div>
				</div>
				{/* /Subscribe*/}

				
			</div>
			<Footer />
		</>
	);
}

export default Home;