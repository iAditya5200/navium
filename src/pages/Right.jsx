import React from 'react'
import img8 from '../assets/inpect.jpg'
import Navbar from '../components/Common/Navbar'
import HeadingImg from '../components/Common/HeadingImg'
import Footer from '../components/Common/Footer'
import right from '../assets/right.webp'
import Button from '../components/Common/Button'
const Dry = () => {
  return (
    <div className='  w-full font-[Parkinsans] bg-[#F2F0EA] ' >
      < Navbar />

      <div className='w-full md:flex md:gap-5 my-10 px-5 md:items-center '> <img className='w-full rounded h-[50vh] object-cover ' src={img8} alt="" /> <h1>
        <b>Driving Bulk Carrier Safety Performance & Vetting Compliance</b> <br />Bulk carrier vetting has evolved—requiring stronger safety culture, rigorous operational discipline, environmental stewardship, and equipment reliability. Our RightShip Inspection Readiness Services ensure your vessels consistently meet and exceed RISQ 3.1 expectations with confidence and efficiency.
      </h1>
      </div>
      <div>
        <h1 className='text-4xl font-bold text-center my-10'>RIGHTSHIP INSPECTION READINESS SERVICES</h1>
        <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">

          <h2 className="text-3xl font-semibold text-sky-950 mb-6 text-center">
            OUR KEY SERVICES
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>
              RISQ 3.1 Baseline Assessment
              <p className='text-sm pl-6'>A detailed evaluation of vessel condition, documentation, historical inspection findings, DryBMS alignment, and overall vetting readiness.</p>
            </li>
            <li>
              SMS / DryBMS Compliance Review
              <p className='text-sm pl-6'>Ensuring your Safety Management System, checklists, permit-to-work procedures, and deck/engine routines align with RightShip, OCIMF, and industry best practices.</p>
            </li>

            <li> Onboard Pre-Inspection Audit
              <p className='text-sm pl-6'>A full-scope technical and operational inspection covering:</p>
              <ol className='list-decimal pl-9 text-xs my-2'>
                <li>Cargo holds & hatch covers</li>
                <li>Cranes, grabs & deck machinery</li>
                <li>Mooring equipment & arrangements</li>
                <li>Bridge & navigation systems</li>
                <li>Engine room operations</li>
                <li>LSA/FFA readiness</li>
                <li>Pollution prevention systems</li>
                <li> Ballast systems & structural condition</li>
                <li>Bridge & Navigation</li>
              </ol>
            </li>
            <li>  Photo & Evidence Verification
              <p className='text-sm pl-6'>Creation and validation of high-quality, RightShip-compliant photo evidence for all required areas, ensuring clarity, accuracy, and traceability</p>

            </li>
            <li>
              RISQ 3.1 Gap Analysis & Action Plan
              <p className='text-sm pl-6'>Structured corrective actions for technical, procedural, and operational gaps.</p>
              <ol className='list-decimal pl-9 text-xs my-2'>
                <li>Safety gaps</li>
                <li>Maintenance deficiencies</li>
                <li>Documentation inconsistencies</li>
                <li>Operational practices</li>
                <li>Training & human-element performance</li>
              </ol>

            </li>
            <li>  Crew Coaching & Interview Training
              <p className='text-sm pl-6'>Rank-wise practical coaching covering:</p>
              <ol className='list-decimal pl-9 text-xs my-2'>
                <li>Navigation & COLREGS</li>
                <li>Cargo management</li>
                <li>Enclosed space entry</li>
                <li>Pollution control</li>
                <li>Emergency preparedness</li>
                <li>LSA/FFA readiness</li>
                <li>Safety culture & communications</li>
                <li> RightShip inspection interview readiness</li>

              </ol>
            </li>
            <li> RightShip inspection interview readiness
              <ol className='list-decimal pl-9 text-xs my-2'>
                <li>• CAPA development</li>
                <li>RSQ portal documentation</li>
                <li>Closure verification</li>
                <li>Trend monitoring to prevent recurrence</li>
              </ol>
            </li>

          </ul>

        </div>


      </div>


      <img className=' h-[60vh] object-fit mx-auto my-4' src={right} alt="" />


      <div className='flex w-full flex-col items-center justify-center mt-10'>
        <h2 className='text-xl font-semibold mx-auto'>WHY CHOOSE US?</h2>
        <ul >
          <li>✓ Extensive experience with RightShip inspections across multiple bulk carrier segments</li>
          <li>✓ Deep practical knowledge of RISQ 3.1 and DryBMS requirements</li>
          <li>✓ Strong focus on human-element and operational behaviour</li>
          <li>✓ Proven methodology for evidence quality and gap closure</li>
          <li>✓ End-to-end support—from preparation to post-inspection follow-up</li>
        </ul>
      </div>
      <div className='flex w-full flex-col items-center justify-center mt-10'>
        <h1 className='text-xl font-bold '>MAKE YOUR BULK CARRIER RIGHTSHIP READY</h1>
        <h2 className='text-l  mx-auto'>Enhance safety. Strengthen compliance. Achieve superior vetting performance.</h2>
      </div>

      <div className='w-full flex justify-center mt-10'>
        <Button width="fit-content" content="Get in Touch" link='/contact' />
      </div>
      <div className='w-full mt-10 '>
        <Button content="Back to previous menu" link="/services" width="fit-content" />
      </div>
      <Footer />
    </div>

  )
}

export default Dry