import React from "react";
import styled from "styled-components";


// const Nav = styled.nav`
//   width: 100%;
//   height: 55px;
//   border-bottom: 2px solid #f1f1f1;
//   padding: 0 20px;
//   display: flex;
//   justify-content: space-between;
//   .logo {
//     padding: 15px 0;
//   }
//   .navlinks {
// 	  list-style: none;
// 	  display: inherit;
// 	  flex-flow: row nowrap;
// 	  li {
// 		  padding: 18px 10px;
// 	  }
//   }

//   @media (max:width: 768px) {
// 	  ul {
// 		flex-flow: column nowrap;
// 		position: fixed;
// 		top: 0;
// 		right: 0;
// 		height: 100vh;
// 		width: 300px;
// 		padding-top: 3.5rem;
// 	  }
// 	  li {
// 		  color: #fff;
// 	  }
//   }
// `;


const Navbar = () => {
  return (
    <nav className="font-sen text-white uppercase text-lg lg:flex items-center hidden">
      {/*<ul className="navlinks">
         <li><a href="#" className="">Home</a></li>
        <li><a href="#" className="">Services</a></li>
        <li><a href="#" className="py-2 px-6 flex">About</a></li>
        <li><a href="#" className="py-2 px-6 flex">Contact</a></li>
        <li><a href="#" className="py-2 px-6 flex">FAQ</a></li> 

		
  </ul>}*/}

	  	<a href="#" className="">Home</a>
        <a href="#" className="">Services</a>
        <a href="#" className="py-2 px-6 flex">About</a>
        <a href="#" className="py-2 px-6 flex">Contact</a>
        <a href="#" className="py-2 px-6 flex">FAQ</a>
    </nav>
  );
};

export default Navbar;
