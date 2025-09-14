import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    const data = [{ content: "Happy customer", number: 120 },
    { content: "Survey Done", number: 200 } ,
     { content: "Audits", number: 1000 } ,

    ]
    return (

        <div className=' flex'>
         {data.map((elem, index) => {
            return <Stripe val = {elem}  />

        })}
        </div>
    )
}

export default Stripes