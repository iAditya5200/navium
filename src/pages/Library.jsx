import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import HeadingImg from '../components/Common/HeadingImg'
import Video from '../components/Common/Video'
import img from '/src/assets/learn.jpg'
//import vdo from '/src/assets/Ship3.mp4'
import SliderComp from '../components/Common/SliderComp'


const Library = () => {
  return (
    <div className='min-h-screen w-full font-[Parkinsans] ' >
      <Navbar />
      <HeadingImg h="30vw" url={img} w="90vw" text="Learning Center" />
      <div className='text-zinc-900 text-center my-10 text-xl md:text-md '>
        An e-learning library is a comprehensive digital repository of training materials,
        courses, and resources designed to facilitate self-paced and flexible learning for
        seafarers. It leverages technology to provide an accessible and scalable solution
        for maritime training needs, enabling seafarers to enhance their knowledge and
        skills anytime, anywhere. </div>
      <h2 className="text-3xl mt-10 font-semibold text-sky-950 mb-6 text-center">
        Key Features of an E-Learning Library
      </h2>

      <ul className="list-disc mx-10 list-inside space-y-2 text-gray-700 leading-relaxed">
        <li>
          Diverse Content.
        </li>
        <li>
          24/7 Accessibility 
        </li>
        <li>
          Customizable Learning Paths
        </li>
        <li>
          Compliance and Certification
        </li>
        <li>
          Uniform learning platform irrespective of Nationality
        </li>
        <li>
          Interactive Assessments
        </li>
        <li> 
           Continuous Updates
        </li>
      </ul>


      <div className='h-fit-content w-[100%] text-5xl text-zinc-900 '>
        <div className='text-3xl w-[100%] text-center my-10'>Enjoy the learning !</div>
        <SliderComp />

      </div>


      <Footer />
    </div>
  )
}

export default Library