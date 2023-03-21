import React from 'react'
import LoginForm from '../Components/Users/LoginForm'
import LoginSignupContainer from '../Components/Users/LoginSignupContainer'

function Login() {
  return (
    <>
    <LoginSignupContainer form={<LoginForm/>}/>
    </>
  )
}

export default Login