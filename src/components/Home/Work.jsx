import React, { useState } from 'react'
import { motion, useScroll } from "motion/react"
import beach from '/src/assets/Bg-2.mp4'

function Work() {
  const [images, setImages] = useState([{ url: "https://images.unsplash.com/photo-1583857671904-a716bf4ee5d8?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "20%", left: "15%", isActive: false },
  { url: "https://images.unsplash.com/photo-1637708546749-daa14b601ae0?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "51%", left: "5%", isActive: false },
  { url: "https://images.unsplash.com/photo-1631505393083-34c0893e1efd?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "20%", left: "85%", isActive: false },
  { url: "https://images.unsplash.com/photo-1643572549193-46741e42169b?q=80&w=567&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "51%", left: "95%", isActive: false }
  ])
  const { scrollYProgress } = useScroll();

  function showImage(arr) {
    setImages(prev =>
      prev.map((item, index) => {
        return arr.includes(index)
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      })
    )
  }
  scrollYProgress.on('change', (latest) => {


    switch (Math.floor(latest * 100)) {
      case 1:
        showImage([])
        break
      case 2:
        showImage([0, 2])
        break
      case 3:
        showImage([0, 1, 2, 3])
        break


    }
  })

  return (
    <div className=' flex w-[98vw] mx-auto h-[95vh] mt-10 justify-center align-center bg-sky-950 '>
      <div className='  relative w-[100%]  bg-sky-750 font-medium font-[Cookie]  justify-center  text-zinc-100 flex items-center  leading-none'>

        {/* { 
          images.map((item, index) => {
            if (item.isActive) {
              return <img key={index} className="z-25 rounded w-[15vw] h-[15vw] absolute -translate-x-[50%] -translate-y-[50%]" style={{ top: item.top, left: item.left }} src={item.url} alt="img" />
            }
          })
        } */}


        <div className=' overflow-hidden translate-x-0 translate-y-0 z-0  h-[100%]  w-[100%]   absolute  '>
          <video className='h-full w-full object-cover ' autoPlay loop muted
            src={beach} type="video/mp4">
          </video>
        </div>

        <motion.h1 initial={{opacity:0 }} animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }} className=" z-11 absolute left-[23%] text-[20vw] text-center">
          <span>Navium </span>

        </motion.h1>
        <motion.h1 animate={{ opacity: 0 }}
          transition={{ delay: 1, duration: 2 }} className=" z-10 absolute left-[23%] text-[20vw] text-center">
          <span className="text-6xl">Beyond </span>
          <br /> Horizon
        </motion.h1>

      </div>
    </div>

  )
}

export default Work