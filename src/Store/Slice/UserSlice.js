import { createSlice } from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:'user',
    initialState:{
        id:'',
        name:''
    },
    reducers:{
        addUser:(state,action)=>{
            const { id, name } = action.payload;
            state.id = id;
            state.name = name;
        },
        removeUser(state,action){
            return {}
        }
    }
       
})

export const {addUser,removeUser}=userSlice.actions
export const userReducer=userSlice.reducer