import React from 'react'
import Leader from './Leader'
import demoDp from "/src/assets/demoDp.jpg"
import Button from '../Common/Button'
function Leaders() {
    var leader = [{ name: "Punit Singh", des: "captain", post: "founder at Navium", url: demoDp },
    { name: "Navin Chhikara", des: "captain", post: "Co-founder at Navium", url: demoDp }
    ]
    return (
        <div className=" w-[100%] flex flex-col items-center justify-center ">
            <div className='flex  mt-10 flex-wrap gap-6 justify-center'>
            {leader.map((item) => {
                return <Leader name={item.name} post={item.post} designation={item.des} url={item.url} />

            })}
            </div>
            <div className=''>
                <Button content={"Know more"} width={"10vw"} link={"/leadership"} />
            </div>
        </div>
    )
}

export default Leaders