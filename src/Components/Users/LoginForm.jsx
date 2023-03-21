import React from 'react'
import { Link } from 'react-router-dom'

function LoginForm() {
  return (
    <>
    <div className="  bg-white w-96 border-2 rounded-2xl p-7 flex-col flex z-10 shadow-2xl relative">
          <img src="./image/logo.png" className="pb-4" alt="logo"></img>
          <h3 className="text-lg font-normal text-center pb-5">
            YOUR ACCOUNT FOR
            {/* <br /> */}
            EVERYTHING
          </h3>
          <div className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Email"
              className="border  w-full text-base px-2 focus:outline-none focus:border-gray-600 rounded h-9 mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="border w-full text-base px-2 focus:outline-none focus:border-gray-600 rounded h-9 mb-4"
            />
          </div>
          <p className="text-center font-thin mb-4">Forgoten Your Password? </p>
          <div className="text-center">
            <button className="rounded-full bg-black text-white w-32 h-9  hover:bg-gray-800 mb-4">
              Login
            </button>
          </div>
          <span className="text-center font-thin">
            Not a Member? <Link to={'/signup'}> <span className="font-semibold">Join Us</span></Link>
          </span>
        </div>
    </>
  )
}

export default LoginForm