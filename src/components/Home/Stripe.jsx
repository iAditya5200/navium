import React from 'react'


function Stripe({ val }) {
  return (
    <div style={{ backgroundImage: `url(${val.url})` }} className='w-[30%] h-[25vw] bg-cover bg-center border-t-[2px] border-zinc-700 mt-10 border-l-[1px] border-r-[1px] border-b-[2px] border-zinc-500 text-zinc-800 py-3 px-4 flex items-end justify-between'>
      <div className='text-yellow-100'>
        <span className='text-[5vw] font-semibold'>{val.number}+</span>
        <h2 className='text-[4vw]'>{val.content}</h2>
      </div>
    </div>
  )
}

export default Stripe