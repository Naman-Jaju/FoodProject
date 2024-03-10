// import React from 'react'
// import {Link, NavLink} from 'react-router-dom'

// export default function Header() {
//     return (
//         <header className="shadow sticky z-50 top-0">
//            <nav className='bg-red-300 px-4 lg:px-6 py-2.5 border-gray-200' >
//              <div className='flex flex-row flex-wrap justify-between content-center mx-auto max-w-screen-xl'>
//                 <Link to ="/" className="flex flex-row items-center">
//                     <img src="https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg "
//                     className='mr-2 h-14' alt=" Logo" />
//                 </Link>
//                 <div className=' flex flex- items-center order-2'>
//                     <Link to = "#" className=' text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 text-xl rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none font font-bold'>
//                         Login
                    
//                     </Link>
//                 </div>
//                 <div className=' hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
//                      <ul className='flex flex-col lg:flex-row lg: space-x-8'>
//                         <li>
//                             <NavLink to="/" className={({isActive})=>
//                              ` block py-2 pr-4 pl-3 duration-300 ${isActive ?"text-orange-700": text-gray-700 }border-b  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                         }>
//                          Home   
//                          </NavLink>
//                          </li>
//                          <li>
//                             <NavLink to="/" className={({isActive})=>
//                              ` block py-2 pr-4 pl-3 duration-300 ${isActive ?"text-orange-700": text-gray-700 }border-b  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                         }>
//                          About Us   
//                          </NavLink>
//                          </li>
//                          <li>
//                             <NavLink to="/" className={({isActive})=>
//                              ` block py-2 pr-4 pl-3 duration-300 ${isActive ?"text-orange-700": text-gray-700 }border-b  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                         }>
//                          Contact Us       
//                          </NavLink>
//                          </li>
//                      </ul>

//                 </div>

//              </div>
//            </nav>
//         </header>
//     );
// }

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-indigo-600 text-white px-4 py-2 flex justify-between items-center">
//       <Link to="/" className="text-2xl font-bold">Food App</Link>
//       <ul className="flex space-x-4">
//         <li>
//           <Link to="/" className="hover:text-gray-200">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" className="hover:text-gray-200">
//             About
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="hover:text-gray-200">
//             Contact
//           </Link>
//         </li>
//       </ul>
//       <div className="flex space-x-2">
//         <Link to="/signup" className="px-3 py-2 bg-violet- rounded-md font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//           Sign Up
//         </Link>
//         <Link to="/login" className="px-3 py-2 bg-white rounded-md font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//           Log In
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState,useEffect } from "react";
import {Link,NavLink} from "react-router-dom";
import {BiRestaurant} from "react-icons/bi";
import Button from "../Button/Button.jsx";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";

function Header(){

  const [menu,setMenu] = useState(false);

  const handleChage = ()=>{
    setMenu(!menu);
  }


  return(
    <div className="block w-full">
      <div>
        <div className="flex flex-rows justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          <div class="flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32}/>
            </span>
              <h1 className="font-semibold text-xl">FoodieWeb</h1> 
          </div>
          <nav className="hidden md:flex flex-row item-center gap-8 text-lg font-medium hover:text-brightColor transition-all ">
            <Link
            to="/" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="hover:text-orange-700 transition-all cursor-pointer">
            Home
            </Link>
            <div className="relative group">
              <div className="flex items-center gap-1">
              <Link 
                to="/dishes" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="hover:text-orange-700 transition-all cursor-pointer">
                Dishes
            </Link>
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                <Link 
                  to="dishes" 
                  spy={true} 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-orange-700 transition-all cursor-pointer">
                  Spicy
               </Link>
               </li>
               <li>
               <Link 
                  to="dishes" 
                  spy={true} 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-orange-700 transition-all cursor-pointer">
                  Sweet
               </Link>
               </li>
               <li>
               <Link 
                  to="dishes" 
                  spy={true} 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-orange-700 transition-all cursor-pointer">
                  Tasty
               </Link>
               </li>
               <li>
               <Link 
                  to="dishes" 
                  spy={true} 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-orange-700 transition-all cursor-pointer">
                  Cripsy 
               </Link>

                </li>
              </ul>
            </div>
            
            <Link 
            to="/menu" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="hover:text-orange-700 transition-all cursor-pointer">
            Menu
            </Link>

            <Link 
            to="review" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="hover:text-orange-700 transition-all cursor-pointer">
            Reviews
            </Link>
            <Link to = "/signup">
            <Button title = "Signup" />
            </Link>
            
            <Link to = "/login">
            <Button title = "Login" />
            </Link>
          </nav>
          <div className="md:hidden flex items-center">
            {menu ?
              (<AiOutlineClose size = {25} onClick={handleChage}/>):(
                <AiOutlineMenuUnfold size={25} onClick={handleChage}/>
              )
            }
          </div>
        </div>
        <div className={`${menu ? "translate-x-0": "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
        <Link 
            to="home" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="hover:text-orange-700 transition-all cursor-pointer">
            Home
            </Link>
            <Link 
                to="dishes" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="hover:text-orange-700 transition-all cursor-pointer">
                Dishes
            </Link>
            <Link 
            to="about" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="hover:text-orange-700 transition-all cursor-pointer">
            About
            </Link>
            
            <Link 
            to="menu" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="hover:text-orange-700 transition-all cursor-pointer">
            Menu
            </Link>

            <Link 
            to="review" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="hover:text-orange-700 transition-all cursor-pointer">
            Reviews
            </Link>

            <Button title = "Login"/>
        </div>
      </div>
    </div>
  )
}
export default Header;
