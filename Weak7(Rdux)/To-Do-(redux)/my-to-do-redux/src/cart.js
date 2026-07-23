import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter'
import noteReducer from './component/toDo'
export const store=configureStore({
    reducer:{
        counter:counterReducer,
        note:noteReducer,
    }
})