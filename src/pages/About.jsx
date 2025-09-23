import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Clients from '/src/components/About/Clients'
import DetailsCard from '/src/components/About/DetailsCard'
import img from '/src/assets/leadership.jpg'
import HeadingImg from '../components/Common/HeadingImg'
import { FaRegEye } from "react-icons/fa";
import { GiCrystalGrowth } from "react-icons/gi";

import Leaders from '../components/About/Leaders'
import Button from '../components/Common/Button'

function About() {
    return (
        <div className='min-h-screen w-full font-[Parkinsans]  bg-[#F2F0EA]' >
            <Navbar />
            <DetailsCard />
            <div className='mx-auto w-100 mt-5 font-bold text-5xl text-center text-zinc-800 hover:text-zinc-500  rounded-full'>
                What we do
            </div>
            <Clients />
            <div className='h-52 w-full  my-[12vw] flex items-center justify-center gap-[20vw]'>
                <div className='w-[30%] h-full hover:bg-zinc-300 hover:scale-[1.05] p-3 rounded flex flex-col items-center'>
                    <GiCrystalGrowth className='text-7xl' />
                    <h1 className='text-3xl'>Our mission</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, molestiae.</p>
                </div>
                <div className='w-[30%] hover:bg-zinc-300 hover:scale-[1.05] h-full p-3 rounded flex flex-col items-center'>
                    <FaRegEye className='text-7xl' />
                    <h1 className='text-3xl'>Our vision</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, molestiae.</p>
                </div>
            </div>

            <div className='mx-auto text-5xl w-100 mt-10 font-bold  text-center text-zinc-800  hover:text-zinc-500 rounded-full'>
                Our Leadership
            </div>
            <Leaders />

            <div className='mx-auto text-5xl w-100 mt-[10vw] font-bold  text-center text-zinc-800  hover:text-zinc-500 rounded-full'>
                Blogs
            </div>
            <div className='w-full flex flex-col items-center '>
                <div className="w-[90%] h-[21vw] text-zinc-100  bg-cover bg-bottom my-5 rounded text-4xl"  style={{ backgroundImage: `url(${img})` }}>
                    Category 1
                    <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis accusamus, consequuntur officia hic iure blanditiis tempore placeat ullam doloremque eligendi....</p>
                    <Button width="10%" />
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default About
