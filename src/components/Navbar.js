import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {

  const handleCheckbox = () => {
    document.getElementById("burgerLabel").classList.toggle("open");
    document.getElementById("menu").classList.toggle("open");
  }

  return (
    <div className="flex items-center">
        <input type="checkbox" onChange={handleCheckbox} className="hidden" id="burgerMenu" />
        <ul id="menu" className="font-sen text-white uppercase text-lg lg:flex items-center hidden">
          <Link to="/" className="menuLink py-2 px-6 flex hover:underline">Home</Link>
          <Link to="/" className="menuLink py-2 px-6 flex hover:underline">Services</Link>
          <Link to="/about" className="menuLink py-2 px-6 flex hover:underline">About</Link>
          <Link to="/" className="menuLink py-2 px-6 flex hover:underline">Contact</Link>
          <Link to="/faq" className="menuLink py-2 px-6 flex hover:underline">FAQ</Link>
        </ul>
        <label id="burgerLabel" htmlFor="burgerMenu" className="lg:hidden flex flex-col ml-4">
          <span className="burger w-6 h-1 bg-white mb-1" />
          <span className="burger w-6 h-1 bg-white mb-1" />
          <span className="burger w-6 h-1 bg-white mb-1" />
        </label>
    </div>
  );
};

export default Navbar;
