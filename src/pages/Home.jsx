import React from 'react'
import Navbar from '/src/components/Common/Navbar'
import Work from '/src/components/Home/Work'
import Stripes from '/src/components/Home/Stripes'
import Clients from '/src/components/Home/Clients'

import Footer from '/src/components/Home/Footer'

import Marquees from '/src/components/Home/Marquees'
import DetailsCard from '../components/Home/DetailsCard'
import Contact from '../components/Home/Contact'

function Home() {
  return (
   <div className='min-h-screen w-full font-[Parkinsans] bg-slate-950'>
      <Navbar />
      <Work />
      <DetailsCard />
      <Stripes />
      <div className='mx-auto w-100 mt-10 font-bold text-3xl text-center text-zinc-100'>
       What we do
      </div>
      <Clients />
     <div className='mx-auto w-100 mt-10 font-bold text-3xl text-center text-zinc-100 hover:bg-sky-950 rounded-full'>
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