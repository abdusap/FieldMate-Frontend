import TurfBaseApi from "../Config/TurfBaseApi";




export const allLocationApi=async(data)=>{
    const resData=await TurfBaseApi.get("/all_location",data)
    return resData
}

export const turfSignupApi=async(data)=>{
    const resData=await TurfBaseApi.post("/signup",data)
    return resData
}

export const turfOtpApi=async(data,config)=>{
    const resData=await TurfBaseApi.post("/otp",data)
    return resData
}

export const turfDetailsApi=async(data,confi)=>{
    const resData=await TurfBaseApi.post("/turf_details",data)
    return resData
}
export const getAllDetailsApi=async(data)=>{
    const resData=await TurfBaseApi.get(`/all_turf_details?id=${data}`)
    return resData
}
export const addRulesApi=async(data)=>{
    const resData=await TurfBaseApi.post("/add_rules",data)
    return resData
}
export const addAmenityApi=async(data)=>{
    const resData=await TurfBaseApi.post("/add_amenity",data)
    return resData
}

export const loginApi=async(data)=>{
    const resData =await TurfBaseApi.post('/login',data)
    return resData
}
export const addSlotApi=async(data)=>{
    const resData =await TurfBaseApi.post('/add_slot',data)
    return resData
}
export const getSlotApi=async(data)=>{
    const resData =await TurfBaseApi.get(`/get_slot?id=${data}`)
    return resData
}
