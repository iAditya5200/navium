import React from 'react'
import Navbar from '/src/components/Common/Navbar'
import Work from '/src/components/Home/Work'
import Stripes from '/src/components/Home/Stripes'
import Clients from '/src/components/About/Clients'
import img from '/src/assets/ship.jpg'
import Footer from '/src/components/Common/Footer'

import Marquees from '/src/components/Home/Marquees'

import Contact from '../components/Home/Contact'

function Home() {
  return (
    <div className='min-h-screen  w-full font-[Parkinsans] bg-[#F2F0EA]  '>
      <Navbar />
      <Work />

      <div className='mx-auto w-[100%] mt-25 font-bold text-3xl text-center text-zinc-800   rounded-full'>
        Your Compass to Maritime Innovation.
      </div>
      <div className='flex gap-[5vw] p-[5vw]'>

        <p >
          Navium Maritime Shipping Services Pvt Ltd, established in 2020, specializes in providing top-notch technical services to global clients in the maritime industry.
          Our highly skilled consultants conduct thorough audits of ships, systems, and Owners/Operators offices, offering independent assessments aligned with industry standards.
          <br />
          <br />
          With extensive experience, our consultants perform fleet-wide navigation audits for Oil Tankers, Gas Carriers, large container ships, and bulk carrier Owners. This allows us to provide valuable feedback to improve performance. Clients have praised the effectiveness of our audits, highlighting our meticulous approach and attention to detail.
        </p>
        <img className='w-[40vw] h-[30vw] object-cover' src={img} alt="img" />
      </div>





      <div className='mx-auto w-100 mt-25 font-bold text-3xl text-center text-zinc-800 hover:text-zinc-500  rounded-full'>
        Our Clients
      </div>
      <Marquees />
      <hr />
      <div className='mx-auto w-100 mt-25 font-bold text-3xl text-center text-zinc-800 hover:text-zinc-500  rounded-full'>
        What we do
      </div>
      < p className='text-center my-5'>Navium has been a prominent player in the industry since 2016, providing marine-related technical services to a global clientele. Whether you’re a Dry Fleet or Tanker Fleet operator, at Navium Marine, we tailor our solutions to your unique fleet needs. Our dedicated team of Subject Matter Experts is driven by the goal of optimizing your fleet’s performance.</p>
      <Clients />

      <div className='mx-auto w-100 mt-25 font-bold text-3xl text-center text-zinc-800 hover:text-zinc-500  rounded-full'>
        Our Services
      </div>

      <Marquees />
      <hr />
      <div className='mx-auto w-100 mt-25 font-bold text-3xl text-center text-zinc-800 hover:text-zinc-500  rounded-full'>
        Our Stats
      </div>
      <Stripes />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home