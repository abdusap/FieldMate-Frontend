import React from "react";

function LoginSignupContainer({ Form }) {
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <div className="md:w-3/5  w-3/4 flex  border border-gray-400 rounded-2xl shadow-2xl flex-row px-2">
        {Form}
      </div>
    </div>
  );
}

export default LoginSignupContainer;
