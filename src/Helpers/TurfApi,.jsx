import TurfBaseApi from "../Config/TurfBaseApi";

export const allLocationApi=async(data)=>{
    const resData=await TurfBaseApi.get("/all_location",data)
    return resData
}

export const turfSignupApi=async(data)=>{
    const resData=await TurfBaseApi.post("/signup",data)
    return resData
}