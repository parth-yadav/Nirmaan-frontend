import React from "react";

function BlogFilter() {
  return (
    <div className="flex flex-row">
      <div >
        <button className="flex rounded-xl gap-2 justify-center px-4 py-2 text-sm
         font-medium leading-6 text-black whitespace-nowrap bg-white  border border-gray-300 border-solid">
         
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f1438ce2a8fedbecb7110c9b551cae299ef99c534a0da237aeb1ea4e5e72078?apiKey=8a82faa9db93454483a68c973b38c7b0&"
            alt=""
            className="shrink-0 my-auto w-4 aspect-square"
          />
          <span>Filter</span>
        </button>
      </div>
     
    </div>
  );
}

export default BlogFilter;
