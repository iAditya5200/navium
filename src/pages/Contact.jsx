import React from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Contact from "../components/Home/Contact";
import Button from "../components/Common/Button";

function ContactUs() {
  return (
    <div className="min-h-screen w-full font-[Parkinsans] bg-[#F2F0EA] overflow-x-hidden">
      <Navbar />

      {/* 🔹 Page Heading */}
      <div className="w-full text-center mt-20 mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-800 hover:text-zinc-500 transition-colors">
          Contact Us
        </h1>
        <p className="text-zinc-700 mt-4 text-base sm:text-lg px-6 sm:px-0 max-w-2xl mx-auto leading-relaxed">
          Have a question, partnership idea, or need assistance with our maritime
          services? We’d love to hear from you. Fill out the form below or reach
          out directly to our team — we’ll respond as soon as possible.
        </p>
      </div>

      {/* 🔹 Contact Form Section */}
      <div className="w-full flex justify-center mb-20 px-4">
        <div className="w-full max-w-6xl">
          <Contact />
        </div>
      </div>
       <div className='m-5'>
  <Button  content="Back to home" link="/" width="fit-content" />
            </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
