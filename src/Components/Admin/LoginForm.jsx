import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import turfLoginValidation from "../../Validation/turfLoginValidation";
import { adminLoginApi } from "../../Helpers/AdminApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setAdminToken } from "../../Authentication/StoreAuthToken";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(turfLoginValidation),
  });

  const onHandleSubmit = (data) => {
    adminLoginApi(data)
      .then((res) => {
        console.log(res.data.success);
        const token = res.data.token;
        setAdminToken(token);
        navigate("/admin/dashboard");
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
  };
  return (
    <>
      <div className="w-1/2 flex-grow p-3 hidden md:flex">
        <img src="/image/admin image.jpg" alt="adminImage" />
      </div>
      <div className="items-center md:items-start self-center flex w-1/2 flex-grow flex-col gap-5 my-2">
        <h1 className="text-3xl font-bold">Admin Login</h1>
        <ToastContainer />
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="flex flex-col items-center md:items-start">
            <input
              className=" border-b focus:outline-none border-slate-400 mt-7"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <p className="mx-3 text-sm text-red-700">{errors.email?.message}</p>
            <input
              className=" border-b focus:outline-none border-slate-400 mt-4 "
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <p className="mx-3 text-sm text-red-700">
              {errors.password?.message}
            </p>
          </div>
          <button className="text-white w-fit px-3 py-1 mt-2 rounded-md bg-black">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
