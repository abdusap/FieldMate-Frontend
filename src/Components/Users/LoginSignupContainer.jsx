import React from 'react'

function LoginSignupContainer({form}) {
  return (
    <div
        style={{
          backgroundImage: "url(./image/background.jpg)",
          backgroundSize: "cover",     
          backgroundPosition: "center",            
        }}
        className="flex background container-fluid h-screen  justify-center items-center px-5 md:px-0"
      >
        {/* backdropFilter:'blur(100px)' */}
        {/* filter: blur(5px); */}

      {form}
      </div>
  )
}

export default LoginSignupContainer