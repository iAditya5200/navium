
import { motion, useScroll } from 'motion/react';
import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import EnquiryForm from './EnquiryForm';

function Contact() {
    const { scrollYProgress } = useScroll();
    const [x, setX] = useState()

    scrollYProgress.on('change', (latest) => {


    })
    return (
        <div  className=' mt-20 w-[100%] h-[100vh]  overflow-hidden gap-10 flex justify-between p-5'>
            <motion.div animate className={`w-[30%] h-[100%] bg-[#A8D5E3] z-1 rounded-xl p-5`}>
                <div className='items-center gap-3 text-zinc-800 flex '>  <FaHome />
                    <h3 className='text-zinc-800 font-semibold '>Address : </h3>
                </div>
                <p className=' text-xs text-zinc-800'>C-113, 1st Floor, BLK-GH, PKT-4, SEC-29, ROHINI, DELHI</p>
                <div className='items-center gap-3 text-zinc-800 flex mt-1 border-t  border-blue-900'>  <IoMdCall /><h3 className='text-zinc-800 font-semibold '>Call Us : </h3> </div>

                <p className=' text-xs text-zinc-800'>+91-9319603502 / 9619661049 / 9582361578 <br /> Landline : +91-11-71862678</p>
                <div className='items-center gap-3 text-zinc-800 flex mt-1 border-t  border-blue-900'>  <MdEmail /><h3 className='text-zinc-800 font-semibold '>Write : </h3> </div>

                <p className=' text-xs text-zinc-800'>operations@naviumship.com</p>

                <div className='items-center  text-zinc-800 flex flex-col mt-1   mt-3 relative '>
                    <div className='text-xs absolute text-zinc-100 font-bold'>locate us :</div>
                    <iframe className=' w-full h-full rounded '

                        referrerpolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA">
                    </iframe>

                </div>


            </ motion.div>

            <div className='w-15 h-full '><div className='text-5xl  font-bold text-blue-950 text-center'>C</div>
                <div className='text-5xl  font-bold text-blue-950 text-center'> o</div>
                <div className='text-5xl  font-bold text-blue-950 text-center'> n</div>
                <div className='text-5xl  font-bold text-blue-950 text-center'> t</div>
                <div className='text-5xl  font-bold text-blue-950 text-center'> a</div>
                <div className='text-5xl  font-bold text-blue-950 text-center'> c</div>
                <div className='text-5xl  font-bold text-blue-950 text-center'> t</div>
                <div className='text-5xl  font-bold text-blue-950 text-center'> s</div> </div>
            <div className='w-[60%]  h-[100%] rounded-xl overflow-hidden p-2 '> <h3 className=' font-bold text-xl text-zinc-800 ml-10 mb-3'>Have any enquiry ?</h3><EnquiryForm /></div>
        </div>
    )
}


export default Contact