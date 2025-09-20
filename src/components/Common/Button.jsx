import { a } from 'motion/react-client'
import React from 'react'
import { MdSubdirectoryArrowRight } from 'react-icons/md'

function Button({content , width , link}) {
  //console.log(width != "" ? 'w-[' + width + ']': 'min-w-22')
  return (
    <a href={link}><div   style={width ? { width } : {}}  className={`h-5 px-2 py-1 flex items-center text-[0.8vw] text-zinc-100 bg-red-600 rounded-full font-medium justify-between`}> <span className='whitespace-nowrap'> {content} </span> 
    <MdSubdirectoryArrowRight /></div></a>   
  )
}

export default Button