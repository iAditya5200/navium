import React from 'react'
import Navbar from '../components/Common/Navbar'
import Clients from '/src/components/Home/Clients'
import DetailsCard from '../components/Home/DetailsCard'

function About() {
    return (
        <div className='min-h-screen w-full font-[Parkinsans]  bg-[#F2F0EA]' >
            <Navbar />
            <DetailsCard />
            <div className='mx-auto w-100 mt-10 font-bold text-3xl text-center text-zinc-800 hover:bg-[#A8D5E3] hover:text-pink-500 rounded-full'>
                What we do
            </div>
            <Clients/>
            
        </div>
    )
}

export default About