import React from 'react'
import Stripe from './Stripe'
import img1 from '/src/assets/ship2.jpg'
import img2 from '/src/assets/ship3.jpg'
import img3 from '/src/assets/ship4.jpg'
function Stripes() {
    const data = [{ content: "Happy customer", number: 120 , url : img1},
    { content: "Survey Done", number: 200  , url : img2 } ,
     { content: "Audits", number: 1000  , url : img3} 

    ]
    return (

        <div className='h-[40%] flex justify-evenly'>
         {data.map((elem, index) => {
            return <Stripe val = {elem}  />

        })}
        </div>
    )
}

export default Stripes