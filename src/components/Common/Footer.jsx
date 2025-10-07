// import React from 'react'

// function Footer() {
//     return (
//         <div className=' border-t-[1px] border-blue-950 w-full mt-20 rounded px-10 flex items-center gap-10 '>
//             <div className=''>
//                 <h1 className='border-r-[1px]  border-blue-950  pr-10 font-bold text-[6vw] text-red-500 mr-15 tracking-tighter'>Navium</h1>
//             </div>
//             <div className='pt-5 flex gap-15 h-full items-baseline'>
//                 <div className='flex-col'>
//                     <h3 className='text-red-500'>Social</h3>
//                     {['linkedin'].map((item, index) => {
//                         return <a className='block text-[1vw] text-sky-900 hover:text-red-500' href={item}>{item}</a>
//                     })}
//                 </div>
//                 <div className='flex-col'>
//                     <h3 className='text-red-500'>Sitemap</h3>
//                     {['About-us', 'e-library', 'services'   , 'contact'].map((item, index) => {
//                         return <a className='block text-[1vw] text-sky-900 hover:text-red-500' href="">{item}</a>
//                     })}
//                 </div>
//                 <div className='w-1/2 text-zinc-800 text-[1vw] mt-5'>
//                     Navium Maritime Shipping Services Pvt Ltd, established in 2020, specializes in providing top-notch technical services to global clients in the maritime industry
//                     <div className='mt-5 mr-10 w-full text-end font-bold text-zinc-500'>
//                         Developed by Aditya 
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer

import React from 'react';

function Footer() {
    return (
        <footer className="w-full border-t border-blue-950 mt-20 px-5 sm:px-10 py-10 bg-white text-sm sm:text-base">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                {/* Logo Section */}
                <div className="w-full lg:w-1/4 text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-500 tracking-tighter">
                        Navium
                    </h1>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
                    
                    {/* Social Links */}
                    <div>
                        <h3 className="text-red-500 font-semibold mb-2">Social</h3>
                        {['LinkedIn'].map((item, index) => (
                            <a
                                key={index}
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit our ${item}`}
                                className="block text-sky-900 hover:text-red-500 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Sitemap Links */}
                    <div>
                        <h3 className="text-red-500 font-semibold mb-2">Sitemap</h3>
                        {['About Us', 'e-Library', 'Services', 'Contact'].map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="block text-sky-900 hover:text-red-500 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Company Info */}
                    <div className="text-zinc-800">
                        <p>
                            Navium Maritime Shipping Services Pvt Ltd, established in 2020, specializes in
                            providing top-notch technical services to global clients in the maritime industry.
                        </p>
                        <div className="mt-5 text-right font-semibold text-zinc-500 text-sm">
                            Developed by Aditya
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
