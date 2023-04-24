import React from 'react'
import LoginSignupContainer from '../../Components/TurfPortal/LoginSignupContainer'
import SignupForm from '../../Components/TurfPortal/SignupForm'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';



function Signup() {
  const turf=localStorage.getItem('turf')
  return turf?(<Navigate to={'/turf/dashboard'}/>): (
    <>
    <LoginSignupContainer Form={<SignupForm/>}/>
    </>
  )
}

export default Signup