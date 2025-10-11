import React from 'react'
import Navbar from '../components/Common/Navbar'
import HeadingImg from '../components/Common/HeadingImg'
import Footer from '../components/Common/Footer'
import img from '/src/assets/urbanShip.jpg'

function Onboard() {
    console.log('onboard')
    return (
        <div className='  w-full font-[Parkinsans] bg-[#F2F0EA] ' >
            < Navbar />
            <HeadingImg h="20vw" url={img} w="90vw" text="Onboard services" />

            <p className='m-5 text-center' >Our onboard inspectors and trainers, combined with the capabilities of remote inspections, provide a comprehensive approach to maintaining safety, compliance, and operational efficiency in the maritime industry. This integrated method ensures vessels are not only inspected and trained on-site but also supported through innovative remote technologies for continuous oversight and improvement.  </p>

            <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
                <h2 className="text-3xl font-semibold text-sky-950 mb-6 text-center">
                  ONBOARD INSPECTION, TRAINING AND REMOTE INSPECTIONS
                </h2>

                <h4 className="text-xl font-semibold text-red-600 mb-3">
                    1. Onboard Inspectors
                </h4>

                <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                    <li>
                        <span className="font-bold text-sky-900">Detailed Vessel Inspections:</span> Conduct thorough onboard evaluations of operational practices, equipment, and safety systems.
                    </li>
                    <li>
                        <span className="font-bold text-sky-900">Compliance Checks:</span> Ensure adherence to international and company standards, such as IMO conventions, ISM Code, SIRE 2.0, and MARPOL.
                    </li>
                    <li>
                        <span className="font-bold text-sky-900">Non-Conformity Resolution:</span> Identify gaps and assist in implementing corrective and preventive actions.
                    </li>
                </ul>
                <hr className='m-5'/>
                 <h4 className="text-xl font-semibold text-red-600 mb-3">
                    2. Onboard Trainers
                </h4>

                <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                    <li>
                        <span className="font-bold text-sky-900">Practical and Theoretical Training:</span> Deliver training sessions tailored to the ship's operations, covering safety, operational skills, and emergency preparedness.  
                    </li>
                    <li>
                        <span className="font-bold text-sky-900">Drill Supervision :</span> Conduct onboard drills such as fire safety, lifeboat launching, and enclosed space entry.  
                    </li>
                    <li>
                        <span className="font-bold text-sky-900">Skill Enhancement :</span>Focus on role-specific training and soft skills development, ensuring crew members perform effectively and cohesively.  
                    </li>
                </ul>

                <hr className='m-5'/>
                 <h4 className="text-xl font-semibold text-red-600 mb-3">
                  3. Remote Inspections 
                </h4>

                <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                    <li>
                        <span className="font-bold text-sky-900">Real-Time Assessments: </span> Use video conferencing, drones and remote monitoring tools to inspect vessel conditions and operations without physical presence.  
                    </li>
                    <li>
                        <span className="font-bold text-sky-900">Data Analysis: </span> Analyse live feeds, operational data (VDR) and performance metrics to identify issues and offer guidance.  
                    </li>
                   
                </ul>
            </div>
            

            <Footer />
        </div>
    )
}

export default Onboard