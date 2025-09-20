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
   
    const data = [{ name: "CDI INSPECTION", desc: "Mediterranean Shipping Company S.A., branded as MSC, is an international shipping line founded by Gianluigi Aponte in Italy in 1970.", logo: "/src/assets/msclogo.webp", bg: "bg-voilet-700" },
    { name: "INTERNAL AUDITS ", desc: "A.P. Møller – Mærsk A/S (Danish: [ˈɛˀ ˈpʰe̝ˀ ˈmølˀɐ ˈmɛɐ̯sk]), usually known simply as Maersk ( English: /mɛərsk/ MAIRSK), is a Danish shipping and logistics company founded in 1904 by Arnold Peter ", logo: "/src/assets/maersk.png", bg: "bg-blue-700" },
    { name: "TRAINING ", desc: "China COSCO Shipping Corporation Limited (branded as COSCO Shipping) is a Chinese state-owned multinational marine transportation service conglomerate, headquartered in Shanghai.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/COSCOCS-ver1.svg/250px-COSCOCS-ver1.svg.png", bg: "bg-voilet-700" },
    { name: "SUPERCARGO", desc: "Kawasaki Kisen Kaisha, Ltd. (川崎汽船株式会社, Kawasaki Kisen Kabushiki gaisha; branded as 'K' Line) is a Japanese transportation company.", logo: "/src/assets/kline.png", bg: "bg-blue-700" },

    ]
    return (
        <div className='mt-5 relative '>
            {data.map((elem, index) => {

                return <Client val={elem} shifter={shifter} index={index} />

            })}
            <div className='w-full h-full absolute top-0 pointer-events-none'>
                <motion.div
                    initial={{ y: shift + "vw", }}
                    animate={{ y: shift + "vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: .6 }}
                    className={` h-[15vw] w-[18vw] overflow-hidden left-[40%] rounded   absolute `}>
                    <motion.div
                       transition={{ease :[0.76, 0, 0.24, 1]  , duration : .6}}  initial={{ y: - shift + "vw", }} animate={{ y: -shift + "vw" }} className={`h-[15vw] w-full  -translate-y-${shift}`}>
                        <video className='h-full object-cover' autoPlay loop muted
                            src={ship1} type="video/mp4">
                        </video>

                    </motion.div>
                    <motion.div
                     transition={{ease :[0.76, 0, 0.24, 1]  , duration : .6}}   initial={{ y: -shift + "vw", }} animate={{ y: -shift + "vw" }} className={`h-[15vw] w-full  -translate-y-${shift}`}>
                        <video className='h-full object-cover' autoPlay loop muted
                            src={ship2} type="video/mp4">
                        </video>
                    </motion.div>
                    <motion.div
                       transition={{ease :[0.76, 0, 0.24, 1]  , duration : .6}} initial={{ y: - shift + "vw", }} animate={{ y: -shift + "vw" }} className={`h-[15vw] w-full  -translate-y-${shift}`}>
                        <video className='h-full object-cover' autoPlay loop muted
                            src={ship3} type="video/mp4">
                        </video>
                    </motion.div>
                    <motion.div
                      transition={{ease :[0.76, 0, 0.24, 1]  , duration : .6}} initial={{ y: - shift + "vw", }} animate={{ y: -shift + "vw" }} className={`h-[15vw] w-full  -translate-y-${shift}`}>
                        <video className='h-full object-cover' autoPlay loop muted
                            src={ship4} type="video/mp4">
                        </video>
                    </motion.div>

                </motion.div>
            </div>
        </div >
    )
}

export default Clients