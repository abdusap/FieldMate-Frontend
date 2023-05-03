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

export const availableLocationApi=async(id)=>{
   const resData=await UserBaseApi.get(`/available_sports?id=${id}`)
   return resData
}

export const availableSlotsApi=async(turfId,sports,date)=>{
   const resData=await UserBaseApi.get(`/available_slots?turfId=${turfId}&sports=${sports}&date=${date}`)
   return resData
}

export const createOrderApi=async(amount)=>{
   const resData=await UserBaseApi.patch(`/payment/orders?amount=${amount}`)
   return resData
}

export const paymentSuccessApi=async(data)=>{
   const resData=await UserBaseApi.post('/payment/success',data)
   return resData
}

export const getWalletAndPriceApi=async(userId,turfId)=>{
   const resData=await UserBaseApi.get(`/wallet_price?userId=${userId}&turfId=${turfId}`)
   return resData
}

export const bookSlotApi=async(data)=>{
   const resData=await UserBaseApi.post('/book_slot',data)
   return resData
}