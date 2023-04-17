const { createSlice } = require("@reduxjs/toolkit");

const turfIdSlice=createSlice({
    name:'turfId',
    initialState:{},
    reducers:{
        addTurfId(state,action){
            state.value=action.payload
        },
        removeTurfId(state,action){
            return {}
        }
    }
       
})

export const {addTurfId,removeTurfId}=turfIdSlice
export const turfReducer=turfIdSlice.reducer