import React from 'react'
import img8 from '../assets/inpect.jpg'
import Navbar from '../components/Common/Navbar'
import HeadingImg from '../components/Common/HeadingImg'
import Footer from '../components/Common/Footer'
import right from '../assets/right.webp'
import Button from '../components/Common/Button'
const Dry = () => {
  return (
    <div className='  w-full font-[Parkinsans] bg-[#F2F0EA] ' >
      < Navbar />

      <div className='w-full md:flex md:gap-5 my-10 px-5 md:items-center '> <img className='w-full rounded h-[50vh] object-cover ' src={img8} alt="" /> <h1>
        We understand that the dry bulk industry thrives on safety, compliance, and operational brilliance. We're excited to present our comprehensive range of services, meticulously designed to cater to the unique needs of dry bulk owners and managers. Our forte lies in delivering top-tier RightShip services that will take your vessel operations to unparalleled heights.
      </h1>
      </div>
      <div>
        <h1 className='text-4xl font-bold text-center my-10'>Rightship Services</h1>
        <p className='text-center'>The implementation of Dry Bulk Management Standard (DryBMS) services involves a structured process to ensure that vessels meet the required standards for safety, efficiency, and environmental stewardship. This process typically includes several stages, each serving a specific purpose:</p>
      </div>
      <img className=' h-[60vh] object-fit mx-auto my-4' src={right} alt="" />
      <div className='w-full flex justify-center '>
        <Button width="fit-content" content="Get in Touch" link='/contact' />
      </div>
      <div className='w-full m-10 '>
        <Button content="Back to previous menu" link="/services" width="fit-content" />
      </div>
      <Footer />
    </div>

  )
}

export default Dry