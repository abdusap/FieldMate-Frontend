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

export const getAllTurfApi=async(search,sports,location)=>{
   const resData=await UserBaseApi.get(`/all_turf?search=${search}&sports=${sports}&location=${location}`)
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

export const addReviewApi=async(data)=>{
   const resData=await UserBaseApi.post('/add_review',data)
   return resData
}

export const getAllSports=async()=>{
   const resData=await UserBaseApi.get('/all_sports')
   return resData
}

export const allBookingApi=async(id)=>{
   const resData=await UserBaseApi.get(`/all_booking?id=${id}`)
   return resData
}

export const cancelBookingApi=async(id,update)=>{
   const resData=await UserBaseApi.patch(`/cancel_booking?id=${id}`)
   update()
   return resData
}

export const profileDetailsApi=async(id)=>{
   const resData=await UserBaseApi.get(`/profile?id=${id}`)
   return resData
}

export const profileUpdateApi=async(data)=>{
   const resData=await UserBaseApi.post('/profile',data)
   return resData
}

export const profileimageApi=async(data)=>{
   const resData=await UserBaseApi.post('/profile_image',data)
   return resData
}

export const getReviewsApi=async(id)=>{
   const resData=await UserBaseApi.get(`/review?id=${id}`)
   return resData
}