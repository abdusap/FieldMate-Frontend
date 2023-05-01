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

export const getLocationAndSportsApi=async()=>{
   const resData=await UserBaseApi.get("/all_locaton_sports")
   return resData
}

export const getAllTurfApi=async()=>{
   const resData=await UserBaseApi.get("/all_turf")
   return resData
}

export const turfDetailsApi=async(id)=>{
   const resData=await UserBaseApi.get(`/turf_details?id=${id}`)
   return resData
}

export const availableLocationApi=async()=>{
   const resData=await UserBaseApi.get("/available_location")
   return resData
}