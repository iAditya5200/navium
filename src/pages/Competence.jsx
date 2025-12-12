import React from 'react'
import Navbar from '../components/Common/Navbar'
import HeadingImg from '../components/Common/HeadingImg'
import Footer from '../components/Common/Footer'
import img from '/src/assets/urbanShip.jpg'
import Button from '../components/Common/Button'

function Competence() {
    return (
        <div className='  w-full font-[Parkinsans] bg-[#F2F0EA] ' >
            < Navbar />
            <HeadingImg h="18vw" url={img} w="90vw" text="Competence management" />



            <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
                <h4 className="text-md font-semibold text-red-600 mb-3 text-center">
                    A Competence Management System (CMS) is a structured framework designed to assess, develop, and maintain the skills and knowledge required for individuals to perform their roles effectively. In the maritime industry, CMS ensures that seafarers meet regulatory standards, company-specific requirements, and operational expectations. By integrating training, performance evaluation, and continuous professional development, CMS enhances safety, compliance, and efficiency onboard vessels. It is a vital tool for fostering a competent and confident workforce while aligning with international maritime standards. 
                </h4>
                <h2 className="text-3xl font-semibold text-sky-950 mb-6 text-center">
                    Key Features of CMS
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                    <li>
                        Unified system to streamline training and assessment procedures.
                    </li>
                    <li>
                        A Single portal which links Rank wise Competency requirements, available trainings to achieve the competency, and a uniform assessment procedure.
                    </li>
                    <li>	Focused on individual training needs.

                    </li>
                    <li> Builds the Bridge between Certification and Performance.
                    </li>
                    <li> Uniform learning platform irrespective of Nationality.
                    </li>
                    <li>
                        Tailor-made courses designed to meet the specific requirements of shipping companies.
                    </li>
                    <li>  	Focus on technical proficiency, safety management, and industry regulations</li>
                </ul>

            </div>
            <div className='w-full flex justify-center '>
                <Button width="15vw" content="Contact-us" link='/contact' />
            </div>

 <div className='w-full m-10 '>
                <Button content="Back to previous menu" link="/services" width="fit-content" />
              </div>
            <Footer />
        </div>
    )
}

export default Competence