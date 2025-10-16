import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import DetailsCard from '/src/components/About/DetailsCard'
import img from '/src/assets/leadership.jpg'
import { FaRegEye } from "react-icons/fa"
import { GiCrystalGrowth } from "react-icons/gi"
import Leaders from '../components/About/Leaders'
import Button from '../components/Common/Button'
import img2 from '/src/assets/audi2.jpg'
import img8 from '../assets/inpect.jpg'
import img5 from '../assets/dbs.jpg'

function About() {
    // Array of blogs
    const blogs = [
        {
            title: "VDR Data Analysis",
            subtitle: "Revamp Your Ship/Vessel’s Data by Onboarding VDR Data Analysis with Broadside Marine",
            description: `In today’s constantly evolving maritime industry, the need for accurate and reliable data is more crucial than ever. Vessel operators worldwide are seeking ways to enhance the safety and efficiency of their fleets. One such method is through Voyage Data Recorder (VDR) Analysis, which plays a significant role in improving overall operations. VDR Data Analysis, also known as VDR/SVDR analysis or Remote Navigation Assessment, provides vital insights into navigational safety culture, helps pinpoint pain points, and suggests improvements. In this article, we will explore the various aspects of VDR Data Analysis and how Broadside Marine Pvt. Ltd. can help revamp your ship/vessel’s data.`,
            image: img // optional, replace with real image path
        },
        {
            title: "MEG4",
            subtitle: "Enhancing Mooring Safety and Efficiency with Broadside Marine",
            description: `In the fast-paced world of maritime operations, the safety of crew, cargo, and vessels is paramount. Every responsible ship owner, operator, or port authority seeks to optimize mooring operations while ensuring the highest standards of safety. In this pursuit, the Mooring Equipment Guidelines 4 (MEG4) developed by the Oil Companies International Marine Forum (OCIMF), emerges as a groundbreaking guidance that revolutionizes the landscape of mooring practices not only in Tanker Industry but also in Dry Industry. This article will unveil the power of MEG4 to enhance maritime safety, improved efficiency, and a competitive edge in the industry.`,
            image: img2
        },
        {
            title: "VDR Data Analysis",
            subtitle: "Vessel VDR Data Analysis and the triumphs of Broadside Marine",
            description: `In the maritime industry, safety, compliance, and operational efficiency are paramount. Vessel VDRs (Voyage Data Recorders) have revolutionized the way data is collected and managed onboard ships, serving as essential tools for accident investigation, safety enhancement, and performance optimization. However, their potential goes beyond mere data storage – VDR data analysis has emerged as a game-changer, providing maritime companies with valuable insights that shape strategies, streamline operations, and save lives. In this article, we explore the significance of vessel VDR data analysis and showcase the impressive accomplishments of Broadside Marine, a trailblazing company that has completed over 400+ VDR data analyses.`,
            image: img8
        },
        {
            title: "CARBON - Decarbonization Platform",
            subtitle: "Decarbonizing our Waters: CARBON By Your Side",
            description: `The decarbonization process can be a daunting task. But exciting times lay ahead of us as we bid farewell to the complexities of EU-ETS, CII, and EEXI compliance. Broadside has come up with their latest offering, CARBON – a game-changing, class-approved Software as a Service (SaaS) solution that's reshaping the maritime decarbonization landscape. Decarbonization is a strategic approach aimed at minimizing or eradicating your fleet’s carbon footprint. Broadside's CARBON offers a user-friendly and intuitive platform, breaking down the process into strategic modules that efficiently plan and execute your decarbonization strategies. It not only transforms your fleet’s operations, but also contributes significantly to a more sustainable and cost-effective future.`,
            image: img5
        }
    ];


    return (
        <div className="min-h-screen w-full font-[Parkinsans] bg-[#F2F0EA] overflow-x-hidden">
            <Navbar />
            <DetailsCard />

            {/* Mission & Vision */}
            <div className="w-full my-[12vw] flex flex-col md:flex-row items-center justify-center gap-10 px-6">

                <div className="w-full md:w-[35%] h-fit-content  md:h-[30vw] bg-white shadow-md hover:shadow-xl hover:scale-[1.05] transition-transform p-6 rounded flex flex-col items-center text-center">
                    <GiCrystalGrowth className="text-6xl text-sky-700 mb-4" />
                    <h1 className="text-2xl font-semibold mb-2">Our Mission</h1>
                    <p className="text-gray-700 text-sm md:text-base">
                        To be recognized as a global leader in maritime consultancy and training, driven
                        by professional expertise, a robust financial base, sustainable growth and
                        unwavering customer satisfaction. Our vision is to set the benchmark for
                        excellence and innovation in marine industry including the development of
                        seafarer training programs.

                    </p>
                </div>

                <div className="w-full md:w-[35%] h-fit-content md:h-[30vw] bg-white shadow-md hover:shadow-xl hover:scale-[1.05] transition-transform p-6 rounded flex flex-col items-center text-center">
                    <FaRegEye className="text-6xl text-sky-700 mb-4" />
                    <h1 className="text-2xl font-semibold mb-2">Our Vision</h1>
                    <p className="text-gray-700 text-sm md:text-base">
                        To provide high-quality, comprehensive consultancy services to shipowners and
                        operators, enhancing seafarer skills, safety, and operational efficiency. We aim
                        to foster a culture of continuous learning, compliance, and excellence across the
                        maritime sector.

                    </p>
                </div>
            </div>

            {/* Leadership Section */}
            <div className="mx-auto text-4xl sm:text-5xl mt-10 font-bold text-center text-zinc-800 hover:text-zinc-500 transition-colors">
                Our Leadership
            </div>
            <Leaders />
            {/* Core Values Section */}
            <div className="mx-auto w-full mt-[10vw] px-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-zinc-800 mb-10">
                    Our Core Values
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                    {/* Core Value Card */}
                    <div className="flex-1 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform p-6 text-center">
                        <GiCrystalGrowth className="text-6xl text-sky-700 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            We continuously explore new technologies and solutions to improve maritime efficiency and safety.
                        </p>
                    </div>

                    <div className="flex-1 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform p-6 text-center">
                        <FaRegEye className="text-6xl text-sky-700 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            Ethical practices and transparency guide every decision we make, ensuring trust with our clients and partners.
                        </p>
                    </div>

                    <div className="flex-1 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform p-6 text-center">
                        <GiCrystalGrowth className="text-6xl text-sky-700 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            We strive for operational excellence in all our services, delivering high-quality results consistently.
                        </p>
                    </div>
                </div>
            </div>


            {/* Blogs Section */}
            <div className="mx-auto text-4xl sm:text-5xl mt-[10vw] font-bold text-center text-zinc-800 hover:text-zinc-500 transition-colors">
                Blogs
            </div>

            <div className="w-full flex flex-col items-center px-4 my-10 gap-8">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="relative w-full md:w-[80%] lg:w-[70%] text-zinc-100 rounded-lg overflow-hidden shadow-lg group"
                        style={{ backgroundImage: `url(${blog.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

                        {/* Content */}
                        <div className="relative z-10 p-6 md:p-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-3">{blog.title}</h2>
                            <p className="text-sm md:text-base text-gray-200 mb-6">{blog.description}</p>
                            <Button width="fit-content" content="read more" />
                        </div>
                    </div>
                ))}
            </div>
            <div className='m-5'>
  <Button  content="Back to home" link="/" width="fit-content" />
            </div>
          
            <Footer />
        </div>
    )
}

export default About
