import { motion } from 'motion/react';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";

function Whatsapp() {
const MotionWhatsapp = motion(FaWhatsapp);
    
    
  return (
      <a
                href="https://api.whatsapp.com/send/?phone=9319603502&text&type=phone_number&app_absent=0"
                target='_blank'
                className="text-sky-900  hover:text-red-500 text-sm md:text-[1vw]"
              >
    <motion.div  animate={{
        rotate: [0, -8, 8, -8, 8, 0],// jiggle
        scale: [1, 1.05, 1], //pulse
        opacity:[0,1]
      }}
      transition={{
        duration: 0.8,      // jiggle kitni der chale
        repeat: Infinity,   // bar-bar
        repeatDelay: 2,     // har jiggle ke baad 3 sec pause
        ease: "easeInOut",
      }}  className='h-[5vw] w-[5vw]  fixed z-10 top-[70%] left-[75%] md:top-[80%] md:left-[90%]'
    ><MotionWhatsapp
        size={90}
        color="green"
          style={{
          filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
        }}
        whileHover={{
         
          filter: "drop-shadow(0 0 12px rgba(0,255,0,0.9))", // 🌟 ICON GLOW HERE
        }}
        transition={{ duration: 0 }}
      />
</motion.div>
</a>
  )
}

export default Whatsapp