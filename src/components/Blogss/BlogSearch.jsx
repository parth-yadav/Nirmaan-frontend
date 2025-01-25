
// import React from "react";

// function BlogSearch() {
//   return (
//     <div className="flex gap-5 justify-between mt-5 w-full max-md:flex-wrap max-md:max-w-full">
//       <div className="flex gap-5 max-md:flex-wrap">
//         <form className="flex flex-col grow shrink-0 justify-center text-base leading-6 text-gray-500 basis-0 w-fit">
//           <div className="flex flex-col justify-center">
//             <div className="flex flex-col justify-center">
//               <div className="flex gap-5 justify-between px-3 py-2 bg-white rounded-md border border-gray-300 border-solid">
//                 <label htmlFor="blogSearch" className="sr-only">
//                   Search for blogs
//                 </label>
//                 <input
//                   type="text"
//                   id="blogSearch"
//                   placeholder="Search for blogs"
//                   className="flex-grow bg-transparent border-none outline-none"
//                 />
//                 <button type="submit" aria-label="Search">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a56ced068ecc4971a522efccd73586f1fc9df3f6b16db069d9915c4d56eaa98?apiKey=8a82faa9db93454483a68c973b38c7b0&"
//                     alt=""
//                     className="shrink-0 w-6 aspect-square"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//         <button className="flex gap-2 justify-center px-4 py-2 text-sm font-medium leading-6 text-black whitespace-nowrap bg-white rounded-md border border-gray-300 border-solid">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f1438ce2a8fedbecb7110c9b551cae299ef99c534a0da237aeb1ea4e5e72078?apiKey=8a82faa9db93454483a68c973b38c7b0&"
//             alt=""
//             className="shrink-0 my-auto w-4 aspect-square"
//           />
//           <span>Filters</span>
//         </button>
//       </div>
//       <button className="flex gap-2 justify-center px-4 py-2 text-sm font-medium leading-6 text-black whitespace-nowrap bg-white rounded-md border border-gray-300 border-solid">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c56d97cbb4bedc75230dcea7b2c5a69e019203c7d6ee158a02b323809a9bbc3?apiKey=8a82faa9db93454483a68c973b38c7b0&"
//           alt=""
//           className="shrink-0 my-auto w-4 aspect-square"
//         />
//         <span>View</span>
//       </button>
//     </div>
//   );
// }

// export default BlogSearch;

import React, { useState } from 'react';

function BlogSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="">
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-80 px-4 py-2 border border-gray-300 rounded-lg"
      />
    </div>
  );
}

export default BlogSearch;

