import React from 'react'
import Button from '../Home/Button'
import { Link, NavLink } from 'react-router-dom'
import logo from '/src/assets/logoF.png'

function Navbar() {
    return (
        <div className='p-2 max-w-[80vw] justify-between flex items-center h-12 mx-auto bg-zinc-150  rounded-b-xl'>
            <div className='flex  items-center '>
                <div className='flex'>
                    <img className=' h-5 inline mr-1 ' src={logo} alt="" />
                    <h1 className='leading-none mr-8 font-bold text-xl text-red-600'>Navium</h1>
                </div>
                <div className='text-xs flex  items-end gap-7'>
                    {["Home", "Insights", "About us", "Library"].map((item) => (
                        <div key={item}>
                            <NavLink
                                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "")}`}
                                className={(e)=>{ 
                                return    e.isActive ? "flex items-center text-red-500 font-semibold" : "flex items-center text-zinc-800"
                                }}
                            >
                                {({ isActive }) => (
                                    <>
                                        {isActive && (
                                            <span
                                                className="
                inline-block h-1 w-1 mr-2 rounded-full bg-green-600 
                shadow-[0_0_8px_2px_rgba(34,197,94,0.7)]
              "
                                            ></span>
                                        )}
                                        {item}
                                    </>
                                )}
                            </NavLink>
                        </div>
                    ))}

                </div>

            </div>
            <Button />
        </div >
    )
}

export default Navbar