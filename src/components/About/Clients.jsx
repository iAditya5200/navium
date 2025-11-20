import React, { useState } from 'react'
import Client from './Client'
import { motion } from 'motion/react'
import ship1 from '/src/assets/ship1.mp4'
import ship2 from '/src/assets/ship2.mp4'
import ship3 from '/src/assets/Ship3.mp4'
import ship4 from '/src/assets/ship4.mp4'

function Clients() {

    const [shift, setShift] = useState()
    const shifter = (val) => {
      setShift(val * 15)
    }
   
    const data = [{ name: "CDI INSPECTION", desc: "A CDI inspection evaluates a vessel’s safety, cargo-handling standards, environmental practices, and compliance with chemical industry requirements. It ensures ship suitability for chemical transport and enhances operational transparency and quality", logo: "/src/assets/msclogo.webp", bg: "bg-voilet-700" },
    { name: "INTERNAL AUDITS ", desc: "Internal audits assess a vessel’s safety, environmental compliance, documentation, and operational standards. They identify gaps, ensure adherence to ISM/ISPS codes, improve performance, and prepare ships for external inspections. ", logo: "/src/assets/maersk.png", bg: "bg-blue-700" },
    { name: "TRAINING ", desc: "Training develops seafarers’ skills through practical drills, safety procedures, equipment handling, and regulatory courses. It ensures competence, safety compliance, emergency readiness, and efficient operation of ships in various marine conditions.", bg: "bg-voilet-700" },
    { name: "SUPERCARGO", desc: "A supercargo supervises cargo operations on a vessel, ensuring safe loading, stowage, and discharge. They coordinate with crew, port staff, and agents, maintain documentation, prevent cargo damage, and resolve handling issues..", logo: "/src/assets/kline.png", bg: "bg-blue-700" },

    ]
    return (
        <div className='mt-[6vw]  relative '>
            {data.map((elem, index) => {

                return <Client val={elem} shifter={shifter} index={index} />

            })}
            <div className='w-full hidden md:block h-full absolute top-0 pointer-events-none '>
                <motion.div
                    initial={{ y: shift + "vw", }}
                    animate={{ y: shift + "vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: .6 }}
                    className={` h-[15vw] w-[28vw] overflow-hidden left-[30%] rounded   absolute `}>
                    <motion.div
                       transition={{ease :[0.76, 0, 0.24, 1]  , duration : .6}}  initial={{ y: - shift + "vw", }} animate={{ y: -shift + "vw" }} className={`h-[15vw] w-[100%] bg-red-100 -translate-y-${shift}`}>
                        <video className='h-full w-full object-cover' autoPlay loop muted
                            src={ship1} type="video/mp4">
                        </video>

                    </motion.div>
                    <motion.div
                     transition={{ease :[0.76, 0, 0.24, 1]  , duration : .6}}   initial={{ y: -shift + "vw", }} animate={{ y: -shift + "vw" }} className={`h-[15vw] w-[100%]  -translate-y-${shift}`}>
                        <video className='h-full w-full object-cover' autoPlay loop muted
                            src={ship2} type="video/mp4">
                        </video>
                    </motion.div>
                    <motion.div
                       transition={{ease :[0.76, 0, 0.24, 1]  , duration : .6}} initial={{ y: - shift + "vw", }} animate={{ y: -shift + "vw" }} className={`h-[15vw] w-[100%]  -translate-y-${shift}`}>
                        <video className='h-full w-full object-cover' autoPlay loop muted
                            src={ship3} type="video/mp4">
                        </video>
                    </motion.div>
                    <motion.div
                      transition={{ease :[0.76, 0, 0.24, 1]  , duration : .6}} initial={{ y: - shift + "vw", }} animate={{ y: -shift + "vw" }} className={`h-[15vw] w-[100%]  -translate-y-${shift}`}>
                        <video className='h-full w-full  object-cover' autoPlay loop muted
                            src={ship4} type="video/mp4">
                        </video>
                    </motion.div>

                </motion.div>
            </div>
        </div >
    )
}

export default Clients