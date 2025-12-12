    import React from 'react'
    import Marquee2 from './Marquee2'

    function Marquees2() {
        const data = [
            ,,, ,, , , ,, , 
            { name: "Internal Audits", size: "small" },
            { name: "Safety Inspections", size: "large" },
            { name: "Technical Inspections", size: "large" },
            { name: " Pre-Purchase Inspections", size: "xlarge" },
            { name: "Pre-RightShip", size: "large" },
            { name: "Pre-Sire2.0 inspection", size: "medium" },
            { name: "Remote Nav Audits", size: "medium" },
            { name: " Remote Engineering Audits", size: "xlarge" },
             { name: " Conditon Surveys", size: "xlarge" }
        ];

        return (
            <div className='h-[50%] md:h-full w-full overflow-hidden relative'>
                <Marquee2 value={data} dir="left" />
            </div>
        )
    }

    export default Marquees2
