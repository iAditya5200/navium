import React from 'react'
import Marquee2 from './Marquee2'

function Marquees2() {
    const data = [
        { name: "E-learning", size: "small" },
        { name: "Onboard services", size: "large" },
        { name: "Competence management", size: "large" },
        { name: "Dry BMS", size: "xlarge" },
        { name: "Rightship", size: "large" },
        { name: "Mooring management", size: "medium" },
        { name: "Auditing", size: "medium" },
        { name: "Decarbonisation", size: "xlarge" }
    ];

    return (
        <div className='h-full w-full overflow-hidden relative'>
            <Marquee2 value={data} dir="left" />
        </div>
    )
}

export default Marquees2
