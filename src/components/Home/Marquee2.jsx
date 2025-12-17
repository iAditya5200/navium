import { motion } from 'motion/react'
import React from 'react'
function Marquee({ value, dir }) {


    return (
        <div className=' mt-5 w-full  h-fit-content flex '>
    <motion.div className='flex bg-zinc-400 text-zinc-900 leading-4  '
            initial={{ x: dir === 'left' ? "-100%" : "0" }}
                animate={{ x: dir === 'left' ? "0" : "-100%" }}
                transition={{ ease: "linear", duration: 15, repeat: Infinity }}
                >

                {value.map((elem, index) => {
                    return (<div className='w-[20vw]  flex text-xl relative  group text-center font-semibold items-center justify-evenly flex h-[20vh] md:h-[25vh] m-5  '>
                        <p className='text-center  text-sm  md:text-2xl'>{elem.name}</p>
                        
                    </div>)

                })

                }
            </motion.div>
            <motion.div className='flex bg-zinc-400 text-zinc-900 leading-4  '
            initial={{ x: dir === 'left' ? "-100%" : "0" }}
                animate={{ x: dir === 'left' ? "0" : "-100%" }}
                transition={{ ease: "linear", duration: 15, repeat: Infinity }}
                >

                {value.map((elem, index) => {
                    return (<div className='w-[20vw]  flex text-xl relative  group text-center font-semibold items-center justify-evenly flex h-[20vh] md:h-[25vh] m-5  '>
                        <p className='text-center  text-sm lg:text-2xl'>{elem.name}</p>
                        
                    </div>)

                })

                }
            </motion.div>

        </div>
    )
}

export default Marquee

// import { motion } from 'framer-motion'; // fixed incorrect import path
// import React from 'react';

// function Marquee({ value, dir }) {
//      const sizeClasses = {
//         small: "w-16 sm:w-20 md:w-24",
//         medium: "w-24 sm:w-28 md:w-32",
//         large: "w-32 sm:w-36 md:w-40",
//         xlarge: "w-36 sm:w-44 md:w-52"
//     };
//     return (
//         <div className="mt-5 w-full overflow-hidden bg-zinc-400">
//             {[...Array(2)].map((_, i) => (
//                 <motion.div
//                     key={i}
//                     className="flex gap-[8vw] py-4"
//                     initial={{ x: dir === 'left' ? '-100%' : '0%' }}
//                     animate={{ x: dir === 'left' ? '0%' : '-100%' }}
//                     transition={{ ease: 'linear', duration: 15, repeat: Infinity }}
//                 >
//                     {value.map((elem, index) => (
//                         <div
//                             key={`${elem.name}-${index}`}
//                             className="min-w-[120px] flex flex-col items-center justify-center text-center text-sm sm:text-base font-semibold"
//                         >
//                             {elem.name && <p className="mb-2">{elem.name}</p>}
//                             <img
//                                 src={elem.url}
//                                 alt={elem.name || "logo"}
//                                 className={`object-contain ${sizeClasses[elem.size] || 'w-24'}`}
//                             />
//                         </div>
//                     ))}
//                 </motion.div>
//             ))}
//         </div>
//     );
// }
 
// export default Marquee;
