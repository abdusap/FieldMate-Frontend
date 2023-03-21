import React from 'react'
import LoginSignupContainer from '../Components/Users/LoginSignupContainer'
import SignupForm from '../Components/Users/SignupForm'


function Signup() {
  return (
    <>
    <LoginSignupContainer form={<SignupForm/>}/>
    </>
  )
}

export default Signup