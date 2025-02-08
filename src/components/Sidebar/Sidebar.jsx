import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeSwitcher from "../../features/theme/themeSwitcher";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import NirmanButton from "../NirmanButton/NirmanButton";
import { X } from "lucide-react";
import "./scrollbar-hide.css";

// Keep your existing sidebarItems array here

import {
  FileText,
  Search,
  Wallet,
  Book,
  Archive,
  Grid,
  BarChart,
  Users,
  Building,
  Settings,
} from "lucide-react";

const sidebarItems = [
  {
    icon: <FileText className="w-4 h-4 my-auto" />,
    text: "My tests",
    to: "/quiz/test",
  },
  {
    icon: <Search className="w-4 h-4 my-auto" />,
    text: "Discover",
    to: "/quiz/discover",
  },
  {
    icon: <Wallet className="w-4 h-4 my-auto" />,
    text: "Wallet",
    to: "/quiz/wallet",
  },
  {
    icon: <Book className="w-4 h-4 my-auto" />,
    text: "Blogs",
    to: "/quiz/blogs",
  },
  {
    icon: <Archive className="w-4 h-4 my-auto" />,
    text: "Question Pool",
    to: "/quiz/question-pool",
  },
  {
    icon: <Grid className="w-4 h-4 my-auto" />,
    text: "Exam Schemas",
    to: "/quiz/exam_schema",
  },
  {
    icon: <BarChart className="w-4 h-4 my-auto" />,
    text: "Analytics",
    to: "/quiz/analytics",
  },
  {
    icon: <Users className="w-4 h-4 my-auto" />,
    text: "Team",
    to: "/quiz/team",
  },
  {
    icon: <Building className="w-4 h-4 my-auto" />,
    text: "Organisation",
    to: "/quiz/organisation",
  },
  {
    icon: <Settings className="w-4 h-4 my-auto" />,
    text: "Settings",
    to: "/quiz/settings",
  },
  {
    icon: <Settings className="w-4 h-4 my-auto" />,
    text: "Approval Page",
    to: "/approve-exampool",
  },
];


