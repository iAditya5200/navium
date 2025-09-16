import React from 'react'

function Stripe( {val}) {
  return (
    <div className='w-[33.32%] border-t-[2px] border-zinc-700 mt-10 border-l-[1px] border-r-[1px] border-b-[2px] border-zinc-500 text-zinc-800 py-3 px-4 flex items-center justify-between'>
        <span className='text-[3vw] font-semibold'>{val.number}+</span>
        <span className='text-[2vw]'>{val.content}</span>
    </div>
  )
}

export default Stripe