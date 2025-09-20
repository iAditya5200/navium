// import React from 'react'
// import Button from '../Home/Button'
// import { Link, NavLink } from 'react-router-dom'
// import logo from '/src/assets/logoF.png'

// function Navbar() {
//     return (
//         <div className='p-2 max-w-[95vw] justify-between flex items-center h-12 mx-auto bg-zinc-150  rounded-b-xl'>
//             <div className='flex'>
//                 <img className=' h-9 inline mr-1 ' src={logo} alt="" />
//                 <h1 className='leading-none mr-8 font-bold text-[2.5vw] text-red-600'>Navium <p className='text-[0.8vw] italic font-medium '>Beyond Horizon</p></h1>
//             </div>
//             <div className='flex  items-center '>

//                 <div className="text-[1.2vw] flex items-end gap-7">
//                     {["Home", "Services", "About us", "Library"].map((item) => (
//                         <div key={item} className="relative group">
//                             <NavLink
//                                 to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "")}`}
//                                 className={({ isActive }) =>
//                                     isActive
//                                         ? "flex items-center text-red-500 font-semibold"
//                                         : "flex items-center text-zinc-800"
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

//                             {/* Dropdown only for Services */}
//                             {item === "Services" && (
//                                 <div className="absolute left-0 mt-2 hidden group-hover:block z-30 bg-white rounded-md shadow-lg w-40">
//                                     <ul className="py-2 text-sm text-gray-700">
//                                         <li>
//                                             <Link
//                                                 to="/services/web"
//                                                 className="block px-4 py-2 hover:bg-gray-100 border-b border-1  "
//                                             >
//                                                Service 1
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <Link
//                                                 to="/services/mobile"
//                                                 className="block px-4 py-2 hover:bg-gray-100 border-b border-1  "
//                                             >
//                                                  Service 2
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <Link
//                                                 to="/services/design"
//                                                 className="block px-4 py-2 hover:bg-gray-100  "
//                                             >
//                                                  Service 3 
//                                             </Link>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                     <Button />
//                 </div>


//             </div>

//         </div >
//     )
// }

// export default Navbar

import React from 'react'
import Button from './Button'
import { Link, NavLink } from 'react-router-dom'
import logo from '/src/assets/logoF.png'

function Navbar() {
    return (
        <div className="p-2 max-w-[95vw] justify-between flex items-center h-12 mx-auto bg-zinc-150 rounded-b-xl">
            {/* Left: Logo */}
            <div className="flex">
                <img className="h-9 inline mr-1" src={logo} alt="Logo" />
                <h1 className="leading-none mr-8 font-bold text-[2.5vw] text-red-600">
                    Navium
                    <p className="text-[0.8vw] italic font-medium">Beyond Horizon</p>
                </h1>
            </div>

            {/* Right: Nav links */}
            <div className="flex items-center">
                <div className="text-[1.2vw] flex items-end gap-7">
                    {["Home", "Services", "About us", "Library"].map((item) => (
                        <div key={item} className="relative group">
                            <NavLink
                                to={
                                    item === "Home"
                                        ? "/"
                                        : `/${item.toLowerCase().replace(/\s+/g, "")}`
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
                                        {item}
                                    </>
                                )}
                            </NavLink>

                           
                            {item === "Services" && (
                                <div
                                    className="absolute top-full left-0 mt-1 
                                    opacity-0 translate-y-2 
                                    group-hover:opacity-100 group-hover:translate-y-0 
                                    transition-all duration-200 ease-out 
                                    z-30 bg-white rounded-md shadow-lg w-40" >
                                    <ul className="py-2 text-sm text-gray-700">
                                        <li>
                                            <Link
                                                to="/services/web"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Service 1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/services/mobile"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Service 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/services/design"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Service 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            {item === "About us" && (
                                <div
                                    className="absolute top-full left-0 mt-1 
                                    opacity-0 translate-y-2 
                                    group-hover:opacity-100 group-hover:translate-y-0 
                                    transition-all duration-200 ease-out 
                                    z-30 bg-white rounded-md shadow-lg w-40" >
                                    <ul className="py-2 text-sm text-gray-700">
                                        <li>
                                            <Link
                                                to="/services/web"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                               Our Leadership
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/services/mobile"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Blogs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/services/design"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Service 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Navbar
