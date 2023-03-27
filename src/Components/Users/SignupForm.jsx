import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Tooltip } from 'react-tippy';
import "react-tippy/dist/tippy.css";
import validationSchema from "../../Validation/userSignupValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signupApi } from "../../Helpers/UserApi";
import Swal from "sweetalert2";
import axiosUser from "../../Config/Api";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

function SignupForm() {
  const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target[0].value,
      mobile: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      confirmPassword: event.target[4].value,
    };
    validationSchema
      .validate(formData)
      .then(async (validatedData) => {
        const response = await signupApi(validatedData);
        console.log(response.data);
        if (response.data.success) {
          Swal.fire({
            title: "Enter your OTP",
            input: "number",
            inputAttributes: {
              autocapitalize: "off",
              // maxLength: 6 // specify the max length of OTP here
            },
            showCancelButton: true,
            confirmButtonText: "Verify",
            showLoaderOnConfirm: true,
            preConfirm: (otp) => {
              // const data = {
              //   otp: otp,
              //   mobile: mobile,
              // };
              formData.otp=otp
              console.log(formData);
              return axiosUser
                .post("/otp", formData)
                .then((response) => {
                  if (response.data.ok) {
                    Swal.fire({
                      title: "OTP verified!",
                      text:"Your Account created successfully",
                      icon: "success",
                    }).then(()=>{
                      navigate('/login')
                    })
                  }
                  if (!response.data.ok) {
                    throw new Error();
                  }
                })
                .catch((error) => {
                  Swal.showValidationMessage(`OTP Verification failed`);
                });
            },
          });
        }
        if (!response.data.success) {
          toast.error("Email Already Exist", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      })
      .catch((validationErrors) => {
        toast.error(validationErrors.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  return (
    <div className="  bg-white w-96 border-2 rounded-2xl p-7 flex-col flex z-10 shadow-2xl relative">
      <ToastContainer />
      <img src="./image/logo.png" className="pb-4" alt="logo"></img>
      <h3 className="text-lg font-normal text-center pb-5">
        YOUR ACCOUNT FOR
        {/* <br /> */}
        EVERYTHING
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Name"
            required
            className="border  w-full text-base px-2 focus:outline-none focus:border-gray-600 rounded h-9 mb-4"
          />
          <input
            type="number"
            placeholder="Mobile"
            required
            className="border w-full text-base px-2 focus:outline-none focus:border-gray-600 rounded h-9 mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="border  w-full text-base px-2 focus:outline-none focus:border-gray-600 rounded h-9 mb-4"
          />
          <Tooltip title="Password must contain 6 character">
          <input
            type="password"
            placeholder="Password"
            required
            className="border w-80 text-base px-2 focus:outline-none focus:border-gray-600 rounded h-9 mb-4"
            />
            </Tooltip>
          
          {/* <p className="self-start">hshf</p> */}
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="border w-full text-base px-2 focus:outline-none focus:border-gray-600 rounded h-9 mb-4 "
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="rounded-full bg-black text-white w-32 h-9  hover:bg-gray-800 mb-4"
          >
            SignUp
          </button>
        </div>
      </form>
      <span className="text-center font-thin">
        Already a Member?{" "}
        <Link to={"/login"}>
          {" "}
          <span className="font-semibold">Login</span>
        </Link>
      </span>
    </div>
  );
}

export default SignupForm;
