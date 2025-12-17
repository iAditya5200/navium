import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import DetailsCard from '/src/components/About/DetailsCard'
import img from '/src/assets/blog1.jpg'
import { FaRegEye } from "react-icons/fa"
import { GiCrystalGrowth } from "react-icons/gi"
import Leaders from '../components/About/Leaders'
import Button from '../components/Common/Button'
// import img2 from '/src/assets/audi2.jpg'
// import img8 from '../assets/inpect.jpg'
// import img5 from '../assets/dbs.jpg'
//import { link } from 'motion/react-client'

function About() {
    // Array of blogs
    const blogs = [
        {
            title: " Importance of RightShip Inspections",
            subtitle: "Raising the Bar: Why RightShip Inspections Are Transforming Bulk Carrier Safety & Performance",
            description: `IThe global bulk carrier fleet transports the world’s most essential commodities — iron ore, coal, grains, fertilizers, bauxite, and more. Yet, behind every voyage lies a shared responsibility: ensuring these ships meet the highest standards of safety, environmental stewardship, and operational integrity.`,
            image: img,  // optional, replace with real image path 
            linkTO: "https://www.linkedin.com/pulse/raising-bar-why-rightship-inspections-tnjfc?trackingId=rxSLRGr44bQaXsDgJaw%2FMw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_company_posts%3BoD73HakOTs%2B3PnM%2FJvPTFw%3D%3D"
        },
        {
            title: "SIRE 2.0",
            subtitle: "Enhancing Mooring Safety and Efficiency with We Marine",
            description: `The tanker industry is undergoing a major transformation with the rollout of SIRE 2.0 — a next-generation inspection program that puts real-time competency, human-element performance, and risk-based thinking at the centre of operational excellence. As tanker operators adapt to this new framework, the focus is shifting from paperwork to genuine readiness, awareness, and safety leadership on board.`,
            image: 'https://media.licdn.com/dms/image/v2/D5612AQFC2cy8cnV3YA/article-cover_image-shrink_600_2000/B56ZsCsD0hGgAU-/0/1765276665847?e=1767225600&v=beta&t=jZpD7QgpQ8idYAfhYLADWGFiguMYgET6vk8ftVL5W6o' ,
            linkTO : "https://www.linkedin.com/pulse/sire-20-redefining-safety-competence-rdl9c?trackingId=Q8uwvZcyYkAcyb%2Fue%2FM5mg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_company_posts%3B7%2Fm1YZTzTJmgIvRFd%2FV0bw%3D%3D"
        },
        
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
                    <a href={blog.linkTO} target="_blank" className="relative w-full md:w-[80%] lg:w-[70%] text-zinc-100 rounded-lg overflow-hidden shadow-lg group"
                        style={{ backgroundImage: `url(${blog.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                        <div
                            key={index}

                        >
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

                            {/* Content */}
                            <div className="relative z-10 p-6 md:p-10">
                                <h2 className="text-2xl md:text-3xl font-bold mb-3">{blog.title}</h2>
                                <p className="text-sm md:text-base text-gray-200 mb-6">{blog.description}</p>
                                <Button link="/blogs" width="fit-content" content="read more" />
                            </div>

                        </div>
                    </a>
                ))}
            </div>
            <div className='m-5'>
                <Button content="Back to home" link="/" width="fit-content" />
            </div>

            <Footer />
        </div>
    )
}

export default About
