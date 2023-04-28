import { createSlice } from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:'user',
    initialState:{
        id:'',
        name:''
    },
    reducers:{
        addUser:(state,action)=>{
            state=action.payload
        },
        removeUser(state,action){
            return {}
        }
    }
       
})

export const {addUser,removeUser}=userSlice.actions
export const userReducer=userSlice.reducer