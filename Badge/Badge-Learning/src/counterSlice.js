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
        }),
        reset:((state)=>{
            state.counter=0
        })

    }
})
export const {incriment,decriment,reset}=counterSlice.actions
export default counterSlice.reducer