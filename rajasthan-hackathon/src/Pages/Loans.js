  // import React, { useEffect, useState } from 'react'
  // // import gstLogo from '../assets/gst.png'
  // // import cinLogo from '../assets/cin.png'
  // // import panLogo from '../assets/pan.png'
  // // import patentLogo from '../assets/patent.png'
  // // import proofLogo from '../assets/proof.png'
  // import eventsLogo from '../assets/events.png'
  // const Eligibility = () => {
  //   // This function put query that helps to
  //   // change the language
  //   const constantData = [
  //     {
  //       id: 1,
  //       image: gstLogo,
  //       title: 't1',
  //       description: 'd1',
  //     },
  //     {
  //       id: 2,
  //       image: cinLogo,
  //       title: 't2',
  //       description: 'd2',
  //     },
  //     {
  //       id: 3,
  //       image: panLogo,
  //       title: 't3',
  //       description: 'd3',
  //     },
  //     {
  //       id: 4,
  //       image: patentLogo,
  //       title: 't4',
  //       description: 'd4',
  //     },
  //   ]

  //   return (
  //     <div className="px-24 bg-gray-100">
  //       <h1 className="text-4xl font-bold pt-16 pb-8">eligibility</h1>
  //       <h1 className="text-2xl font-medium text-gray-500">user</h1>
  //       <div className="mt-8 flex flex-row ml-8">
  //         {constantData.map((criteria) => (
  //           <div
  //             key={criteria.id}
  //             className="p-4 mr-4 bg-white flex flex-col items-center justify-center shadow-lg max-w-[23%]"
  //           >
  //             <img
  //               src={criteria.image}
  //               style={{
  //                 width: '120px',
  //               }}
  //               alt="criteria"
  //             />
  //             <h1 className="mt-8 text-xl font-semibold text-center">
  //               {criteria.title}
  //             </h1>
  //             <h1 className="mt-4 text-md text-gray-400">
  //               {criteria.description}
  //             </h1>
  //           </div>
  //         ))}
  //       </div>
  //       <h1 className="mt-8 text-center text-2xl font-medium ">Or</h1>
  //       <div className="flex flex-row mt-8 bg-white items-center shadow-lg">
  //         <img className="w-[200px]" src={proofLogo} alt="proof" />
  //         <div>
  //           <h1 className="text-md font-semibold text-gray-800">
  //             {t('submit')}
  //             <span className="text-md text-gray-400">{`(videos of product, proof of customers, turnover details, any recognition certificate/document)`}</span>{' '}
  //           </h1>
  //           <h1 className="text-md text-gray-800">evaluate</h1>
  //         </div>
  //       </div>
  //       <h1 className="mt-8 text-center text-2xl font-medium ">notEligible</h1>
  //       <div
  //         className="bg-white shadow-lg p-4 mt-8 max-w-[600px] flex flex-col items-center"
  //         style={{
  //           marginLeft: 'auto',
  //           marginRight: 'auto',
  //         }}
  //       >
  //         <img src={eventsLogo} className="w-[300px] self-center" />
  //         <h1 className="mt-4 text-xl font-semibold text-center">learn</h1>
  //         <h1 className="mt-4 text-md text-gray-400">attend</h1>
  //       </div>
  //     </div>
  //   )
  // }

  // export default Eligibility
