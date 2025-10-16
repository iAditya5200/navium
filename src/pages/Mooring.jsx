import React from 'react'
import img8 from '../assets/mooring2.jpg'
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
                Our suite of Mooring Management Services, certified by LR, has been thoughtfully crafted to equip you with the expertise, resources, and tactics necessary for mastering mooring procedures while meeting the rigorous standards of renowned self-assessment programs like DryBMS & TMSA, as well as esteemed vetting protocols such as RightShip & SIRE. Whether you oversee a tanker fleet or a dry bulk fleet or a container fleet, our services can be tailored to perfectly match your unique operational needs.
                MSC.1/Circ. 1620 and MEG4 Advisory
                We specialize in navigating the complexities of IMO's MSC.1/Circ. 1620 and OCIMF's MEG4 guidelines. Our seasoned professionals will expertly guide you through these intricacies, ensuring your mooring practices harmoniously align with the latest industry benchmarks.
                Mooring System Management Plans
                A robust Mooring System Management Plan is the cornerstone of safe and efficient mooring operations. Our experts collaborate closely with your team to craft comprehensive plans encompassing every facet of mooring operations.

            </h1>
            </div>
            <div>
                <h1 className='text-4xl font-bold text-center my-10'>Mooring management</h1>

            </div>
            <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">

                <h2 className="text-3xl font-semibold text-sky-950 mb-6 text-center">
                    MSC.1/Circ. 1620 and MEG4 Advisory
                </h2>
                <p className="mx-auto text-center">  We specialize in navigating the complexities of IMO's MSC.1/Circ. 1620 and OCIMF's MEG4 guidelines. Our seasoned professionals will expertly guide you through these intricacies, ensuring your mooring practices harmoniously align with the latest industry benchmarks.</p>


            </div>
            <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">

                <h2 className="text-3xl font-semibold text-sky-950 mb-6 text-center">
                    Mooring System Management Plans
                </h2>
                <p className="mx-auto text-center">  A robust Mooring System Management Plan is the cornerstone of safe and efficient mooring operations. Our experts collaborate closely with your team to craft comprehensive plans encompassing every facet of mooring operations.</p>


            </div>
            <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">

                <h2 className="text-3xl font-semibold text-sky-950 mb-6 text-center">
                    Line Management Plans
                </h2>
                <p className="mx-auto text-center">  Efficient mooring commences with meticulous line management. Our Line Management Plans deliver precise directives for selecting, inspecting, and maintaining mooring lines. This approach ensures optimal and safe performance during every mooring operation.</p>


            </div>
            <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">

                <h2 className="text-3xl font-semibold text-sky-950 mb-6 text-center">
                    Live Mooring Audits
                </h2>
                <p className="mx-auto text-center">Experience real-time assessment of your mooring operations through our Live Mooring Audits. Our experts will give you on-board evaluations of mooring practices, equipment usage, and crew performance, facilitating immediate feedback for continuous improvement.​</p>


            </div>
            <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">

                <h2 className="text-3xl font-semibold text-sky-950 mb-6 text-center">
                    Engineering & Strength Assessments
                </h2>
                <p className="mx-auto text-center">  Enhance the reliability and safety of your mooring equipment with our Engineering & Strength Assessments. Our accomplished team meticulously analyzes your mooring equipment, identifying potential vulnerabilities to offer tailored solutions to optimize overall performance.</p>


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

export default Dry