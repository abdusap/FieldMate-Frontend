import React from 'react'
import LoginForm from '../../Components/TurfPortal/LoginForm'
import LoginSignupContainer from '../../Components/TurfPortal/LoginSignupContainer'
import { Navigate } from 'react-router-dom';



function Login() {
  const turf=localStorage.getItem('turf')
  return turf?(<Navigate to={'/turf/dashboard'}/>): (
    <>
    <LoginSignupContainer Form={<LoginForm/>}/>
    </>
  )
}

export default Login