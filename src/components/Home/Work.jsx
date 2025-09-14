import React, { useState } from 'react'
import { motion, useScroll } from "motion/react"

function Work() {
  const [images, setImages] = useState([{ url: "https://images.unsplash.com/photo-1583857671904-a716bf4ee5d8?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "20%", left: "-56%", isActive: false },
  { url: "https://images.unsplash.com/photo-1637708546749-daa14b601ae0?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "51%", left: "-60%", isActive: false },
  { url: "https://images.unsplash.com/photo-1631505393083-34c0893e1efd?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "20%", left: "156%", isActive: false },
  { url: "https://images.unsplash.com/photo-1643572549193-46741e42169b?q=80&w=567&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "51%", left: "160%", isActive: false }
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
        showImage([0])
        break
      case 5:
        showImage([0, 1])
        break
      case 7:
        showImage([0, 1, 2])
        break
      case 9:
        showImage([0, 1, 2, 3])
        break

    }
  })

  return (
    <div className=' flex w-full mt-10 justify-center '>
      <div className=' relative  max-w-180 text-[25vw] font-medium font-[Cookie] text-zinc-100 leading-none'>
       
          {
            images.map((item, index) => {
              if (item.isActive) {
                return <img key={index} className=" rounded w-[15vw] h-[15vw] absolute -translate-x-[50%] -translate-y-[50%]" style={{ top: item.top, left: item.left }} src={item.url} alt="img" />
              }
            })}
          <div className='rounded overflow-hidden z-0 h-full w-100 absolute -translate-x-[10%] -translate-y-[0%]'>
            <video className='h-full w-full object-cover ' autoPlay loop muted
              src="src/assets/mscVid.mp4" type="video/mp4">
            </video>
          </div>
       <h1 className="relative z-10 text-9xl text-center">
      <span className="text-6xl">Beyond </span>
      <br /> Horizon
    </h1>

      </div>
    </div>

  )
}

export default Work