
import { motion, useScroll } from 'motion/react';
import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa';

function Contact() {
    const { scrollYProgress } = useScroll();
    const [x, setX] = useState()
    
    scrollYProgress.on('change', (latest) => {
        
 
    })
    return (
        <div className='w-[100%] h-[100vh]  gap-20 flex justify-between p-5'>
            <div className={`w-[30%] h-[100%] bg-sky-900 z-1 rounded-xl p-5 ` }> 
                <div className='items-center gap-3 text-zinc-100 flex'>  <FaHome/> <h3 className='text-zinc-100 font-semibold '>Address : </h3> </div>
               
               <p className=' text-xs text-zinc-100'>C-113; 1st Floor; BLK-GH; PKT-4; SEC-29; ROHINI; DELHI</p>
            </div>
            <div className='w-[60%]  h-[100%]  bg-sky-800 rounded-xl '></div>
        </div>
    )
}


export default Contact