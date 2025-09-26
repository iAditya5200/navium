import React from 'react'
import Marquee from './Marquee'
import logo from '/src/assets/logoF.png'
import nyk from '/src/assets/NYK.avif'
import dig from '/src/assets/3digit.png'
import bul from '/src/assets/Bulge.svg'
import or from '/src/assets/Orion.svg'
 import wel from '/src/assets/weltech.png'
 import sol from '/src/assets/SolverMinds.avif'
import D2m from '/src/assets/D2m.png'
 import e from '/src/assets/edot.svg'
  import z from '/src/assets/zmriner.png'

function Marquees() {
    const data = [
        [{name :"NYK", url : nyk , w : "5vw" },
        {name :"",url : bul , w : "12vw"},
        {name :"3Digit",url : dig , w : "5vw"},
        {name :"",url : or , w : "12vw"},
        {name :"",url : wel , w : "14vw"},
        {name :"",url : sol , w : "12vw"},
        {name :"",url : D2m , w : "10vw"},
        {name :"",url : e , w : "10vw"} ,
         {name :"",url : z , w : "14vw"} 
        ],
          [{name :"NYK", url : nyk , w : "5vw" },
        {name :"",url : bul , w : "12vw"},
        {name :"3Digit",url : dig , w : "5vw"},
        {name :"",url : or , w : "12vw"},
        {name :"",url : wel , w : "14vw"},
        {name :"",url : sol , w : "12vw"},
        {name :"",url : D2m , w : "10vw"},
        {name :"",url : e , w : "10vw"} ,
         {name :"",url : z , w : "14vw"} 
        ]]
    
    
    console.log(data)
    return (
        <div className='h-full w-full overflow-hidden relative   '>
            {data.map((elem,index) => {
                console.log(elem)
              return  <Marquee value={elem} dir={index===0 ? "left" : "right"}/>
            })}
        </div>
    )
}

export default Marquees