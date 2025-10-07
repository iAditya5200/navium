import React from 'react'
import Marquee from './Marquee'
import logo from '/src/assets/logoF.png'
import nyk from '/src/assets/NYK.avif'
import dig from '/src/assets/3digit.png'
import bul from '/src/assets/Bulge.svg'
import or from '/src/assets/Orion.svg'
import wel from '/src/assets/weltech.png'
import sol from '/src/assets/Solverminds.avif'
import D2m from '/src/assets/D2m.png'
import e from '/src/assets/edot.svg'
import z from '/src/assets/zmriner.png'

function Marquees() {
    const data = [[
        { name: "NYK", url: nyk, size: "small" },
        { name: "", url: bul, size: "large" },
        { name: "3Digit", url: dig, size: "small" },
        { name: "", url: or, size: "large" },
        { name: "", url: wel, size: "xlarge" },
        { name: "", url: sol, size: "large" },
        { name: "", url: D2m, size: "medium" },
        { name: "", url: e, size: "medium" },
        { name: "", url: z, size: "xlarge" }
    ]];




    console.log(data)
    return (
        <div className='h-full w-full overflow-hidden relative   '>
            {data.map((elem, index) => {
                console.log(elem)
                return <Marquee value={elem} dir={index === 0 ? "left" : "right"} />
            })}


        </div>

    )
}

export default Marquees