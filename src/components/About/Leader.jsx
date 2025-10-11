// import React from 'react'
// import Button from '../Common/Button'

// function Leader({name , designation , post , url}) {
//   return (
//     <div className='h-[15vw] min-w-[30vw] p-1 flex flex-col rounded-md items-center justify-center' >
//       <div className='w-[100%] h-[60%]  flex gap-5  '>
//         <div className=' h-[100%] w-[40%]  overflow-hidden rounded-full '>
//           <img className='h-[100%] w-[100%] object-cover' src={url} alt="" />
//         </div>
//         <div className='w-[50%]'>
//           <h1 className='text-2xl font-semibold w-[50%] whitespace-nowrap '>{name}</h1>
//           <h5>{designation}</h5>
//           <div className='text-xs'>
//            {post}
//           </div>

//         </div>

//       </div>


//     </div>
//   )
// }

// export default Leader

import React from 'react';

function Leader({ name, designation, post, url }) {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-full sm:w-[45%] md:w-[30%] lg:w-[25%] transition-transform duration-200 hover:scale-105">
      <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden mb-3">
        <img className="w-full h-full object-cover" src={url} alt={name} />
      </div>
      <h2 className="text-xl font-semibold text-center">{name}</h2>
      <h4 className="text-sm text-gray-500">{designation}</h4>
      <p className="text-xs text-center mt-1">{post}</p>
    </div>
  );
}

export default Leader;

