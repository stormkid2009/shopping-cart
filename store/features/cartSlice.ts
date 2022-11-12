import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store'
import {IProduct} from '../../types/index'

// Define a type for the slice state
interface InitialState{
    products:IProduct[]

}

// Define the initial state using that type
const initialState:InitialState = {
    products:[]
}

const cartSlice = createSlice({
    name:'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<IProduct>)=>{
            const index = state.products.findIndex((product)=> product.name === action.payload.name);
            if(index > -1){
                console.log(`item already exist`)
            }else{

                state.products.push(action.payload)
            }
        },
        reset:(state)=>{
            state.products = []
        },
        removeFromCart:(state,action:PayloadAction<IProduct>)=>{
            state.products = state.products.filter((item)=> item.name != action.payload.name)
        },
    }
})

export const {addToCart,reset,removeFromCart} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state:RootState)=> state.cart.products;
export default cartSlice.reducer;