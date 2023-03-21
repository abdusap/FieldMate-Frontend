import React from 'react'
import { Link } from 'react-router-dom'


function LoginForm() {
  return (
    <>
    <div className='w-1/2 flex-grow p-3 hidden md:flex'>
    <img src="/image/signin-image.jpg" alt="loginImage" />
</div>
<div className='items-center md:items-start flex w-1/2 flex-grow flex-col gap-5 pt-10'>
<h1 className='text-3xl font-bold'>Turf Login</h1>
<div className='flex flex-col items-center md:items-start'>
    <input className=' border-b focus:outline-none border-slate-400 mt-7' type="email" placeholder='Email'/>
    <input className=' border-b focus:outline-none border-slate-400 mt-4 ' type="password" placeholder='Password'/>
</div>
<button className='text-white w-fit px-3 py-1 rounded-md bg-black'>Login</button>
<Link to={'/turf/signup'}>
<p>Click Here to Signup</p>
</Link>
</div>
    </>
  )
}

export default LoginForm