import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import HeadingImg from '../components/Common/HeadingImg'
import img from '/src/assets/urbanShip.jpg'
import img2 from '../assets/learning.jpg'
import img3 from '../assets/management.jpg'
import img4 from '../assets/onboard.jpg'
import img5 from '../assets/mooring.jpg'
import img6 from '../assets/ship.jpg'
import img7 from '../assets/dbs.jpg'
import img8 from '../assets/audi.jpg'
import img9 from '../assets/carbon.jpg'
import Cards from '../components/Common/Cards'

function Services() {
  const data = [{ name: "E-learning", img: img2  , link :"library"},
  { name: "Onboard services", img: img4  , link :"onboard" },
  { name: "Competence management", img: img3  , link :"competence"},
  { name: "Dry BMS", img: img7  , link :"dry"},
  { name: "Rightship", img:img6  , link :"right"} ,
   { name: "Mooring management", img: img5  , link :"mooring"},
    { name: "Auditing", img: img8  , link :"audit" },
     { name: "Decarbonisation", img: img9  , link :""}
  ]
  return (
    <div className='  w-full font-[Parkinsans] bg-[#F2F0EA] ' >
      < Navbar />
      <HeadingImg h="20vw" url={img} w="90vw" text="What we do " />

      <p className='m-5 text-center'>Our team comprises seasoned professionals with extensive experience in the maritime industry. We possess an intricate understanding of tanker and dry bulk operations, enabling us to deliver customized solutions.</p>
      <div className='sm:flex sm:gap-4 sm:flex-wrap '>
        
       {data.map((item , index)=>{
        return ( <Cards key={index} name = {item.name} url={item.img} link = {item.link} />)
       })}
      </div>
    
      <Footer />
    </div>
  )
}

export default Services