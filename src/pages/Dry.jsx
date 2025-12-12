import React from 'react'
import img8 from '../assets/Sire2.webp'
import Navbar from '../components/Common/Navbar'

import Footer from '../components/Common/Footer'
import img from '/src/assets/sire.jpg'
import Button from '../components/Common/Button'
const Dry = () => {
  return (
    <div className='  w-full font-[Parkinsans] bg-[#F2F0EA] ' >
      < Navbar />

      <div className='w-full md:flex flex-col md:gap-5 my-10 px-5 md:items-center '> <img className='w-full  rounded h-[50vh] object-contain ' src={img8} alt="" /> <h1>
        Prepare • Perform • Excel </h1>
      </div>
      <div>
        <h1 className='text-4xl font-bold text-center my-10'>SIRE 2.0 INSPECTION READINESS SERVICES</h1>
        <p className='text-center'>SIRE 2.0 has transformed the inspection landscape with a stronger focus on Human Element performance, operational discipline, and evidence-based verification. Our specialised services ensure your vessels and crew are fully prepared to meet these elevated expectations—confidently and consistently.</p>
      </div>
      <img className=' h-[60vh] object-fit mx-auto my-4' src={img} alt="" />

      <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">

        <h2 className="text-3xl font-semibold text-sky-950 mb-6 text-center">
          OUR KEY SERVICES
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
          <li>
            Baseline Compliance Assessment
            <p className='text-sm pl-6'>A thorough review of VIQ 2.0 responses, documentation, certificates, and historical performance to map current readiness.</p>
          </li>
          <li>
            Human Element Competency Check
            <p className='text-sm pl-6'>Evaluation of crew behaviour, communication, decision-making, and interview readiness—crucial for SIRE 2.0 success.</p>
          </li>

          <li> Onboard Preparatory Inspection
            <p className='text-sm pl-6'>A complete SIRE 2.0–style inspection covering:</p>
            <ol className='list-decimal pl-9 text-xs my-2'>
              <li>Bridge & Navigation</li>
              <li>Deck & Cargo Systems
                <li>Mooring Stations</li>
                <li>Engine Room</li>
                <li>LSA / FFA</li>
                <li>Environmental & Pollution Controls</li>
              </li>
              <li>Bridge & Navigation</li>
            </ol>
          </li>
          <li>  Evidence & Photo Audit
            <p className='text-sm pl-6'>Creation and validation of OCIMF-compliant photo evidence and document packages.</p>

          </li>
          <li>
            VIQ 2.0 Gap Analysis & Action Plan
            <p className='text-sm pl-6'>Structured corrective actions for technical, procedural, and operational gaps.</p>

          </li>
          <li>  Crew Coaching & Interview Training
            <p className='text-sm pl-6'>Rank-wise readiness sessions, scenario-based questioning, and practical demonstration coaching.</p>
          </li>
          <li> Final Readiness Verification
            <p className='text-sm pl-6'>Superintendent-level confirmation ensuring the vessel is fully prepared for inspection.</p>
          </li>
          <li>   Post-Inspection Support
            <p className='text-sm pl-6'>RCA/CAPA drafting, OCIMF portal submissions, performance monitoring, and continuous improvement guidance.</p>
          </li>
        </ul>

      </div>

      <div className='flex w-full flex-col items-center justify-center'> 
         <h2 className='text-xl font-semibold mx-auto'>WHY CHOOSE US?</h2>
        <ul >
          <li>✔ Expertise in SIRE 2.0 inspections across tanker segments</li>
          <li>✔ Human-element–focused training for stronger crew performance</li>
          <li>✔ Proven gap-closure strategies and documentation accuracy</li>
          <li>✔ End-to-end support—from preparation to post-inspection</li>
✓ Extensive experience with RightShip inspections across multiple bulk carrier segments
✓ Deep practical knowledge of RISQ 3.1 and DryBMS requirements
✓ Strong focus on human-element and operational behaviour
✓ Proven methodology for evidence quality and gap closure
✓ End-to-end support—from preparation to post-inspection follow-up

        </ul>
        </div>

        <div className='flex w-full flex-col items-center justify-center mt-10'> 
          <h1 className='text-xl font-bold '>Make Your Vessel SIRE 2.0 Ready</h1>
         <h2 className='text-l  mx-auto'>Strengthen compliance. Elevate crew competence. Achieve consistent inspection success. </h2>
        </div>

      <div className='w-full flex justify-center my-10'>
        <Button width="fit-content" content="Contact us" link='/contact' />
      </div>
      <div className='w-full  '>
        <Button content="Back to previous menu" link="/services" width="fit-content" />
      </div>
      <Footer />
    </div>

  )
}

export default Dry