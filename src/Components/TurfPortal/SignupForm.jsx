import React from 'react'
import { Link } from 'react-router-dom'


function SignupForm() {
  return (
    <>
    <div className='w-1/2 flex-grow p-3 hidden md:flex'>
    <img src="/image/signin-image.jpg" alt="loginImage" />
</div>
<div className='items-center md:items-start flex w-1/2 flex-grow flex-col gap-5 pt-10'>
<h1 className='text-3xl font-bold'>Turf Sign up</h1>
<div className='flex flex-col items-center md:items-start'>
    <input className=' border-b focus:outline-none border-slate-400 ' type="text" placeholder='Name'/>
    <input className=' border-b focus:outline-none border-slate-400 mt-2 ' type="number" placeholder='Mobile'/>
    <input className=' border-b focus:outline-none border-slate-400 mt-2' type="email" placeholder='Email'/>
    <input className=' border-b focus:outline-none border-slate-400 mt-2 ' type="password" placeholder='Password'/>
    <input className=' border-b focus:outline-none border-slate-400 mt-2 ' type="password" placeholder='Confirm Password'/>
</div>
<button className='text-white w-fit px-3 py-1 rounded-md bg-black'>Sign up</button>
<Link to={'/turf/login'}>
<p>Click Here to Login</p>
</Link>
</div>
    </>
  )
}

export default SignupForm