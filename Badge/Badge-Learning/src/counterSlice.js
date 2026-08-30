import {createSlice} from '@reduxjs/toolkit' 

const initialState={
    counter:0
}
const counterSlice=createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        incriment:((state,action)=>{
            state.counter+=action.payload
        }),
         decriment:((state)=>{
            state.counter-=1
        })

    }
})
export const {incriment,decriment}=counterSlice.actions
export default counterSlice.reducer