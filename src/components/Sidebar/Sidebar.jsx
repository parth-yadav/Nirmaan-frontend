
import React from "react";

import { Link, NavLink } from "react-router-dom";

import ThemeSwitcher from '../../features/theme/themeSwitcher';

import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice"
import NirmanButton from "../NirmanButton/NirmanButton";

function SLogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  
}



const sidebarItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e69662981acab63aa64aa1912c25c27ffdf7548842bbbc32f3e8840991b488b0?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "My tests",
    to: '/quiz/test'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/49f56325d3f9f737f16e780de9c3b9f6f06f88a0ca7fda342128cd008869ffa0?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Discover",    
    to: '/quiz/discover'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa068a97d9c74226417b8a0b967e6b3ab77297120310ee40f1f2f9fcd0ffccd3?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Wallet",
    to: '/quiz/wallet'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d98357a71e2ad3092798be3422551f3981de837b313b8f8ec2e6b40cbc3a19bd?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Blogs",
    to: '/quiz/blogs'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d98357a71e2ad3092798be3422551f3981de837b313b8f8ec2e6b40cbc3a19bd?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Blogs Cord..",
    to: '/quiz/blogscord'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d98357a71e2ad3092798be3422551f3981de837b313b8f8ec2e6b40cbc3a19bd?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Question Pool",
    to: '/quiz/question_pool'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d98357a71e2ad3092798be3422551f3981de837b313b8f8ec2e6b40cbc3a19bd?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Exam Schemas",
    to: '/quiz/exam_schema'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d98357a71e2ad3092798be3422551f3981de837b313b8f8ec2e6b40cbc3a19bd?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Analytics",
    to: '/quiz/analytics'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d98357a71e2ad3092798be3422551f3981de837b313b8f8ec2e6b40cbc3a19bd?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Team",
    to: '/quiz/team'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d98357a71e2ad3092798be3422551f3981de837b313b8f8ec2e6b40cbc3a19bd?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Students",
    to: '/quiz/students'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d98357a71e2ad3092798be3422551f3981de837b313b8f8ec2e6b40cbc3a19bd?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Organisation",
    to: '/quiz/organisation'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d98357a71e2ad3092798be3422551f3981de837b313b8f8ec2e6b40cbc3a19bd?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Testing Components",
    to: '/quiz/testing'
  },
];

const SidebarItem = ({ icon, text, to }) => {


  if (text === '/discover') {
    return (
      <Link
      to={to}
      className=
        "flex gap-2 px-4 py-2 mt-2.5 text-sm font-medium leading-6 text-black whitespace-nowrap  "
      
       
      >
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="shrink-0 my-auto w-4 aspect-square"
        />
        <div className="text">{text}</div>
      </Link>
    );
  } else {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex gap-2 px-4 py-2 mt-2.5 text-sm font-medium leading-6 text-black whitespace-nowrap rounded-xl dark:text-white   ${
            isActive ? 'text-blue-600 bg-gray-300 dark:bg-gray-300 dark:text-blue-600'  : ''
          }`
        }
      >
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="shrink-0 my-auto w-4 aspect-square dark:text-white"
        />
        <div className="text ">{text}</div>
      </NavLink>
    );
  }
};


function Sidebar() {

  const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <aside className="col-span-1  p-4">
      <div className="flex flex-col justify-center max-md:mt-8">
        <nav className="flex flex-col px-2.5 pt-6 pb-3.5 bg-white border-r border-gray-300 border-solid dark:bg-black  ">
          <div className="flex gap-5 justify-between ml-2.5 ">
            <NirmanButton />
            <button className="flex justify-center items-center px-2 w-8 h-8 bg-white rounded-xl border border-gray-300 border-solid dark:bg-black dark:text-white">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1304022697a06d0ac891b41976d22f7bce1a64332f3271602c6d5661ec48fb09?apiKey=8a82faa9db93454483a68c973b38c7b0&"
                alt=""
                className="w-4 aspect-square"
              />
            </button>
            <ThemeSwitcher /> 
          </div>
          
          <hr className="shrink-0 mt-6 h-px bg-gray-300 border border-gray-300 border-solid rounded-xl dark:bg-black dark:text-white" />
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              text={item.text}
              to={item.to} // Assuming each item has a `to` property
            />
          ))}

          <hr className="shrink-0 h-px bg-gray-300 border border-gray-300 border-solid mt-[673px] max-md:mt-10" />
          
          
          
          <div alt="footer" className="flex gap-5 justify-between mt-3.5 w-full">
            <div className="flex gap-2.5 self-start text-sm font-medium leading-6 text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e99887469964f10b8512d7b588205aff42603896c2a78b17d45caff72b6e48d1?apiKey=8a82faa9db93454483a68c973b38c7b0&"
                alt=""
                className="shrink-0 aspect-square fill-gray-400 w-[30px]"
              />
              <div className="flex-auto my-auto dark:text-white">Prajjawal Pandit</div>
            </div>
            <button onClick = {logoutHandler} className="flex justify-center items-center px-2 w-8 h-8 bg-white rounded-md border border-gray-300 border-solid">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a9859a78eb99bcbd27fe6539c74fff6970a216032b996c9f5005f49abce9fcf?apiKey=8a82faa9db93454483a68c973b38c7b0&"
                alt=""
                className="w-4 aspect-square"
              />
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
}



export default Sidebar;


            
