import { motion } from 'motion/react'
import React from 'react'
function Marquee({ value, dir }) {


    return (
        <div className=' mt-5 w-full h-fit-content flex '>
            <motion.div className='flex bg-zinc-400 text-zinc-900 leading-4 mt-2 '
                initial={{ x: dir === 'left' ? "-100%" : "0" }}
                animate={{ x: dir === 'left' ? "0" : "-100%" }}
                transition={{ ease: "linear", duration: 15, repeat: Infinity }} >

                {value.map((elem, index) => {
                     return (<div className='min-w-45 flex text-l font-semibold items-center justify-evenly flex min-h-20 '>
                        <p>{elem.name}</p>    
                        <img src= {elem.url} style={{ width: elem.w }} className={` w-["${elem.w}"]  object-cover ' alt="logo"`} />
                    </div>)

                })

                }
            </motion.div>
            <motion.div className='flex bg-zinc-400 text-zinc-900 leading-4 mt-2 '
                initial={{ x: dir === 'left' ? "-100%" : "0" }}
                animate={{ x: dir === 'left' ? "0" : "-100%" }}
                transition={{ ease: "linear", duration: 15, repeat: Infinity }} >

                {value.map((elem, index) => {
                    return (<div className='min-w-45  flex text-l text-center font-semibold items-center justify-evenly flex min-h-20  '>
                        <p>{elem.name}</p>
                        <img src={elem.url} style={{ width: elem.w }} className={`  object-cover ' alt="logo"`} alt="logo" />
                    </div>)

                })

                }
            </motion.div>

        </div>
    )
}

export default Marquee