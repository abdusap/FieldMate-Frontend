// import axios from "axios";
// import UserBaseApi from "../Config/Api";
import UserBaseApi from "../Config/UserBaseApi"

export const signupApi=async(data)=>{
   const resData =await UserBaseApi.post("/signup",data)
   return resData
}

export const loginApi=async(data)=>{
   const resData=await UserBaseApi.post("/login",data)
   return resData
}