import React from 'react'

import Button from './Button'


export default function Cards({ name, url , link }) {
  return (

    <div style={{ backgroundImage: `url(${url})` }} className={`w-[80%] h-[30vh] bg-red-100 hover:shadow-2xl hover:scale-[1.01] flex items-end justify-center mx-auto sm:w-[30%] bg-center overflow-hidden rounded my-10 bg-cover`}>

      <div className='font-bold text-zinc-100 flex flex-col items-center p-1  w-full text-center text-xl md:text-[1.5vw]'>      {name}
        <Button width="fit-content" content="know more " link =  {link}/>
      </div>

    </div>

  )
}
