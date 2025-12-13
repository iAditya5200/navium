import React from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Button from "../components/Common/Button";
import img from '/src/assets/blog1.jpg'
// 🖼 Import your blog images
import img1 from "/src/assets/leadership.jpg";
import img2 from "/src/assets/audi2.jpg";
import img3 from "/src/assets/inpect.jpg";
import img4 from "/src/assets/dbs.jpg";

function Blogs() {
  const blogs = [
          {
              title: " Importance of RightShip Inspections",
              subtitle: "Raising the Bar: Why RightShip Inspections Are Transforming Bulk Carrier Safety & Performance",
              description: `In The global bulk carrier fleet transports the world’s most essential commodities — iron ore, coal, grains, fertilizers, bauxite, and more. Yet, behind every voyage lies a shared responsibility: ensuring these ships meet the highest standards of safety, environmental stewardship, and operational integrity.`,
              image: img,  // optional, replace with real image path 
              linkTO: "https://www.linkedin.com/pulse/raising-bar-why-rightship-inspections-tnjfc?trackingId=rxSLRGr44bQaXsDgJaw%2FMw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_company_posts%3BoD73HakOTs%2B3PnM%2FJvPTFw%3D%3D"
          },
          {
              title: "SIRE 2.0",
              subtitle: "Enhancing Mooring Safety and Efficiency with Broadside Marine",
              description: `The tanker industry is undergoing a major transformation with the rollout of SIRE 2.0 — a next-generation inspection program that puts real-time competency, human-element performance, and risk-based thinking at the centre of operational excellence. As tanker operators adapt to this new framework, the focus is shifting from paperwork to genuine readiness, awareness, and safety leadership on board.`,
              image: 'https://media.licdn.com/dms/image/v2/D5612AQFC2cy8cnV3YA/article-cover_image-shrink_600_2000/B56ZsCsD0hGgAU-/0/1765276665847?e=1767225600&v=beta&t=jZpD7QgpQ8idYAfhYLADWGFiguMYgET6vk8ftVL5W6o' ,
              linkTO : "https://www.linkedin.com/pulse/sire-20-redefining-safety-competence-rdl9c?trackingId=Q8uwvZcyYkAcyb%2Fue%2FM5mg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_company_posts%3B7%2Fm1YZTzTJmgIvRFd%2FV0bw%3D%3D"
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
          <a href={blog.linkTO} target="_blank" className="relative w-full md:w-[80%] lg:w-[70%] text-zinc-100 rounded-lg overflow-hidden shadow-lg group"
            style={{
              backgroundImage: `url(${blog.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
          <div
            key={index}
            
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
              {/* <Button link={blog.linkTO} width="fit-content" content="Read More" /> */}
            </div>
          </div>
          </a>
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
