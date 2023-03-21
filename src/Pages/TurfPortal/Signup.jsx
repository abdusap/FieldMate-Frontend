import React from 'react'
import LoginSignupContainer from '../../Components/TurfPortal/LoginSignupContainer'
import SignupForm from '../../Components/TurfPortal/SignupForm'


function Signup() {
  return (
    <>
    <LoginSignupContainer Form={<SignupForm/>}/>
    </>
  )
}

export default Signup