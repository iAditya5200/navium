import { motion } from 'motion/react'
import { div } from 'motion/react-client'
import React from 'react'
function Marquee({ value, dir }) {


    return (
        <div className=' w-full h-fit-content flex '>
            <motion.div className='flex bg-sky-950 text-zinc-100 leading-4 mt-2 '
                initial={{ x: dir === 'left' ? "-100%" : "0" }}
                animate={{ x: dir === 'left' ? "0" : "-100%" }}
                transition={{ ease: "linear", duration: 15, repeat: Infinity }} >

                {value.map((elem, index) => {
                    return (<div className='min-w-40 flex text-xl font-semibold items-center flex min-h-20 py-5 px-10'>
                        <span>{elem}</span>
                    </div>)

                })

                }
            </motion.div>
            <motion.div className='flex bg-sky-950 text-zinc-100 leading-4 mt-2 '
                initial={{ x: dir === 'left' ? "-100%" : "0" }}
                animate={{ x: dir === 'left' ? "0" : "-100%" }}
                transition={{ ease: "linear", duration: 15, repeat: Infinity }} >

                {value.map((elem, index) => {
                    return (<div className='min-w-40 flex text-xl font-semibold items-center flex min-h-20 py-5 px-10'>
                        <span>{elem}</span>
                    </div>)

                })

                }
            </motion.div>

        </div>
    )
}

export default Marquee