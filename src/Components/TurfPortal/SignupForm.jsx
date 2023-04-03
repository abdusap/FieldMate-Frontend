import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { allLocationApi, turfSignupApi } from "../../Helpers/TurfApi,";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import turfValidationSchema from "../../Validation/turfLoginValidation";

// import { allLocationApi } from "../../Helpers/AdminApi";


function SignupForm() {
  const [allLocation,setAllLocation]=useState([])
  const {
    register,
    handleSubmit,
    reset ,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(turfValidationSchema),
  });
  
  useEffect(()=>{
   allLocationApi().then((res)=>{
     setAllLocation(res.data.location)
   })
  },[])

  const onHandleSubmit = async (turfData) => {
    console.log(turfData)
    turfSignupApi(turfData).then((res)=>{
      console.log(res)
    })
  }


  return (
    <>
      <div className="w-1/2 flex-grow p-3 hidden md:flex">
        <img src="/image/signin-image.jpg" alt="loginImage" />
      </div>
      <div className="items-center md:items-start flex  flex-grow flex-col gap-5 pt-10 mb-8">
        <h1 className="text-3xl font-bold">Turf Sign up</h1>
          <form  onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="flex flex-col items-center md:items-start pb-2">
        <p className="mx-3 text-sm text-red-700">{errors.name?.message}</p>

          <input
            className=" border-b focus:outline-none border-slate-400 "
            type="text"
            placeholder="Name"
            name="name"
            {...register("name")}
          />
                  <p className="mx-3 text-sm text-red-700">{errors.mobile?.message}</p>

          <input
            className=" border-b focus:outline-none border-slate-400 mt-2 "
            type="number"
            placeholder="Mobile"
            name="mobile"
            {...register("mobile")}
          />
                  <p className="mx-3 text-sm text-red-700">{errors.email?.message}</p>

          <input
            className=" border-b focus:outline-none border-slate-400 mt-2"
            type="email"
            placeholder="Email"
            name="email"
            {...register("email")}
            />
                    <p className="mx-3 text-sm text-red-700">{errors.location?.message}</p>

          {/* <label for="location-dropdown">Select a location:</label> */}
<select id="location-dropdown" name="location" {...register("location")} className=" border-b focus:outline-none border-slate-400 mt-2">
 {/* <option className="" value="" disabled selected>Select a location</option> */}
 {allLocation.map((location)=>{
   return <option className="" key={location._id} value={location._id}>{location.name}</option>
  }) 
  
}
</select>  
<p className="mx-3 text-sm text-red-700">{errors.gio_coordinates?.message}</p>
<input
          className=" border-b focus:outline-none border-slate-400 mt-2"
          type="text"
          placeholder="Gio-coordinates"
          name="gioCoordinates"
            {...register("gioCoordinates")}
          />
                  <p className="mx-3 text-sm text-red-700">{errors.password?.message}</p>

          <input
            className=" border-b focus:outline-none border-slate-400 mt-2 "
            type="password"
            placeholder="Password"
            name="password"
            {...register("password")}
            />
                    <p className="mx-3 text-sm text-red-700">{errors.confirmPassword?.message}</p>

          <input
            className=" border-b focus:outline-none border-slate-400 mt-2 "
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            {...register("confirmPassword")}
            />
        </div>
        <button className="text-white w-fit px-3 py-1 rounded-md bg-black">
          Sign up
        </button>
            </form>
        <Link to={"/turf/login"}>
          <p>Click Here to Login</p>
        </Link>
      </div>
    </>
  );
}

export default SignupForm;
