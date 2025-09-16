import React from 'react'
import Navbar from '/src/components/Common/Navbar'
import Work from '/src/components/Home/Work'
import Stripes from '/src/components/Home/Stripes'
import Clients from '/src/components/Home/Clients'

import Footer from '/src/components/Common/Footer'

import Marquees from '/src/components/Home/Marquees'
import DetailsCard from '../components/Home/DetailsCard'
import Contact from '../components/Home/Contact'

function Home() {
  return (
   <div className='min-h-screen  w-full font-[Parkinsans] bg-[#F2F0EA]  '>
      <Navbar />
      <Work />
      <DetailsCard />
      <Stripes />
      <div className='mx-auto w-100 mt-10 font-bold text-3xl text-center text-zinc-800 hover:bg-[#A8D5E3] hover:text-pink-500 rounded-full'>
       What we do
      </div>
      <Clients />

      
     <div className='mx-auto mt-20 w-100 mt-10 font-bold text-3xl text-center text-zinc-800 hover:bg-[#A8D5E3] hover:text-pink-500 rounded-full '>
      Our Clients
      </div>
      <Marquees />
      <hr />
      <Contact/>
      <Footer />
    </div>
  )
}

export default Home