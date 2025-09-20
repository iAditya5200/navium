import React from 'react'

function Client({val , shifter , index}) {
  return (
    <div>
        <div onMouseEnter={()=>{shifter(index)}}  className= {`mx-auto  h-[15vw] max-w-190 items-center text-zinc-800  flex justify-between`}>
            <span className='flex items-center gap-2 font-semibold text-xl'>{val.name} </span>
            <span className='w-1/3 text-[10px]'>{val.desc}</span>
        </div>
    </div>
  )
}

export default Client