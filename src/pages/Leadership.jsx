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

      <HeadingImg h="30vw" w="80vw" url={img} text="" />

      <div className='w-[90vw] mx-auto p-5 h-fit-content md:h-[45vh] my-10'>
       
        <div className='flex items-center gap-5 '><h1 className=' text-2xl inline-block font-semibold leading-none  '>Naveen Chhikara  </h1><div id='Logo' className='text-xl inline-block '> <Link to="https://www.linkedin.com/in/naveen-chhikara-mics-master-mariner-5b892889/" ><FaLinkedin /></Link> </div></div>
         <h2 className='italic text-sm '>Founder and Managing Director</h2>
        <p className='text-sm mt-3'>Capt. Naveen Chhikara, At the helm of the company stands Capt. Naveen — Founder, Managing Director, and a maritime professional whose expertise is rooted in the demanding world of tankers. His journey began as a young seafarer and evolved into a distinguished Master Mariner with a career shaped by global operations and complex challenges.</p>
        <p className='text-sm mt-1'>During his tenure at K Line Ship Management, he immersed himself in vetting, quality assurance, investigations, and shipboard inspections—gaining a 360-degree understanding of operational excellence. Over 20 years, he has led crews, guided ships safely across oceans, and built a reputation for discipline, dedication, and sound judgment. </p>
        <p className='text-sm mt-1'>Specializing in Oil Tankers and Bulk Carriers, he has also expanded his proficiency to Gas Tankers, keeping pace with the maritime industry's direction toward cleaner fuels and sustainable operations. His leadership continues to inspire teams and elevate operational standards.</p>
        
      </div>

      <hr className='w-[90vw] mx-auto' />

      <div className='w-[90vw] mx-auto p-5 h-fit-content md:h-[45vh] my-10'>
        <div className='flex items-center gap-5 '><h1 className=' text-2xl inline-block font-semibold leading-none  '>Puneet Singh </h1><div id='Logo' className='text-xl inline-block '> <Link to="https://www.linkedin.com/in/puneet-singh-24986a29/" ><FaLinkedin /></Link> </div></div>
        <h2 className='italic text-sm '>Co-Founder and Managing Director</h2>
        <p className='text-sm mt-3'>Capt. Puneet Singh serves as the Co-Founder and Managing Director, bringing strategic vision backed by rigorous operational expertise. A Master Mariner with more than 20 years of frontline and managerial experience, he embodies excellence in ship management, tanker operations, and quality governance.</p>
        <p className='text-sm mt-1'>His prior assignments with K Line Ship Management encompassed high-impact roles across vetting, inspections, incident analysis, and Quality Assurance—shaping him into a well-rounded and analytical maritime executive.</p>
        <p className='text-sm mt-1'>Proficient in managing Oil Tanker and upskilled in Gas Tanker operations, he remains at the forefront of evolving maritime trends, sustainability requirements, and next-generation vessel competencies. His leadership continues to drive performance, compliance, and organisational progress.</p>
       

      </div>
      <div className='my-10'>
        <Button content="Back to home" link="/" width="fit-content" />
      </div>
      <Footer />
    </div>
  )
}

export default Leadership