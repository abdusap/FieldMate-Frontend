import React from "react";

function LoginForm() {
  return (
    <>
      <div className="w-1/2 flex-grow p-3 hidden md:flex">
        <img src="/image/admin image.jpg" alt="adminImage" />
      </div>
      <div className="items-center md:items-start self-center flex w-1/2 flex-grow flex-col gap-5 my-2">
        <h1 className="text-3xl font-bold">Admin Login</h1>
        <div className="flex flex-col items-center md:items-start">
          <input
            className=" border-b focus:outline-none border-slate-400 mt-7"
            type="email"
            placeholder="Email"
          />
          <input
            className=" border-b focus:outline-none border-slate-400 mt-4 "
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="text-white w-fit px-3 py-1 rounded-md bg-black">
          Login
        </button>
     
      </div>
    </>
  );
}

export default LoginForm;
