function LoginForm() {
  return (
    <form className="flex flex-col mt-40 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-2xl font-semibold tracking-normal leading-8 text-black">
        Welcome
      </h1>
      <p className="mt-3 text-sm leading-5 text-slate-500">
        Login to your account
      </p>
      <div className="flex flex-col mt-7 text-sm leading-5 whitespace-nowrap max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <label
            htmlFor="email"
            className="font-medium text-slate-900 max-md:max-w-full"
          >
            Email
          </label>
          <div className="flex flex-col justify-center mt-1.5 text-slate-900 max-md:max-w-full">
            <input
              type="email"
              id="email"
              className="justify-center items-start px-3 py-2 bg-white rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
              placeholder="panditprajjawal@gmail.com"
            />
          </div>
        </div>
        <div className="flex flex-col mt-2 max-md:max-w-full">
          <label
            htmlFor="password"
            className="font-medium text-slate-900 max-md:max-w-full"
          >
            Password
          </label>
          <div className="flex flex-col justify-center mt-1.5 text-slate-900 max-md:max-w-full">
            <input
              type="password"
              id="password"
              className="justify-center items-start px-3 py-2 bg-white rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
              placeholder="******************"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="justify-center self-start px-4 py-2 mt-7 text-sm font-medium leading-6 text-white whitespace-nowrap rounded-lg bg-slate-900"
      >
        Submit
      </button>
      <a
        href="#"
        className="justify-center self-start mt-5 text-sm font-medium leading-6 rounded-lg bg-white bg-opacity-0 text-slate-900"
      >
        Forgot your password?
      </a>
    </form>
  );
}
