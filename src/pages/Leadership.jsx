import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import img from '../assets/lighthouse.jpg'
import HeadingImg from '../components/Common/HeadingImg'
import Button from '../components/Common/Button'
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'
const Leadership = () => {
  return (
    <div className='min-h-screen  w-full font-[Parkinsans] bg-[#F2F0EA]  '>
      <Navbar />
  
      <HeadingImg h="30vw" w="80vw" url= {img} text=""/>

      <div className='w-[90vw] mx-auto p-5 h-[40vh] my-10'>
        <h1 className=' text-2xl font-semibold leading-none  '>Naveen Chhikara </h1>
        <h2 className='italic text-sm '> Director</h2>
        <p className='text-sm mt-3'>As a founder and Managing Director, Punit, is an astute tanker industry professional, with extensive knowledge of ship management, marine operations and quality assurance.   </p>
        <p className='text-sm mt-1'>A Master Mariner, his previous work experience includes stints with oil majors ExxonMobil and BP, in a variety of roles including vetting, incident investigations, inspections, and Quality Assurance. </p>
        <p className='text-sm mt-1'>Punit commenced his shipping career at sea in 1996 and has sailed for 11 years on a variety of tanker vessels up to the rank of Master Mariner. </p>
         <div id='Logo' className='text-5xl mt-5'> <Link to = "https://www.linkedin.com/in/naveen-chhikara-mics-master-mariner-5b892889/" ><FaLinkedin /></Link> </div> 
       </div>

       <hr className='w-[90vw] mx-auto' />

         <div className='w-[90vw] mx-auto p-5 h-[40vh] my-10'>
        <h1 className=' text-2xl font-semibold leading-none  '>Puneet Singh</h1>
        <h2 className='italic text-sm '>Director</h2>
        <p className='text-sm mt-3'>As a founder and Director, Punit, is an astute tanker industry professional, with extensive knowledge of ship management, marine operations and quality assurance.   </p>
        <p className='text-sm mt-1'>A Master Mariner, his previous work experience includes stints with oil majors ExxonMobil and BP, in a variety of roles including vetting, incident investigations, inspections, and Quality Assurance. </p>
        <p className='text-sm mt-1'>Punit commenced his shipping career at sea in 1996 and has sailed for 11 years on a variety of tanker vessels up to the rank of Master Mariner. </p>
        <div id='Logo' className='text-5xl mt-5'> <Link to = "https://www.linkedin.com/in/puneet-singh-24986a29/" ><FaLinkedin /></Link> </div>
       </div>
         <div className='m-5'>
  <Button  content="Back to home" link="/" width="fit-content" />
            </div>
      <Footer />
    </div>
  )
}

export default Leadership