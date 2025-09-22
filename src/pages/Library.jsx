import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import HeadingImg from '../components/Common/HeadingImg'
import Video from '../components/Common/Video'
import img from '/src/assets/learn.jpg'
import vdo from '/src/assets/Ship3.mp4'

const Library = () => {
  return (
    <div className='min-h-screen w-full font-[Parkinsans] ' >
      <Navbar/>
      <div className='h-fit-content w-[100%] text-5xl text-zinc-100 justify-center  items-center'>
        <HeadingImg h="30vw" url={img} w="90vw" text= "Learning Center" />

        <h2 className="text-zinc-900 w-full text-center mt-10 mb-3">Category 1</h2>
        <div className='flex gap-10 w-full h-full items-center justify-center flex-wrap'>
        <Video title = "Title will be here" url = {vdo}/>
        <Video title = "Title will be here" url = {vdo}/>
        </div>
        <h2 className="text-zinc-900 w-full text-center mt-10 mb-3">Category 2</h2>
        <div className='flex gap-10 w-full h-full items-center justify-center flex-wrap'>
        <Video title = "Title will be here" url = {vdo}/>
        <Video title = "Title will be here" url = {vdo}/>
        </div>
        <h2 className="text-zinc-900 w-full text-center mt-10 mb-3">Category 3</h2>
        <div className='flex gap-10 w-full h-full items-center justify-center flex-wrap'>
        <Video title = "Title will be here" url = {vdo}/>
        <Video title = "Title will be here" url = {vdo}/>
        </div>
         </div>
<Footer/>
    </div>
  )
}

export default Library