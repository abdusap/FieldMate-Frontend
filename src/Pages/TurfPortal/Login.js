import React from 'react'
import LoginForm from '../../Components/TurfPortal/LoginForm'
import LoginSignupContainer from '../../Components/TurfPortal/LoginSignupContainer'


function Login() {
  return (
    <>
    <LoginSignupContainer Form={<LoginForm/>}/>
    </>
  )
}

export default Login