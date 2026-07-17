import {createSlice} from '@reduxjs/toolkit'

const intialState={
    cartList:[],
    cartCount:0,
};

const CartSlice=createSlice({
    name:"cart",
     initialState:intialState,
     reducers:{
        addtoCart:(state)=>{
            state.cartCount=1;
        },
        incriment:(state)=>{
            state.cartCount +=1;
        },
        decrement:(state)=>{
            state.cartCount -=1;
        },

     }
})

export const {incriment,decrement,addtoCart}=CartSlice.actions;
export default CartSlice.reducer