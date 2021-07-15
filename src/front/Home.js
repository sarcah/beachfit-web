import React from 'react';
import Navbar from "../components/Navbar";
import MainSVG from "./svg/MainSVG";
import MainSVG2 from "./svg/MainSVG2";
import MainSVG3 from "./svg/MainSVG3";
import { Link } from 'react-router-dom';


const Home = () => {
	return (
		<div>
			<link href="https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat:400,900&display=swap" rel="stylesheet" />
			<main className="bg-gray-800 font-montserrat relative overflow-hidden">
			<MainSVG />
			<MainSVG2 />
			<header className="h-24 sm:h-32 flex items-center z-30 absolute top-0 left-0 w-full">
				<div className="container mx-auto px-6 flex items-center justify-between">
				<div className="uppercase text-white font-black lg:text-3xl text-xl">
					<Link to="/">Beach Fit and Wellness</Link>
				</div>
				<Navbar />
				</div>
			</header>
			<div className="flex relative z-20">
				<div className="container mx-auto px-6 flex relative">
				<div className="sm:w-1/2 lg:w-2/5 flex flex-col relative z-20 pt-32 lg:pt-48 pb-20 lg:pb-40">
					<span className="w-20 h-2 bg-white mb-12" />
					<h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-white">
					Get git <span className="text-5xl sm:text-7xl">Running</span>
					</h1>
					<p className="text-sm sm:text-base text-white">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
					nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
					erat volutpat
					</p>
					<div className="flex mt-8">
					<a href="#" className="uppercase py-2 px-5 sm:px-8 rounded-full bg-yellow-500 border-2 border-transparent text-white text-sm mr-4 hover:bg-yellow-400">Free Trial</a>
					<a href="#" className="uppercase py-2 px-5 sm:px-8 rounded-full bg-transparent border-2 border-yellow-500 text-white hover:bg-yellow-500 hover:text-white text-sm">Read more</a>
					</div>
				</div>
				<div className="hidden sm:block sm:w-1/2 lg:w-3/5 relative">
					<MainSVG3 />
				</div>
				</div>
			</div>
			</main>
		</div>
	);
}

export default Home;