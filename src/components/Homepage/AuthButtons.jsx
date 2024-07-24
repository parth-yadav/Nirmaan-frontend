
import React from "react";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import LogoutBtn from "./LogoutBtn";


function AuthButtons() {

  const authStatus = useSelector((state) => state.auth?.status || false);

 

  const navigate = useNavigate()

  const navItems = [
    
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "SignUp",
      slug: "/signup",
      active: !authStatus,
  }
  ]


  return (
    <>
    <nav>
    <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                // {if (item.name===){

                // }}
                className={`justify-center px-4 py-2 ml-3 rounded-md ${item.name === 'Login' ? 'border border-black bg-white text-black' : 'bg-black border border-solid border-slate-500 text-white'}`}
                  >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li className="border border-black bg-white text-black">
                <LogoutBtn />
              </li>
            )}
          </ul>
          </nav>
    {/* <div className="flex gap-5 leading-6">
      <button className="justify-center px-4 py-2 bg-white rounded-md border border-solid border-slate-500 text-slate-900">
        Login
      </button>
      <button className="justify-center px-4 py-2 text-white rounded-md bg-slate-900">
        Register
      </button>
    </div> */}
    </>
  );
}

export default AuthButtons;
