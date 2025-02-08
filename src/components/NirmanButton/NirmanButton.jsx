import React from 'react'
import { Link } from 'react-router-dom'

function NirmanButton() {
  return (

    <Link to="/">
        <div className=" dark:text-white flex gap-1  text-lg font-semibold leading-7 text-black whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4c393fb07232e9984893a6f1548e299c95cc11ed0f2092c6ed0a7f613786e?apiKey=8a82faa9db93454483a68c973b38c7b0&"
          className="shrink-0 aspect-square w-[30px]"
          alt="Nirmaan logo"
        />
        <div className="my-auto">Nirmaan</div>
      </div>
      </Link>
   
  )
}

export default NirmanButton