const SidebarItem = ({ icon, text, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex gap-2 px-4 py-2 mt-2.5 text-sm font-medium leading-6 text-black whitespace-nowrap rounded-lg dark:text-white ${
          isActive ? "bg-gray-300 dark:bg-gray-300 dark:text-blue-600" : ""
        }`
      }
    >
      {icon}
      <div className="text">{text}</div>
    </NavLink>
  );
};

import { useEffect, useRef, useState } from "react";

function Sidebar({ isMobile, isOpen, onToggle, className }) {
  const dispatch = useDispatch();
  const [hasOverflow, setHasOverflow] = useState(false);
  const navRef = useRef(null);

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  // Check if the scrollable area has overflow content
  useEffect(() => {
    if (navRef.current) {
      const hasOverflowContent =
        navRef.current.scrollHeight > navRef.current.clientHeight;
      setHasOverflow(hasOverflowContent);
    }
  }, [sidebarItems]); // Re-check when sidebarItems change

  return (
    <aside
      className={`${
        isMobile ? "fixed top-0 right-0" : "sticky top-0 left-0"
      } h-screen w-64 bg-white border dark:bg-gray-800 transform ${
        isMobile
          ? isOpen
            ? "translate-x-0"
            : "translate-x-full"
          : "translate-x-0"
      } transition-transform duration-300 ease-in-out overflow-hidden z-20`}
    >
      <div className="flex flex-col h-full">
        {/* Fixed Top Section - Profile Section */}
        <div className="flex gap-5 justify-between ml-2.5 p-4">
          {/* Hide NirmanButton on mobile */}
        </div>

        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 z-10 pt-2">
          <div className="flex justify-between items-center px-4">
            {/* NirmanButton aligned to the left */}
            {!isMobile && <NirmanButton />}

            {/* Profile section centered for mobile */}
            {isMobile && (
              <div className="flex flex-col items-center mx-auto">
                <img
                  src="https://imgs.search.brave.com/0WEfOBTBuRfh5q4Ko5Dv2vFEOdAYd0whIaudZauXUOQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTk2/ODMwODYzMi9waG90/by90b3BzaG90LW1h/cmstenVja2VyYmVy/Zy1jZW8tb2YtbWV0/YS1saXN0ZW5zLWFz/LWhlLXRlc3RpZmll/cy1kdXJpbmctdGhl/LXVzLXNlbmF0ZS1q/dWRpY2lhcnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVN2/ZnRFb19Qc0o2S05a/UVhuQUh4VEJubUJp/N0RYdGRkaWdpOWpM/bzg2RWM9"
                  alt="Profile"
                  className="w-16 h-16 shadow-lg rounded-full object-cover"
                />
                <div className="text-center mt-2">
                  <p className="font-semibold text-black dark:text-white">
                    John Doe
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    john.doe@example.com
                  </p>
                </div>
              </div>
            )}
          </div>
          <hr className="shrink-0 h-px bg-white border border-gray-300 border-solid rounded-lg dark:border-gray-600 mt-4" />
        </div>

        {/* Scrollable Middle Section */}
        <nav
          ref={navRef}
          className="flex-grow overflow-y-auto px-2.5 pt-32 lg:pt-6 pb-3.5 scrollbar-hide" // Adjusted pt to accommodate the profile section
        >
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              text={item.text}
              to={item.to}
            />
          ))}
        </nav>

        {/* Fixed Footer Section - Logout Button */}
        <div className="mt-auto">
          <hr className="shrink-0 h-px bg-white border border-gray-300 border-solid dark:border-gray-600" />
          <div className="flex justify-center p-4">
            {isMobile && (
              <button
                onClick={logoutHandler}
                className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            )}
            {/* Fixed Footer Section */}
            {!isMobile && (
              <div className="mt-auto">
                <div className="flex gap-5 justify-between  w-full">
                  <div className="flex gap-2.5 self-start text-sm font-medium leading-6 text-black dark:text-white">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e99887469964f10b8512d7b588205aff42603896c2a78b17d45caff72b6e48d1?apiKey=8a82faa9db93454483a68c973b38c7b0&"
                      alt=""
                      className="shrink-0 aspect-square fill-gray-400 w-[30px]"
                    />
                    <div className="flex-auto my-auto">Prajjawal Pandit</div>
                  </div>
                  <button
                    onClick={logoutHandler}
                    className="flex justify-center items-center px-2 w-8 h-8 bg-white rounded-md border border-gray-300 border-solid dark:bg-gray-700 dark:text-white"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a9859a78eb99bcbd27fe6539c74fff6970a216032b996c9f5005f49abce9fcf?apiKey=8a82faa9db93454483a68c973b38c7b0&"
                      alt=""
                      className="w-4 aspect-square"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

// Sidebar({ isMobile, isOpen, onToggle, className }) {
//   const dispatch = useDispatch();
//   const [hasOverflow, setHasOverflow] = useState(false);
//   const navRef = useRef(null);

//   const logoutHandler = () => {
//     authService.logout().then(() => {
//       dispatch(logout());
//     });
//   };

//   // Check if the scrollable area has overflow content
//   useEffect(() => {
//     if (navRef.current) {
//       const hasOverflowContent =
//         navRef.current.scrollHeight > navRef.current.clientHeight;
//       setHasOverflow(hasOverflowContent);
//     }
//   }, [sidebarItems]); // Re-check when sidebarItems change

//   return (
//     <aside
//       className={`${
//         isMobile ? "fixed top-0 right-0" : "sticky top-0 left-0"
//       } h-screen w-64 bg-white border dark:bg-gray-800 transform ${
//         isMobile
//           ? isOpen
//             ? "translate-x-0"
//             : "translate-x-full"
//           : "translate-x-0"
//       } transition-transform duration-300 ease-in-out overflow-hidden z-20`}
//     >
//       <div className="flex flex-col h-full">
//         {/* Fixed Top Section */}
//         <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 z-10">
//           <div className="flex gap-5 justify-between ml-2.5 p-4">
//             {!isMobile && <NirmanButton />} {/* Hide NirmanButton on mobile */}
//             {isMobile && (
//               <button
//                 onClick={onToggle}
//                 className="md:hidden text-gray-600 dark:text-gray-200"
//               >
//                 <X size={24} />
//               </button>
//             )}
//           </div>
//           <hr className="shrink-0 h-px bg-white border border-gray-300 border-solid rounded-lg dark:border-gray-600" />
//         </div>

//         {/* Scrollable Middle Section */}
//         <nav
//           ref={navRef}
//           className="flex-grow overflow-y-auto px-2.5 pt-20 pb-3.5 scrollbar-hide"
//         >
//           {sidebarItems.map((item, index) => (
//             <SidebarItem
//               key={index}
//               icon={item.icon}
//               text={item.text}
//               to={item.to}
//             />
//           ))}

//         </nav>

//         {/* Fixed Footer Section */}
//         <div className="mt-auto">
//           <hr className="shrink-0 h-px bg-white border border-gray-300 border-solid dark:border-gray-600" />
//           <div className="flex gap-5 justify-between p-4 w-full">
//             <div className="flex gap-2.5 self-start text-sm font-medium leading-6 text-black dark:text-white">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/e99887469964f10b8512d7b588205aff42603896c2a78b17d45caff72b6e48d1?apiKey=8a82faa9db93454483a68c973b38c7b0&"
//                 alt=""
//                 className="shrink-0 aspect-square fill-gray-400 w-[30px]"
//               />
//               <div className="flex-auto my-auto">Prajjawal Pandit</div>
//             </div>
//             <button
//               onClick={logoutHandler}
//               className="flex justify-center items-center px-2 w-8 h-8 bg-white rounded-md border border-gray-300 border-solid dark:bg-gray-700 dark:text-white"
//             >
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a9859a78eb99bcbd27fe6539c74fff6970a216032b996c9f5005f49abce9fcf?apiKey=8a82faa9db93454483a68c973b38c7b0&"
//                 alt=""
//                 className="w-4 aspect-square"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// }

// export default Sidebar;
