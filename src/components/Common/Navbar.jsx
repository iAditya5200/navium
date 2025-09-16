import React from 'react'
import Button from '../Home/Button'
import { Link } from 'react-router-dom'
import logo from '/src/assets/newLogo.png'

function Navbar() {
    return (
        <div className='p-2 max-w-190 justify-between flex items-center h-12 mx-auto bg-sky-950  rounded-b-xl'>
            <div className='flex  items-center '>
                <div className='flex'>
                    <img className='w-8 inline ' src={logo} alt="" />
                    <h1 className='leading-none mr-8 font-bold text-xl text-red-600'>Navium</h1>
                </div>
                <div className='text-xs flex items-end gap-7'>
                    {["Home", "Insights", "About us", "", "Library"].map((item, index) => {
                        if (item.length === 0) {
                            return  <Link  to = {`/${item}`} className=' border-l-[1px] h-3 text-red-500'>{item}</Link>
                        }
                        if (index == 0) {
                            return <div className='flex items-center'>
                            <span className='inline-block h-1 w-1 bg-green-600 mx-1  rounded-full'></span>
                            <Link to = {`/`} className=' text-zinc-100'> {item}</Link>
                            </div>
                        }
                        return <Link className='text-zinc-100' to = {`/${item}`}>{item}</Link>
                    })}
                </div>

            </div>
            <Button />
        </div>
    )
}

export default Navbar