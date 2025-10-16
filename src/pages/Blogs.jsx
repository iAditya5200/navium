import React from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Button from "../components/Common/Button";

// 🖼 Import your blog images
import img1 from "/src/assets/leadership.jpg";
import img2 from "/src/assets/audi2.jpg";
import img3 from "/src/assets/inpect.jpg";
import img4 from "/src/assets/dbs.jpg";

function Blogs() {
  const blogs = [
    {
      title: "VDR Data Analysis",
      subtitle:
        "Revamp Your Ship/Vessel’s Data by Onboarding VDR Data Analysis with Broadside Marine",
      description: `In today’s constantly evolving maritime industry, the need for accurate and reliable data is more crucial than ever. Vessel operators worldwide are seeking ways to enhance the safety and efficiency of their fleets. One such method is through Voyage Data Recorder (VDR) Analysis, which plays a significant role in improving overall operations. VDR Data Analysis, also known as VDR/SVDR analysis or Remote Navigation Assessment, provides vital insights into navigational safety culture, helps pinpoint pain points, and suggests improvements.`,
      image: img1,
    },
    {
      title: "MEG4",
      subtitle: "Enhancing Mooring Safety and Efficiency with Broadside Marine",
      description: `In the fast-paced world of maritime operations, the safety of crew, cargo, and vessels is paramount. Every responsible ship owner, operator, or port authority seeks to optimize mooring operations while ensuring the highest standards of safety. In this pursuit, the Mooring Equipment Guidelines 4 (MEG4) developed by the Oil Companies International Marine Forum (OCIMF), emerges as a groundbreaking guidance that revolutionizes the landscape of mooring practices not only in Tanker Industry but also in Dry Industry.`,
      image: img2,
    },
    {
      title: "VDR Data Analysis",
      subtitle:
        "Vessel VDR Data Analysis and the triumphs of Broadside Marine",
      description: `In the maritime industry, safety, compliance, and operational efficiency are paramount. Vessel VDRs (Voyage Data Recorders) have revolutionized the way data is collected and managed onboard ships, serving as essential tools for accident investigation, safety enhancement, and performance optimization. However, their potential goes beyond mere data storage – VDR data analysis has emerged as a game-changer, providing maritime companies with valuable insights that shape strategies, streamline operations, and save lives.`,
      image: img3,
    },
    {
      title: "CARBON - Decarbonization Platform",
      subtitle: "Decarbonizing our Waters: CARBON By Your Side",
      description: `The decarbonization process can be a daunting task. But exciting times lay ahead of us as we bid farewell to the complexities of EU-ETS, CII, and EEXI compliance. Broadside has come up with their latest offering, CARBON – a game-changing, class-approved Software as a Service (SaaS) solution that's reshaping the maritime decarbonization landscape.`,
      image: img4,
    },
  ];

  return (
    <div className="min-h-screen w-full font-[Parkinsans] bg-[#F2F0EA] overflow-x-hidden">
      <Navbar />

      {/* 🔹 Page Header */}
      <div className="text-center mt-20 mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-800 hover:text-zinc-500 transition-colors">
          Our Blogs
        </h1>
        <p className="text-zinc-700 mt-4 text-base sm:text-lg px-6 sm:px-0 max-w-2xl mx-auto leading-relaxed">
          Dive into the latest insights and innovations from Navium — where we
          explore technology, safety, and sustainability in the maritime world.
        </p>
      </div>

      {/* 🔹 Blogs List */}
      <div className="w-full flex flex-col items-center px-4 my-10 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative w-full md:w-[80%] lg:w-[70%] text-zinc-100 rounded-lg overflow-hidden shadow-lg group"
            style={{
              backgroundImage: `url(${blog.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

            {/* Content */}
            <div className="relative z-10 p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                {blog.title}
              </h2>
              <h3 className="text-md md:text-lg italic mb-3 text-gray-200">
                {blog.subtitle}
              </h3>
              <p className="text-sm md:text-base text-gray-200 mb-6 line-clamp-4">
                {blog.description}
              </p>
              <Button width="fit-content" content="Read More" />
            </div>
          </div>
        ))}
      </div>
       <div className='m-5'>
  <Button  content="Back to home" link="/" width="fit-content" />
            </div>
      <Footer />
    </div>
  );
}

export default Blogs;
