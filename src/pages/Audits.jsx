import React from 'react'
import { FaClipboardCheck, FaHardHat, FaTools, FaShip, FaCogs, FaLaptopCode, FaSearch } from "react-icons/fa";
import img8 from '../assets/audi.jpg'
import Navbar from '../components/Common/Navbar'
import HeadingImg from '../components/Common/HeadingImg'
import Footer from '../components/Common/Footer'
import img from '/src/assets/audi2.jpg'
import Button from '../components/Common/Button';

const Dry = () => {
    const data = [
        {
            name: "Internal Audits",
            data:
                "Our experienced auditors meticulously examine your ship’s Safety Management Systems, evaluating procedures, policies, and processes against industry regulations. Internal audits identify operational gaps, risk factors, and opportunities for continuous improvement, enhancing vessel safety and efficiency.",
            icon: <FaClipboardCheck size={50} />,
            bg: "bg-violet-800"
        },
        {
            name: "Safety Inspections",
            data:
                "Safety is paramount in maritime endeavors. Our safety inspections encompass an in-depth review of safety equipment, navigation systems, firefighting mechanisms, and emergency protocols. These thorough assessments guarantee your ship is fully equipped to manage any scenario, safeguarding crew, vessel, and cargo.",
            icon: <FaHardHat size={50} />,
            bg: "bg-gray-900"
        },
        {
            name: "Technical Inspections",
            data:
                "Operational excellence hinges on technical prowess. Our technical inspections span machinery, propulsion systems, electrical systems, and piping systems. Each component undergoes meticulous evaluation, ensuring optimal functionality, performance, and alignment with industry benchmarks.",
            icon: <FaTools size={50} />,
            bg: "bg-yellow-900"
        },
        {
            name: "Pre-Purchase Inspections",
            data:
                "Investing in a vessel is significant. Our pre-purchase inspections deliver a detailed assessment of a ship’s condition, empowering informed decision-making. Identifying potential risks and offering insights into repairs, we ensure transparency throughout the purchasing process.",
            icon: <FaShip size={50} />,
            bg: "bg-orange-800"
        },
        {
            name: "Engineering Audits",
            data:
                "Efficient engineering underpins ship performance. Our engineering audits provide a comprehensive review of machinery, systems, and equipment. We identify improvement opportunities, confirm regulatory compliance, and optimize vessel efficiency for optimal performance.",
            icon: <FaCogs size={50} />,
            bg: "bg-pink-900"
        },
        {
            name: "Remote Engineering Audits",
            data:
                "In a rapidly evolving world, our remote engineering audits provide real-time insights without sacrificing precision. Leveraging advanced technology, we conduct virtual inspections that deliver expert insights regardless of geographical constraints.",
            icon: <FaLaptopCode size={50} />,
            bg: "bg-green-900"
        },
        {
            name: "Condition Surveys",
            data:
                "Our condition surveys offer a comprehensive evaluation of vessel health, encompassing structural integrity and equipment performance. No aspect is overlooked, enabling proactive issue resolution to enhance vessel longevity and operational reliability.",
            icon: <FaSearch size={50} />,
            bg: "bg-gray-800"
        }
    ];

    return (
        <div className="w-full font-[Parkinsans] bg-[#F2F0EA]">
            <Navbar />
            <HeadingImg h="20vw" url={img} w="90vw" text="Audits" />

            {/* Intro Section */}
            <div className="w-full md:flex md:justify-evenly md:gap-5 my-10 px-5 md:items-center">
                <img
                    className="w-full md:w-[40vw] rounded h-[50vh] object-cover"
                    src={img8}
                    alt="Audit overview"
                />
                <h1 className="mt-5 md:mt-0 md:w-1/2 text-justify leading-relaxed text-gray-700">
                    We recognizes the unwavering dedication required for safety,
                    operational efficiency, and regulatory adherence within the maritime
                    realm. Our comprehensive range of vessel audit and inspection services
                    can be tailored to your operational demands, ensuring your vessels
                    consistently meet the highest standards.
                </h1>
            </div>

            {/* Section Title */}
            <h1 className="text-4xl font-bold text-center my-10">Auditing Services</h1>

            {/* Cards Grid */}
            <div className="flex flex-wrap justify-center gap-10 p-5">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`group ${item.bg} w-full md:w-[28vw] h-[30vw] min-h-[350px] rounded-2xl flex flex-col justify-center items-center text-center p-6 transition-all duration-500 hover:brightness-110 hover:scale-[1.03]`}
                    >
                        {/* Default (icon + title) */}
                        <div className="group-hover:hidden flex flex-col items-center space-y-4">
                            <div className="text-zinc-200">{item.icon}</div>
                            <h1 className="text-2xl font-bold text-zinc-100 capitalize">{item.name}</h1>
                        </div>

                        {/* On Hover (description) */}
                        <p className="hidden group-hover:block text-zinc-200 text-sm leading-relaxed">
                            {item.data}
                        </p>
                    </div>
                ))}
            </div>

            <h1 className="text-4xl font-bold text-center my-10">Get your audit done now !</h1>
            <div className='w-full flex justify-center '>
                <Button width="15vw" content="Get in Touch" link='/contact' />
            </div>

              <div className='w-full m-10 '>
                <Button content="Back to previous menu" link="/services" width="fit-content" />
              </div>
            <Footer />
        </div>
    )
}

export default Dry
