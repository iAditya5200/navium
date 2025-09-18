import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'

const Library = () => {
  return (
    <div className='min-h-screen w-full font-[Parkinsans]  bg-[#F2F0EA]' >
      <Navbar/>
      <div className=' h-[100vh] w-[100%] bg-blue-950 text-5xl text-zinc-100 justify-center flex items-center'> Videos will be places here</div>
<Footer/>
    </div>
  )
}

export default Library