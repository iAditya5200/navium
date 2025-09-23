import React from 'react'
import { motion } from 'motion/react'


const Video = ({ title, url }) => {
    return (
      
            <div className='h-[50vh] overflow-hidden hover:scale-[1.05] rounded  w-[40%] '>
                <div className=' relative h-[100%] w-[100%]  '>
                    <h3 className=' mx-3 my-2 absolute text-xs bg-zinc-700 p-1 rounded font-semibold '>{title}</h3>
                    <motion.video className='object-cover' controls src={url} ></motion.video>
                </div>

            </div>
    
    )
}

export default Video