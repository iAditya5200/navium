import React from 'react'
import Marquee from './Marquee'

function Marquees() {
    const data = [[
        "NYK",
        "Berge Bulk ",
        "3digit ",
        "Orion ",
        "Weltech ",
        "SolverMind ",
        "D2M",
        "Edot"
    ],[ "NYK",
        "Berge Bulk ",
        "3digit ",
        "Orion ",
        "Weltech ",
        "SolverMind ",
        "D2M",
        "Edot"
    ]]
    console.log(data)
    return (
        <div className='h-full w-full overflow-hidden relative   '>
            {data.map((elem,index) => {
              return  <Marquee value={elem} dir={index===0 ? "left" : "right"}/>
            })}
        </div>
    )
}

export default Marquees