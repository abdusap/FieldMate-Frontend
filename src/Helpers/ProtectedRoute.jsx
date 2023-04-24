import React, { useEffect, useState } from 'react'
import UserBaseApi from '../Config/UserBaseApi'
import { Outlet, useNavigate } from 'react-router-dom'



function ProtectedRoute({type,redirect}) {
    const [auth,setAuth]=useState(null)
    const token=localStorage.getItem(type)
    const navigate=useNavigate()
    useEffect(()=>{
        if(token){
            UserBaseApi.get(`${type}/jwt`,{
                headers:{
                    Authorization:`Bearer ${token}`,
                },
                params:{role:type}
            }).then((res)=>{
                console.log(res.data.success);
                setAuth(true)
            }).catch((err)=>{
console.log(err.response.data.error.message);
localStorage.removeItem(type);
setAuth(false)
            })
        }else{
            localStorage.removeItem(type);
            setAuth(false)
        }
    },[])
if (auth===null) return
return (auth ? <Outlet /> : navigate(redirect) )
}

export default ProtectedRoute