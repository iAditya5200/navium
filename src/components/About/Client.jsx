import React from 'react'

function Client({val , shifter , index}) {
  return (
    <div>
        <div onMouseEnter={()=>{shifter(index)}}  className= {`  mx-auto bg-blue-100 my-4 md:my-0 md:bg-transparent h-[15vw] w-[90%] items-center text-zinc-800  flex justify-center md:justify-between`}>
            <span className='flex items-center gap-2 font-semibold text-2xl md:text-xl'>{val.name} </span>
            <span className='w-1/3 hidden md:block text-[10px]'>{val.desc}</span>
        </div>
    </div>
  )
}

export default Client