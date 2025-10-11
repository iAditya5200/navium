// import { a } from 'motion/react-client'
// import React from 'react'
// import { FaArrowRight } from "react-icons/fa6";


// function Button({content , width , link}) {
//   //console.log(width != "" ? 'w-[' + width + ']': 'min-w-22')
//   return (
//     <a href={link}><div   style={width ? { width } : {}}  className={`h-7 px-2 py-1 flex items-center text-[0.8vw] text-zinc-100 bg-red-600 rounded-full font-medium justify-between`}> <span className='whitespace-nowrap'> {content} </span> 
//     <FaArrowRight className='text-[150%]' /></div></a>   
//   )
// }

// export default Button
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Button({ content, width, link = "#", font = "10px" }) {
  return (
    <a href={link}>
      <div
        style={(width ? { width } : {})

        }

        className="h-8 sm:h-9 md:h-10 px-3 sm:px-4 py-1 flex items-center 
                   text-xxs sm:text-xs md:text-sm font-bold 
                   text-white bg-red-600 rounded-full 
                   justify-between transition-all duration-200 hover:bg-red-700"
      >
        <span className="whitespace-nowrap">{content}</span>
        <FaArrowRight className="text-sm sm:text-base md:text-lg ml-2" />
      </div>
    </a>
  );
}

export default Button;
