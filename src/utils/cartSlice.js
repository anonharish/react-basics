import { createSlice } from "@reduxjs/toolkit";

const cartItems=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
})
export default cartItems.reducer;
export const{addItem,clearCart} = cartItems.actions;