import AdminApi from "../Config/AdminBaseApi" 



export const adminLoginApi=async(data)=>{
    const resData=await AdminApi.post("/login",data)
    return resData
}
export const addLocationApi=async(data)=>{
    const resData=await AdminApi.post("/location",data)
    return resData
}
export const addSportsApi=async(data)=>{
    const resData=await AdminApi.post("/sports",data)
    return resData
}

export const getLocationAndSportsApi=async(data)=>{
    const resData=await AdminApi.post("/location-and-sports")
    return resData
}
export const findLocationApi=async(data)=>{
    const resData=await AdminApi.post("/find_location",data)
    return resData
}
export const findSportsApi=async(data)=>{
    const resData=await AdminApi.post("/find_sports",data)
    return resData
}

export const editLocationApi=async(data)=>{
    const resData=await AdminApi.post("/edit_location",data)
    return resData
}

export const EditSportsApi=async(data)=>{
    const resData=await AdminApi.post("/edit_sports",data)
    return resData
}

export const allLocationApi=async(data)=>{
    const resData=await AdminApi.post("/all_location",data)
    return resData
}

export const allTurfDetailForVerifyApi=async(data)=>{
    const resData=await AdminApi.get("/all_turf",data)
    return resData
}
export const acceptTurfApi=async(id)=>{
    const resData=await AdminApi.patch(`/accept_turf?id=${id}`)
    return resData
}
export const rejectTurfApi=async(id)=>{
    const resData=await AdminApi.patch(`/reject_turf?id=${id}`)
    return resData
}
export const blockLocationApi=async(id)=>{
    const resData=await AdminApi.patch(`/block_location?id=${id}`)
    return resData
}

export const blockSportsApi=async(id)=>{
    const resData=await AdminApi.patch(`/block_sports?id=${id}`)
    return resData
}
