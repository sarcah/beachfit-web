import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";
import background from "./cover.jpg";
import beachfitLogo from "./beachfit-logo.png";

const Navbar = () => {

  return (
    <div className="bg-gray-600 font-sans leading-normal tracking-normal">
      <Link to="/" className="mt-12 ml-24 absolute"><img src={beachfitLogo} /></Link>
      <div className="w-full m-0 p-0 bg-cover bg-bottom" style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "85vh",
        maxHeight: 460
      }}>
        <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
          {/*Title*/}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
