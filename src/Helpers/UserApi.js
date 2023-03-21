// import axios from "axios";
import axiosUser from "../Config/Api";

export const signupApi=(data)=>{
    axiosUser.post("/signup",data)
}