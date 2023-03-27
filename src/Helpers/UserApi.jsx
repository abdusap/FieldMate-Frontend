// import axios from "axios";
import axiosUser from "../Config/Api";

export const signupApi=async(data)=>{
   const resData =await axiosUser.post("/signup",data)
   return resData
}

export const loginApi=async(data)=>{
   const resData=await axiosUser.post("/login",data)
   return resData
}