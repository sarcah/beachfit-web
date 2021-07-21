import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import { API_URL } from "../api/auth";
import { PhoneAndroid } from '@material-ui/icons';
import axios from 'axios';
// import { FacebookIcon, InstagramIcon } from "@material-ui/icons";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./contact.css";
import Footer from './components/Footer';


function Blogs() {
	return (
		<>
			<Header />
			<div className="container md:w-4/5 mx-auto text-gray-800 leading-normal mb-64">
				<div className="flex flex-col text-center justify-center h-full bg-gray-100 rounded shadow-lg pt-8 mx-0 sm:mx-6">

				</div>
			</div>
			<Footer />
		</>
	)
}

export default Blogs;