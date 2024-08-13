import React from 'react'


function BlogNew({ toggleVisibility }) {



  return (
    <div>
        <button className="flex gap-2 justify-center
         px-4 py-2 text-sm font-medium leading-6 text-white whitespace-nowrap
          bg-black rounded-md border border-gray-300 border-solid"
          onClick={toggleVisibility}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c56d97cbb4bedc75230dcea7b2c5a69e019203c7d6ee158a02b323809a9bbc3?apiKey=8a82faa9db93454483a68c973b38c7b0&"
          alt=""
          className="shrink-0 my-auto w-4 aspect-square"
        />
        <span>New Blogs</span>
      </button>
    </div>
  )
}

export default BlogNew