import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './login'
import counterReducer from './cart'
import toDoReducer from './component/toDo'


export const store=configureStore({
    reducer:{

        login:loginReducer,
        counter:counterReducer,
        note:toDoReducer,
    }
}) 