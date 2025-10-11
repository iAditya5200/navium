    // // import React from 'react'
    // // import Button from '../Home/Button'
    // // import { Link, NavLink } from 'react-router-dom'
    // // import logo from '/src/assets/logoF.png'

    // // function Navbar() {
    // //     return (
    // //         <div className='p-2 max-w-[95vw] justify-between flex items-center h-12 mx-auto bg-zinc-150  rounded-b-xl'>
    // //             <div className='flex'>
    // //                 <img className=' h-9 inline mr-1 ' src={logo} alt="" />
    // //                 <h1 className='leading-none mr-8 font-bold text-[2.5vw] text-red-600'>Navium <p className='text-[0.8vw] italic font-medium '>Beyond Horizon</p></h1>
    // //             </div>
    // //             <div className='flex  items-center '>

    // //                 <div className="text-[1.2vw] flex items-end gap-7">
    // //                     {["Home", "Services", "About us", "Library"].map((item) => (
    // //                         <div key={item} className="relative group">
    // //                             <NavLink
    // //                                 to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "")}`}
    // //                                 className={({ isActive }) =>
    // //                                     isActive
    // //                                         ? "flex items-center text-red-500 font-semibold"
    // //                                         : "flex items-center text-zinc-800"
    // //                                 }
    // //                             >
    // //                                 {({ isActive }) => (
    // //                                     <>
    // //                                         {isActive && (
    // //                                             <span className="inline-block h-1 w-1 mr-2 rounded-full bg-green-600 shadow-[0_0_8px_2px_rgba(34,197,94,0.7)]"></span>
    // //                                         )}
    // //                                         {item}
    // //                                     </>
    // //                                 )}
    // //                             </NavLink>

    // //                             {/* Dropdown only for Services */}
    // //                             {item === "Services" && (
    // //                                 <div className="absolute left-0 mt-2 hidden group-hover:block z-30 bg-white rounded-md shadow-lg w-40">
    // //                                     <ul className="py-2 text-sm text-gray-700">
    // //                                         <li>
    // //                                             <Link
    // //                                                 to="/services/web"
    // //                                                 className="block px-4 py-2 hover:bg-gray-100 border-b border-1  "
    // //                                             >
    // //                                                Service 1
    // //                                             </Link>
    // //                                         </li>
    // //                                         <li>
    // //                                             <Link
    // //                                                 to="/services/mobile"
    // //                                                 className="block px-4 py-2 hover:bg-gray-100 border-b border-1  "
    // //                                             >
    // //                                                  Service 2
    // //                                             </Link>
    // //                                         </li>
    // //                                         <li>
    // //                                             <Link
    // //                                                 to="/services/design"
    // //                                                 className="block px-4 py-2 hover:bg-gray-100  "
    // //                                             >
    // //                                                  Service 3 
    // //                                             </Link>
    // //                                         </li>
    // //                                     </ul>
    // //                                 </div>
    // //                             )}
    // //                         </div>
    // //                     ))}
    // //                     <Button />
    // //                 </div>


    // //             </div>

    // //         </div >
    // //     )
    // // }

    // // export default Navbar

    // import React from 'react'
    // import Button from './Button'
    // import { Link, NavLink } from 'react-router-dom'
    // import logo from '/src/assets/logoF.png'

    // function Navbar() {
    //     return (
    //         <div className=" max-w-[95vw] sm:p-2 sm:max-w-[95vw] sm:justify-between sm:flex sm:items-center sm:h-12 sm:mx-auto sm:bg-zinc-150 sm: rounded-b-xl">
    //             {/* Left: Logo */}
    //             <div className="flex">
    //                 <img className="h-9 inline mr-1" src={logo} alt="Logo" />
    //                 <h1 className="leading-none mr-8 font-bold text-[2.5vw] text-red-600">
    //                     Navium
    //                     <p className="text-[0.8vw] italic font-medium">Beyond Horizon</p>
    //                 </h1>
    //             </div>

    //             {/* Right: Nav links */}
    //             <div className="flex items-center">
    //                 <div className="text-[1.2vw] flex items-end gap-7">
    //                     {["Home", "Services", "About us", "Library"].map((item) => (
    //                         <div key={item} className="relative group">
    //                             <NavLink
    //                                 to={
    //                                     item === "Home"
    //                                         ? "/"
    //                                         : `/${item.toLowerCase().replace(/\s+/g, "")}`
    //                                 }
    //                                 className={({ isActive }) =>
    //                                     isActive
    //                                         ? "flex items-center text-red-500 font-semibold"
    //                                         : "flex items-center text-zinc-800 hover:text-red-500"
    //                                 }
    //                             >
    //                                 {({ isActive }) => (
    //                                     <>
    //                                         {isActive && (
    //                                             <span className="inline-block h-1 w-1 mr-2 rounded-full bg-green-600 shadow-[0_0_8px_2px_rgba(34,197,94,0.7)]"></span>
    //                                         )}
    //                                         {item}
    //                                     </>
    //                                 )}
    //                             </NavLink>

                            
    //                             {item === "Services" && (
    //                                 <div
    //                                     className="absolute top-full left-0 mt-1 
    //                                     opacity-0 translate-y-2 
    //                                     group-hover:opacity-100 group-hover:translate-y-0 
    //                                     transition-all duration-200 ease-out 
    //                                     z-30 bg-white rounded-md shadow-lg w-48" >
    //                                     <ul className="py-2 text-sm text-gray-700">
    //                                         <li>
    //                                             <Link
    //                                                 to="/services/web"
    //                                                 className="block px-4 py-2 hover:bg-gray-100"
    //                                             >
    //                                                 ONBOARD SERVICES
    //                                             </Link>
    //                                         </li>
    //                                         <li>
    //                                             <Link
    //                                                 to="/services/mobile"
    //                                                 className="block px-4 py-2 hover:bg-gray-100"
    //                                             >
    //                                                COMPETENCE MANAGEMENT SYSTEMS
    //                                             </Link>
    //                                         </li>
    //                                         <li>
    //                                             <Link
    //                                                 to="/services/design"
    //                                                 className="block px-4 py-2 hover:bg-gray-100"
    //                                             >
    //                                              E-LEARNING LIBRARY
    //                                             </Link>
    //                                         </li>
    //                                            <li>
    //                                             <Link
    //                                                 to="/services/design"
    //                                                 className="block px-4 py-2 hover:bg-gray-100"
    //                                             >
    //                                            TRAINING SOFTWARE & CONTENT
    //                                             </Link>
    //                                         </li>
    //                                     </ul>
    //                                 </div>
    //                             )}
    //                             {item === "About us" && (
    //                                 <div
    //                                     className="absolute top-full left-0 mt-1 
    //                                     opacity-0 translate-y-2 
    //                                     group-hover:opacity-100 group-hover:translate-y-0 
    //                                     transition-all duration-200 ease-out 
    //                                     z-30 bg-white rounded-md shadow-lg w-40" >
    //                                     <ul className="py-2 text-sm text-gray-700">
    //                                         <li>
    //                                             <Link
    //                                                 to="/leadership"
    //                                                 className="block px-4 py-2 hover:bg-gray-100"
    //                                             >
    //                                                Our Leadership
    //                                             </Link>
    //                                         </li>
    //                                         <li>
    //                                             <Link
    //                                                 to="/services/mobile"
    //                                                 className="block px-4 py-2 hover:bg-gray-100"
    //                                             >
    //                                                 Blogs
    //                                             </Link>
    //                                         </li>
                                        
    //                                     </ul>
    //                                 </div>
    //                             )}
    //                         </div>
    //                     ))}
    //                     <Button content = "Contact-us " width="100%"   />
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    // export default Navbar
import React, { useState } from "react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
import logo from "/src/assets/logoF.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About us", path: "/aboutus" },
    { name: "Library", path: "/library" },
  ];

  const servicesDropdown = [
    { name: "ONBOARD SERVICES", to: "/onboard" },
    { name: "COMPETENCE MANAGEMENT SYSTEMS", to: "/competence" },
    { name: "E-LEARNING LIBRARY", to: "/library" },
    { name: "TRAINING SOFTWARE & CONTENT", to: "/training" },
  ];

  const aboutDropdown = [
    { name: "Our Leadership", to: "/leadership" },
    { name: "Blogs", to: "/blogs" },
  ];

  return (
    <nav className="bg-white shadow-md px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img className="h-5 sm:h-7 md:h-9" src={logo} alt="Logo" />
          <div className="leading-tight">
            <h1 className="text-[15px] sm:text-2xl font-bold text-red-600">
              Navium
            </h1>
            <p className="text-[8px] sm:text-sm italic font-medium">
              Beyond Horizon
            </p>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-8 text-sm md:text-base relative z-20">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <NavLink
                to={
                  item.name === "Home"
                    ? "/"
                    : `/${item.name.toLowerCase().replace(/\s+/g, "")}`
                }
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center text-red-500 font-semibold"
                    : "flex items-center text-zinc-800 hover:text-red-500"
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="inline-block h-1 w-1 mr-2 rounded-full bg-green-600 shadow-[0_0_8px_2px_rgba(34,197,94,0.7)]"></span>
                    )}
                    {item.name}
                  </>
                )}
              </NavLink>

              {/* Dropdown container with invisible hover bridge */}
              {(item.name === "Services" || item.name === "About us") && (
                <div
                  className={`absolute left-0 top-full pt-2 z-30`}
                  onMouseEnter={() => setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  {/* invisible hover bridge to prevent flicker */}
                  <div className="absolute -top-2 left-0 w-full h-3 bg-transparent"></div>

                  {/* Dropdown menu */}
                  {hoveredMenu === item.name && (
                    <div className="bg-white rounded-md shadow-lg w-64 animate-fade-in">
                      <ul className="py-2 text-sm text-gray-700">
                        {(item.name === "Services"
                          ? servicesDropdown
                          : aboutDropdown
                        ).map((link, idx) => (
                          <li key={idx}>
                            <Link
                              to={link.to}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          <Button content="Contact-us" width="100%" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden mt-4">
          <ul className="flex flex-col gap-3 text-gray-800 text-sm">
            {navItems.map((item) => (
              <div key={item.name}>
                <NavLink
                  to={
                    item.name === "Home"
                      ? "/"
                      : `/${item.name.toLowerCase().replace(/\s+/g, "")}`
                  }
                  className="block py-2 font-bold border-b"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </NavLink>

                {item.name === "Services" && (
                  <ul className="pl-4">
                    {servicesDropdown.map((s, idx) => (
                      <li key={idx}>
                        <Link
                          to={s.to}
                          className="block py-1 text-sm text-gray-600"
                          onClick={() => setMenuOpen(false)}
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {item.name === "About us" && (
                  <ul className="pl-4">
                    {aboutDropdown.map((s, idx) => (
                      <li key={idx}>
                        <Link
                          to={s.to}
                          className="block py-1 text-sm text-gray-600"
                          onClick={() => setMenuOpen(false)}
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Button content="Contact-us" width="100%" />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
