import React from 'react'
import img8 from '../assets/audi.jpg'
import Navbar from '../components/Common/Navbar'
import HeadingImg from '../components/Common/HeadingImg'
import Footer from '../components/Common/Footer'
import img from '/src/assets/drybms.webp'
import Button from '../components/Common/Button'
const Dry = () => {
  return (
    <div className='  w-full font-[Parkinsans] bg-[#F2F0EA] ' >
      < Navbar />

      <div className='w-full md:flex md:gap-5 my-10 px-5 md:items-center '> <img className='w-full rounded h-[50vh] object-cover ' src={img8} alt="" /> <h1>
        We understand the rigorous demands of the dry bulk industry for unwavering safety, operational brilliance, and environmental responsibility. Our commitment shines through our comprehensive array of services, meticulously designed to cater to your specific requirements. Our forte lies in providing unparalleled DryBMS assessment, preparatory, upgradation, and closure follow-up services that will propel your operations to unprecedented heights.</h1>
      </div>
      <div>
        <h1 className='text-4xl font-bold text-center my-10'>DryBMS Services</h1>
        <p className='text-center'>The implementation of Dry Bulk Management Standard (DryBMS) services involves a structured process to ensure that vessels meet the required standards for safety, efficiency, and environmental stewardship. This process typically includes several stages, each serving a specific purpose:</p>
      </div>
      <img className=' h-[60vh] object-fit mx-auto my-4' src={img} alt="" />
      <div className='w-full flex justify-center '>
        <Button width="15vw" content="Get DryScore" link='/contact' />
      </div>
      <div className='w-full m-10 '>
        <Button content="Back to previous menu" link="/services" width="fit-content" />
      </div>
      <Footer />
    </div>

  )
}

export default Dry