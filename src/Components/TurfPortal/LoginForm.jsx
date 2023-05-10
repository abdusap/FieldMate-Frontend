import React from "react";
import { Link, useNavigate } from "react-router-dom";
import turfLoginValidation from "../../Validation/turfLoginValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginApi } from "../../Helpers/TurfApi,";
import { setTurfToken } from "../../Authentication/StoreAuthToken";
import { useDispatch } from "react-redux";
import { addTurfId } from "../../Store/Slice/TurfIdSlice";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    turfLoginValidation
      .validate(data)
      .then((validatedData) => {
        loginApi(validatedData)
          .then((res) => {
            const token = res.data.token;
            setTurfToken(token);
            const details = res.data.account;
            const id = details._id;
            console.log(id);
            dispatch(addTurfId(id));

            navigate("/turf/dashboard");
          })
          .catch((err) => {
            console.log(err.response.data.error.message);
            toast.error(err.response.data.error.message, {
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
      })
      .catch((validationError) => {
        toast.error(validationError.message, {
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
    <>
      <div className="w-1/2 flex-grow p-3 hidden md:flex">
        <img src="/image/signin-image.jpg" alt="loginImage" />
      </div>
      <div className="items-center md:items-start flex w-1/2 flex-grow flex-col gap-5 pt-10">
        <h1 className="text-3xl font-bold">Turf Login</h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center md:items-start">
            <input
              className=" border-b focus:outline-none border-slate-400 mt-7"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className=" border-b focus:outline-none border-slate-400 mt-4 "
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <button
            type="submit"
            className="text-white w-fit px-3 py-1 mt-2 rounded-md bg-black"
          >
            Login
          </button>
        </form>
        <Link to={"/turf/signup"}>
          <p>Click Here to Signup</p>
        </Link>
      </div>
    </>
  );
}

export default LoginForm;
