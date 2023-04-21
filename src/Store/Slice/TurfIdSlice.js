import { createSlice } from "@reduxjs/toolkit"

const turfIdSlice=createSlice({
    name:'turfId',
    initialState:{
        id:''
    },
    reducers:{
        addTurfId:(state,action)=>{
            state.id=action.payload
        },
        removeTurfId(state,action){
            return {}
        }
    }
       
})

export const {addTurfId,removeTurfId}=turfIdSlice.actions
export const turfReducer=turfIdSlice.reducer