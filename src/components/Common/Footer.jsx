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
    <footer className="w-full mt-20  border-t border-blue-950 px-6  py-8 flex flex-col md:justify-evenly md:flex-row items-start md:items-center gap-8 md:gap-10">

      {/* Logo */}
      <div className="md:border-r md:pr-10 border-blue-950 mx-auto md:mx-0">
        <h1 className="font-bold text-[8vw] md:text-[3vw] text-red-500 tracking-tighter">Navium</h1>
      </div>

      {/* Links and description container */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 w-full">
        <div className='flex gap-10'>
          {/* Social */}
          <div className="flex flex-col mx-auto md:mx-0 text-center">
            <h3 className="text-red-500 font-semibold mb-2 ">Social</h3>
            {['linkedin'].map((item, index) => (
              <a
                key={index}
                href="https://www.linkedin.com/company/72324415/admin/dashboard/"
                target='_blank'
                className="text-sky-900  hover:text-red-500 text-sm md:text-[1vw]"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Sitemap */}
          <div className="flex flex-col mx-auto md:mx-0 text-center">
            <h3 className="text-red-500 font-semibold mb-2">Sitemap</h3>
            {[
              { name: 'About Us', url: '/aboutus' },
              { name: 'E-Library', url: '/library' },
              { name: 'Services', url: '/services' },
              { name: 'Contact', url: '/contact' },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="text-sky-900 hover:text-red-500 text-sm md:text-[1vw]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Company Description */}
        <div className="md:w-3/4 text-zinc-800 text-sm md:text-[1vw] text-center md:text-left md:text-[1.5vw]">
          <p>
            Navium Maritime Shipping Services Pvt Ltd, established in 2020, specializes in
            providing top-notch technical services to global clients in the maritime industry.
          </p>
          <div className="mt-4 w-full text-end font-bold text-zinc-500 text-xs md:text-sm">
            Developed by Aditya
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
