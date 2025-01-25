// import React from "react";
// import InputField from "./InputField";
// import CareerPathSelect from "./CareerPathSelect";
// import SubmitButton from "./SubmitButton";

// // const SignUpForm = () => {
// //   const inputFields = [
// //     { label: "Email", type: "email", placeholder: "panditprajjawal@gmail.com" },
// //     { label: "Full name", type: "text", placeholder: "Prajjawal Pandit" },
// //     { label: "Phone number", type: "tel", placeholder: "9876543210" },
// //     { label: "Password", type: "password", placeholder: "******************" },
// //     {
// //       label: "Confirm password",
// //       type: "password",
// //       placeholder: "******************",
// //     },
// //   ];

// //   return (
// //     <form className="flex flex-col mt-7 text-sm leading-5 max-md:max-w-full">
// //       {inputFields.map((field, index) => (
// //         <InputField key={index} {...field} />
// //       ))}
// //       <div className="shrink-0 mt-7 h-px border border-solid bg-slate-100 border-slate-100 max-md:max-w-full" />
// //       <CareerPathSelect />
// //       <div className="flex gap-2 self-start mt-6 text-sm font-medium leading-4 text-black">
// //         <div className="shrink-0 w-3.5 h-3.5 bg-white rounded-sm border  border-solid" />
// //         <div className="underline">
// //           Accept <span className="underline">terms and condition</span>
// //         </div>
// //       </div>
// //       <SubmitButton />
// //     </form>
// //   );
// // };

// // export default SignUpForm;

//**************************DO NOT DELETE ABOVE COMMENT***************************

import React, { useState } from "react";
import authService from "../../../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../store/authSlice";
// import {Button, Input, Logo} from './index.js'
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/quiz");
        }
        // else {
        //   {dispatch(login(userData))
        //     navigate("/")}
        // }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
  <div className="mx-auto w-full max-w-lg  rounded-lg ">
    <div className="mb-2 flex justify-center">
      <span className="inline-block w-full max-w-[100px]">
        {/* <Logo width="100%" /> */}
      </span>
    </div>
    
    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

    <form  onSubmit={handleSubmit(create)}>
      <div className="flex flex-col mt-7 gap-3 text-sm leading-5 max-md:max-w-full">
        <div className="flex flex-col space-y-1">
          <label htmlFor="name" className="font-medium text-slate-900 max-md:max-w-full">
            Full Name:
          </label>
          <input
            id="name"
            placeholder="Enter your full name"
            className="justify-center items-start px-3 py-2 bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
            {...register("name", {
              required: true,
            })}
          />
        </div>
        <div  className ="flex flex-col space-y-1">
          <label htmlFor="email" className="font-medium text-slate-900 max-md:max-w-full">
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="justify-center items-start px-3 py-2 bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />
        </div>
        <div className ="flex flex-col space-y-1">
          <label htmlFor="password" className="font-medium text-slate-900 max-md:max-w-full">
            Password:
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="justify-center items-start px-3 py-2 bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
            {...register("password", {
              required: true,
            })}
          />
        </div>
        <div className ="flex flex-col space-y-1">
          <label htmlFor="number" className="font-medium text-slate-900 max-md:max-w-full">
            Phone Number:
          </label>
          <input
            id="number"
            type="tel"
            placeholder="Enter your phone number"
            className="justify-center items-start px-3 py-2 bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
            {...register("number", {
              required: true,
            })}
          />
        </div>
        <div className ="flex flex-col space-y-1">
          <label htmlFor="career" className="font-medium text-slate-900 max-md:max-w-full">
            Your Career Path
          </label>
          <select
            id="career"
            className="justify-center items-start px-3 py-2 bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
            {...register("career", { required: "Career path is required" })}
          >
            <option value="">Select a career path</option>
            <option value="developer">Agniveer</option>
            <option value="designer">NDA</option>
            <option value="manager">CRPF</option>
          </select>
        </div>
        <div className="mt-1.5 text-slate-500 max-md:max-w-full">
        You will be able to change path in future in your profile section
      </div>
      <div className="flex items-center space-x-2">
          <input
            id="terms"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            {...register("terms", {
              required: "You must accept the terms and conditions",
            })}
          />
          <label htmlFor="terms" className="text-slate-900">
            I accept the&nbsp;
            <a href="/terms" className="text-primary hover:underline">
              terms and conditions
            </a>
          </label>
        </div>
        <button type="submit" className="justify-center self-start px-4 py-2 mt-5 text-sm font-medium leading-6 text-white whitespace-nowrap rounded-md bg-slate-900">
          Create Account
        </button>
      </div>
    </form>
  </div>
</div>)

}

export default Signup;
