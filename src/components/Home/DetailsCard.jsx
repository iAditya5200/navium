import React from 'react'

function DetailsCard() {
  return (
    <div className='h-fit-content w-[100%]  mt-20  overflow-hidden '>
      <div className='h-[90%] w-[80%] mx-auto '>
        <div className='mx-auto my-10 w-100 mt-10 font-bold text-3xl text-center text-zinc-100 hover:bg-sky-950 rounded-full'>
          About Navium
        </div>
        <p className='text-zinc-100 text-center hover:text-shadow-md hover:text-shadow-zinc-500 " '>Navium Maritime Shipping Services Pvt Ltd, established in 2020, specializes in providing top-notch technical services to global clients in the maritime industry.

        </p>

        <p className='text-zinc-100 mt-5 text-center hover:text-shadow-md hover:text-shadow-zinc-900 '>
          Our highly skilled consultants conduct thorough audits of ships, systems, and Owners/Operators offices, offering independent assessments aligned with industry standards.
        </p>

        <p className='text-zinc-100 mt-5 text-center hover:text-shadow-md hover:text-shadow-zinc-500'>
          With extensive experience, our consultants perform fleet-wide navigation audits for Oil Tankers, Gas Carriers, large container ships, and bulk carrier Owners. This allows us to provide valuable feedback to improve performance. Clients have praised the effectiveness of our audits, highlighting our meticulous approach and attention to detail.
        </p>

        <p className='text-zinc-100 mt-5 text-center hover:text-shadow-md hover:text-shadow-zinc-500'>
          Committed to excellence, we provide objective and independent overviews, enabling clients to understand operational performance, identify strengths, and address areas needing attention. Our dedication to exceptional results has earned us a trusted reputation in the maritime industry.
        </p>
      </div>

    </div>
  )
}

export default DetailsCard