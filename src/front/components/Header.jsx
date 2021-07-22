import React from "react";
import { Link } from 'react-router-dom';
import background from "../img/4jILtYYg.jpeg";
import beachfitLogo from "../img/beachfit-logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-blue-200 font-sans leading-normal tracking-normal">
      <div className="w-full flex justify-center align-center text-center content-center"><Link to="/" className="mt-8 absolute"><img src={beachfitLogo} title="BeachFit & Wellbeing" /></Link></div>
      <div className="w-full m-0 p-0 bg-cover bg-bottom" style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        height: "85vh",
        maxHeight: 460
      }}>
        <div className="max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
          {/*Title*/}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;