import React from 'react'

function HeadingImg({w , h , url , text}) {
  return (
    <div style={{ width: w, height: h }} className='flex items-center justify-center overflow-hidden rounded relative mx-auto my-2'>
        <img src={url} alt="" className='h-full w-full object-cover ' />
        <h1 className='absolute text-zinc-100 text-[10vw] '>{text}</h1>
    </div>
  )
}

export default HeadingImg