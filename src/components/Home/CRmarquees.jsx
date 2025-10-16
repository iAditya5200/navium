import React from 'react'
import CRmarquee from './CRmarquee'

function CRmarquees() {
    const data = [
        { name: "© All trademarks and logos belong to their respective owners.", size: "small" },
        { name: "© All trademarks and logos belong to their respective owners.", size: "large" }, { name: "© All trademarks and logos belong to their respective owners.", size: "large" }

    ];

    return (
        <div className='h-full w-full overflow-hidden relative'>
            <CRmarquee value={data} dir="left" />
        </div>
    )
}

export default CRmarquees
