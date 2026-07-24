import { createSlice } from "@reduxjs/toolkit";

const initialState={
    login:false
}
const log=createSlice({
    name:'Login',
    initialState,
  reducers:{
    doLogin:((state,action)=>{
        state.login=true
    }),
    doLogout:((state,action)=>{
        state.login=false;
    })
  }
})
export  const {doLogin,doLogout}=log.actions;
export default log.reducer;


