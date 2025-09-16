import React from 'react'

function Footer() {
    return (
        <div className=' border-y-[1px] border-blue-950 w-full mt-20 rounded px-10 flex items-center gap-10 '>
            <div className=''>
                <h1 className='border-r-[1px]  border-blue-950  pr-10 font-bold text-[6vw] text-red-500 mr-15 tracking-tighter'>Navium</h1>
            </div>
            <div className='pt-5 flex gap-15 h-full items-baseline'>
                <div className='flex-col'>
                    <h3 className='text-red-500'>Social</h3>
                    {[, 'linkedin', 'facebook'].map((item, index) => {
                        return <a className='block text-[1vw] text-sky-900 hover:text-red-500' href="">{item}</a>
                    })}
                </div>
                <div className='flex-col'>
                    <h3 className='text-red-500'>Sitemap</h3>
                    {['career', 'e-library', 'about-us', 'contact'].map((item, index) => {
                        return <a className='block text-[1vw] text-sky-900 hover:text-red-500' href="">{item}</a>
                    })}
                </div>
                <div className='w-1/2 text-zinc-800 text-[1vw] mt-5'>
                    Navium Maritime Shipping Services Pvt Ltd, established in 2020, specializes in providing top-notch technical services to global clients in the maritime industry
                    <div className='mt-5 mr-10 w-full text-end font-bold text-zinc-500'>
                        Developed by Aditya 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer