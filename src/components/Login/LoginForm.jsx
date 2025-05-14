// *****DO NOT DELETE THESE COMMENTS*********

// import React from "react";

// *****DO NOT DELETE THESE COMMENTS*********

// export default LoginForm;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { login as authLogin } from "../../store/authSlice";

import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          console.log("navigate to quiz");
          navigate("/quiz");
          console.log("after navigate to quiz");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" mt-40 mx-auto w-full max-w-lg rounded-lg">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            {/* <Logo width="100%" /> */}
          </span>
        </div>

        <h1 className="text-2xl font-semibold tracking-normal leading-8 text-black">
          Welcome
        </h1>

        <p className="mt-3 text-sm leading-5 text-slate-800">
          Login to your account
        </p>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="font-medium text-slate-900 max-md:max-w-full"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="justify-center items-start px-3 py-2 bg-white rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
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
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="password"
              className="font-medium text-slate-900 max-md:max-w-full"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="justify-center items-start px-3 py-2 bg-white rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
              {...register("password", {
                required: true,
              })}
            />
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
          <button
            type="submit"
            className="justify-center self-start px-4 py-2 mt-7 text-sm font-medium leading-6 text-white whitespace-nowrap rounded-lg bg-slate-900"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

{
  /* <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="font-medium text-slate-900">
                Email:
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="justify-center items-start px-3 py-2 bg-white rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="password" className="font-medium text-slate-900">
                Password:
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="justify-center items-start px-3 py-2 bg-white rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
                {...register("password", {
                  required: true,
                })}
              />
            </div>
            <button
              type="submit"
              className="justify-center self-start px-4 py-2 mt-7 text-sm font-medium leading-6 text-white whitespace-nowrap rounded-lg bg-slate-900"
            >
              Log in
            </button>
          </div>
        </form> */
}
