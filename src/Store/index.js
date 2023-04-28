import { combineReducers, configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { turfReducer } from "./Slice/TurfIdSlice";
import { userReducer } from "./Slice/UserSlice";


const persistConfig={
    key:'root',
    version:1,
    storage
}


const reducer= combineReducers({
   turf:turfReducer,
   user:userReducer
})

const persistedReducer= persistReducer(persistConfig,reducer)

const store=configureStore({
    reducer:persistedReducer
})

export default store