import React from 'react'
import Navbar from '/src/components/Common/Navbar'
import Work from '/src/components/Home/Work'
import Stripes from '/src/components/Home/Stripes'
import Clients from '/src/components/About/Clients'

import Footer from '/src/components/Common/Footer'

import Marquees from '/src/components/Home/Marquees'

import Contact from '../components/Home/Contact'

function Home() {
  return (
    <div className='min-h-screen  w-full font-[Parkinsans] bg-[#F2F0EA]  '>
      <Navbar />
      <Work />

      <Stripes />


      <div className = 'mx-auto w-100 mt-25 font-bold text-5xl text-center text-zinc-800 hover:text-zinc-500  rounded-full'>
        Our Clients
      </div>
      <Marquees />
      <hr />
      <div className='mx-auto w-100 mt-25 font-bold text-5xl text-center text-zinc-800 hover:text-zinc-500  rounded-full'>
        What we do
      </div>
      <Clients />

      <div className='mx-auto w-100 mt-25 font-bold text-5xl text-center text-zinc-800 hover:text-zinc-500  rounded-full'>
        Our Services 
              </div>
      <Marquees />
      <hr />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home