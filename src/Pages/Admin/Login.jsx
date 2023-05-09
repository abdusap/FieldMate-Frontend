import React from 'react'
import LoginForm from '../../Components/Admin/LoginForm'
import LoginSignupContainer from '../../Components/TurfPortal/LoginSignupContainer'
import { Navigate } from 'react-router-dom'

function Login() {
  const token=localStorage.getItem('admin')
  
  return token?(<Navigate to={'/admin/dashboard'}/>): (
    <>
    <LoginSignupContainer Form={<LoginForm/>}/>
    </>
  )
}

export default Login