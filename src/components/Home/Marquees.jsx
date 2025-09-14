import React from 'react'
import Marquee from './Marquee'

function Marquees() {
    const data = [["MSC",
        "Kline ",
        "Maersk ",
        " Cosco ",
        "Company ",
        "company ",
        " shipper ",
        "example ",
        "pirates"
    ],["MSC",
        "Kline ",
        "Maersk ",
        " Cosco ",
        "Company ",
        "company ",
        " shipper ",
        "example ",
        "pirates"
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