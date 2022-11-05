import React, { useState } from "react"
import Logo from "../assets/RP2.png"
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <nav className="pb-10">
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-[#ffffff] font-Roboto">
            <div>
                <NavLink to='/'>
                <img src={Logo} alt="Initials" style={{width: '80px'}} />
                </NavLink>
            </div>

            {/* menu */}
            <ul className="hidden md:flex">
                <NavLink to='/'>
                    <li className="hover:text-[#f5ce72]">Home</li>
                </NavLink>
                <NavLink to="/about">
                    <li className="hover:text-[#f5ce72]">About</li>
                </NavLink>
                <NavLink to="/resume">
                <li className="hover:text-[#f5ce72]">Resume</li>
                </NavLink>
                <NavLink to="/contact">
                <li className="hover:text-[#f5ce72]">Contact</li>
                </NavLink>
            </ul>


            {/* hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes/>}
            </div>

            {/* mobile-menu */}
            <ul onClick={handleClick} className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#051f47] text-[#ffffff] font-Roboto flex flex-col justify-center items-center"}>
                <NavLink to='/'>
                    <li className="py-6 text-4xl">Home</li>
                </NavLink>
                <NavLink to='/about'>
                    <li className="py-6 text-4xl">About</li>
                </NavLink>
                <NavLink to='/resume'>
                    <li className="py-6 text-4xl">Resume</li>
                </NavLink>
                <NavLink to='/contact'>
                    <li className="py-6 text-4xl">Contact</li>
                </NavLink>
            </ul>

            {/* social icons */}
            <div className="hidden lg:flex fixed flex-col top-[30%] left-0">
                <ul>
                    <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] hover:text-[#f57272] duration-300">
                        <a className="flex justify-between items-center w-full"
                        href="https://www.linkedin.com/in/rudreshpatel28">
                            LinkedIn <FaLinkedin size={40} />
                        </a>
                    </li>

                    <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] hover:text-[#f57272] duration-300">
                        <a className="flex justify-between items-center w-full"
                        href="https://github.com/patelrudy">
                            Github <FaGithub size={40} />
                        </a>
                    </li>

                    <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] hover:text-[#f57272] duration-300">
                        <a className="flex justify-between items-center w-full"
                        href="mailto:patelrudy@yahoo.com">
                            Email <HiOutlineMail size={40} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar



























// export default function NavBar() {
//     return (
//         <header className="bg-slate-100">
//             <div className="container mx-auto flex justify-between">
//                 <nav className="flex">
//                     <NavLink to="/" exact
//                     // activeClassName="text-red"
//                         className="inline-flex items-center py-4 px-3 mr-4 text-zinc-900 hover:text-orange-700 text-4xl font-Roboto tracking-widest">
//                         Rudresh Patel
//                     </NavLink>
//                     <NavLink to="/about"
//                         className="inline-flex items-center py-2 px-3 text-zinc-900 hover:text-orange-700 font-Roboto">
//                         About
//                     </NavLink>
//                     <NavLink to="/resume"
//                         className="inline-flex items-center py-2 px-3 text-zinc-900 hover:text-orange-700 font-Roboto">
//                         Resume
//                     </NavLink>
//                 </nav>
//                 <div>
                    
//                 </div>
//             </div>
//         </header>
//     )
// }