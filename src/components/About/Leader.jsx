import React from 'react'
import Button from '../Common/Button'

function Leader({name , designation , post , url}) {
  return (
    <div className='h-[15vw] min-w-[30vw]  p-1 flex flex-col rounded-md items-center justify-center' >
      <div className='w-[100%] h-[60%]  flex gap-5  '>
        <div className=' h-[100%] w-[40%]  overflow-hidden rounded-full '>
          <img className='h-[100%] w-[100%] object-cover' src={url} alt="" />
        </div>
        <div className='w-[50%]'>
          <h1 className='text-2xl font-semibold w-[50%] whitespace-nowrap '>{name}</h1>
          <h5>{designation}</h5>
          <div className='text-xs'>
           {post}
          </div>
          
        </div>

      </div>

     
    </div>
  )
}

export default Leader