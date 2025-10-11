// import React from 'react'
// import beach from '/src/assets/about.mp4'
// import { motion } from 'motion/react'

// function DetailsCard() {
  
//   return (
//     <div className='min-h-[100vh] w-[100%]  mt-20  overflow-hidden '>

//       <div className='flex flex-col md:flex-row p-10 pb-0 gap-5 md:gap-10'>
//         <motion.div initial={{ x:100 }} animate={{ x:0}} transition={{duration:2 , ease : 'easeOut'}} className=' h-[20vw] w-[40vw] rounded-md overflow-hidden'> <motion.video className=' h-[100%] w-[100%] object-cover 'autoPlay loop muted src={beach}></motion.video></motion.div>
//         <motion.div initial={{opacity:0}}
//         animate={{opacity:1}} transition={{ delay:1 , duration:2}} className=' w-[60%]'>
//           <h1 className=' font-semibold text-5xl'>About us</h1>
//           <p className='text-zinc-800  mt-2 text-left hover:text-shadow-md hover:text-shadow-blue-100  '>
//              Navium Maritime Shipping Services Pvt Ltd, established in 2020, specializes in providing top-notch technical services to global clients in the maritime industry.
//             </p>
//              <p  className='text-zinc-800 mt-3  text-left hover:text-shadow-md hover:text-shadow-blue-100 leading-relaxed '>
//               Our highly skilled consultants conduct thorough audits of ships, systems, and Owners/Operators offices, offering independent assessments aligned with industry standards.           
//                </p>
//         </motion.div>
      
//       </div>
//        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay :2 ,duration:2}} className='text-zinc-800 mt-3 text-center hover:text-shadow-md hover:text-shadow-blue-100  '>
//        Our highly skilled consultants conduct thorough audits of ships, systems, and Owners/Operators offices, offering independent assessments aligned with industry standards.  With extensive experience, our consultants perform fleet-wide navigation audits for Oil Tankers, Gas Carriers, large container ships, and bulk carrier Owners. This allows us to provide valuable feedback to improve performance. Clients have praised the effectiveness of our audits, highlighting our meticulous approach and attention to detail.
//        </motion.p>

//     </div>
//   )
// }

// export default DetailsCard

// // <div className='mx-auto w-100  font-bold text-3xl text-center text-zinc-800 hover:bg-[#A8D5E3] hover:text-pink-500 rounded-full'>
// //         About Navium
// //       </div>
    



// //       <p className='text-zinc-800 mt-5 text-center hover:text-shadow-md hover:text-shadow-blue-100'>
// //         With extensive experience, our consultants perform fleet-wide navigation audits for Oil Tankers, Gas Carriers, large container ships, and bulk carrier Owners. This allows us to provide valuable feedback to improve performance. Clients have praised the effectiveness of our audits, highlighting our meticulous approach and attention to detail.
// //       </p>

// //       <p className='text-zinc-800 mt-5 text-center hover:text-shadow-md hover:text-shadow-blue-100'>
// //         Committed to excellence, we provide objective and independent overviews, enabling clients to understand operational performance, identify strengths, and address areas needing attention. Our dedication to exceptional results has earned us a trusted reputation in the maritime industry.
// //       </p>
// //     </div>

import React from 'react'
import beach from '/src/assets/about.mp4'
import { motion } from 'motion/react'

function DetailsCard() {
  return (
    <div className="min-h-screen w-full mt-20 overflow-hidden px-4 sm:px-8 md:px-12 bg-[#F2F0EA]">
      
      {/* Top Section: Video + Intro */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 pb-10">
        
        {/* Left: Video */}
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full md:w-[45%] h-[50vw] md:h-[25vw] rounded-xl overflow-hidden shadow-lg"
        >
          <motion.video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            src={beach}
          ></motion.video>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="w-full md:w-[50%] text-center md:text-left"
        >
          <h1 className="font-semibold text-4xl sm:text-5xl text-zinc-900 mb-3">
            About Us
          </h1>
          <p className="text-zinc-800 leading-relaxed text-base sm:text-lg mb-3">
            Navium Maritime Shipping Services Pvt Ltd, established in 2020, specializes in providing top-notch technical services to global clients in the maritime industry.
          </p>
          <p className="text-zinc-800 leading-relaxed text-base sm:text-lg">
            Our highly skilled consultants conduct thorough audits of ships, systems, and Owners/Operators offices, offering independent assessments aligned with industry standards.
          </p>
        </motion.div>
      </div>

      {/* Extended Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="text-zinc-800 mt-6 text-center leading-relaxed text-sm sm:text-base md:text-lg max-w-6xl mx-auto"
      >
        Our highly skilled consultants conduct thorough audits of ships, systems, and Owners/Operators offices, offering independent assessments aligned with industry standards.
        With extensive experience, our consultants perform fleet-wide navigation audits for Oil Tankers, Gas Carriers, large container ships, and bulk carrier Owners. This allows us to provide valuable feedback to improve performance.
        Clients have praised the effectiveness of our audits, highlighting our meticulous approach and attention to detail.
      </motion.p>
    </div>
  )
}

export default DetailsCard
