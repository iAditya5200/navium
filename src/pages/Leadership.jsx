import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import img from '/src/assets/leadership.jpg'
import HeadingImg from '../components/Common/HeadingImg'

const Leadership = () => {
  return (
    <div className='min-h-screen  w-full font-[Parkinsans] bg-[#F2F0EA]  '>
      <Navbar />
  
      <HeadingImg h="30vw" w="80vw" url= {img} text="Leadership"/>

      <div className='w-[90vw] mx-auto p-5 h-[40vh] my-10'>
        <h1 className=' text-2xl font-semibold leading-none  '>Punit Singh</h1>
        <h2 className='italic text-sm '>Managing director</h2>
        <p className='text-xs mt-3'>As a founder and Managing Director, Punit, is an astute tanker industry professional, with extensive knowledge of ship management, marine operations and quality assurance.   </p>
        <p className='text-xs mt-1'>A Master Mariner, his previous work experience includes stints with oil majors ExxonMobil and BP, in a variety of roles including vetting, incident investigations, inspections, and Quality Assurance. </p>
        <p className='text-xs mt-1'>Punit commenced his shipping career at sea in 1996 and has sailed for 11 years on a variety of tanker vessels up to the rank of Master Mariner. </p>
       </div>

       <hr className='w-[90vw] mx-auto' />

         <div className='w-[90vw] mx-auto p-5 h-[40vh] my-10'>
        <h1 className=' text-2xl font-semibold leading-none  '>Punit Singh</h1>
        <h2 className='italic text-sm '>Managing director</h2>
        <p className='text-xs mt-3'>As a founder and Managing Director, Punit, is an astute tanker industry professional, with extensive knowledge of ship management, marine operations and quality assurance.   </p>
        <p className='text-xs mt-1'>A Master Mariner, his previous work experience includes stints with oil majors ExxonMobil and BP, in a variety of roles including vetting, incident investigations, inspections, and Quality Assurance. </p>
        <p className='text-xs mt-1'>Punit commenced his shipping career at sea in 1996 and has sailed for 11 years on a variety of tanker vessels up to the rank of Master Mariner. </p>
       </div>
      <Footer />
    </div>
  )
}

export default Leadership