import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Clients from '/src/components/About/Clients'
import DetailsCard from '/src/components/About/DetailsCard'

import Leaders from '../components/About/Leaders'

function About() {
    return (
        <div className='min-h-screen w-full font-[Parkinsans]  bg-[#F2F0EA]' >
            <Navbar />
            <DetailsCard />
            <div className='mx-auto w-100 mt-5 font-bold text-3xl text-center text-zinc-800 hover:bg-[#A8D5E3] hover:text-pink-500 rounded-full'>
                What we do
            </div>
            <Clients/>

             <div className='mx-auto w-100 mt-10 font-bold text-3xl text-center text-zinc-800 hover:bg-[#A8D5E3] hover:text-pink-500 rounded-full'>
                Our Leadership 
            </div>
            <Leaders/>
             <Footer/>
            
        </div>
    )
}

export default About
