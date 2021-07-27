import React from 'react';
import Header from "./components/Header";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./contact.css";
import Footer from './components/Footer';

function Contact({ settings }) {
	return (
		<>
			<Header settings={settings} />
			<div className="container md:w-4/5 mx-auto text-gray-800 leading-normal mb-64">
				<div className="flex flex-col text-center justify-center h-full bg-gray-100 rounded shadow-lg pt-8 mx-0 sm:mx-6">
					<div className="md:px-32 py-8 w-full">
						<div className="text-center mb-20">
							<h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
								Contact
							</h1>
							<p className="text-2xl md:mt-24 md:mb-24 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-10">Are you ready to start the journey to health, fitness and improved wellbeing?</p>
							<p className="text-xl md:mt-24 md:mb-24 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-10">
								To book in a FREE trial session or ask a question, pop an email to <a className="hover:underline hover:text-red-800 font-bold" href={`mailto: ${settings && settings.email_address}`}>{settings && settings.email_address}</a>
							</p>
							<p className="text-xl md:mt-24 md:mb-24 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-10">
								Alternatively call or text on <span className="font-bold">{ settings && settings.phone_number }</span></p>
						</div>
						<div className="flex justify-center">
							<iframe style={{ border: 0 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1968.6040547873286!2d151.2575224346312!3d-33.92095361975272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b26aeb0ad66b%3A0x5fc588076f352da2!2sCoogee%20Beach!5e0!3m2!1sen!2sau!4v1579155436717!5m2!1sen!2sau"
								width={290} height={190} frameBorder={0} allowFullScreen="allowfullscreen" />
						</div>
						<div className="text-center mb-20">
							<p className="text-2xl md:mt-24 md:mb-24 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-10">And when we’re not running sessions on beautiful Coogee Beach, you can find us on &hellip;</p>
							<a href="mailto:yvonnedallman@hotmail.co.uk" target="_blank"><MailOutlineIcon className="socialMediaIcons text-blue-700 hover:text-blue-500" /></a>
							<a href="https://instagram.com/beachfitandwellbeing/" target="_blank"><InstagramIcon className="socialMediaIcons intagramIcon" style={{ color: "#E4405F" }} /></a>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Contact;