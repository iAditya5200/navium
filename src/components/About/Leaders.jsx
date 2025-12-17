// import React from 'react'
// import Leader from './Leader'
// import demoDp from "/src/assets/demoDp.jpg"
// import Button from '../Common/Button'
// function Leaders() {
//     var leader = [{ name: "Punit Singh", des: "captain", post: "founder at Navium", url: demoDp },
//     { name: "Navin Chhikara", des: "captain", post: "Co-founder at Navium", url: demoDp }
//     ]
//     return (
//         <div className=" w-[100%] flex flex-col items-center justify-center ">
//             <div className='flex  mt-10 flex-wrap gap-[15vw] justify-center'>
//             {leader.map((item) => {
//                 return <Leader name={item.name} post={item.post} designation={item.des} url={item.url} />

//             })}
//             </div>
          
//                 <Button content={"Know more"} width={"10vw"} link={"/leadership"} />
          
//         </div>
//     )
// }

// export default Leaders
import React from 'react';
import Leader from './Leader';
import demoDp from '/src/assets/naveenDP.jpg';
import demoDp2 from '/src/assets/puneetDP.jpg';
import Button from '../Common/Button';

function Leaders() {
  const leaders = [
    { name: 'Capt. Puneet Singh', des: 'Master Mariner', post: 'Co-founder at Navium', url: demoDp2 },
    { name: 'Capt. Naveen Chhikara', des: 'Master Mariner', post: 'Founder at Navium', url: demoDp }
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-10 bg-[#F2F0EA]">
      <div className="flex flex-wrap justify-center gap-6 w-full px-4">
        {leaders.map((leader, index) => (
          <Leader
            key={index}
            name={leader.name}
            designation={leader.des}
            post={leader.post}
            url={leader.url}
          />
        ))}
      </div>

      <div className="mt-10">
        <Button content="Know more" width="200px" link="/leadership" />
      </div>
    </div>
  );
}

export default Leaders;
