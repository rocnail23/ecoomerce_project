import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product, ProductCart } from '../../interfaces/InterfacesForm';


// Define a type for the slice state
interface CartState {
  isOpen: boolean,
  productInCart: {[key:number] : ProductCart},
  priceCart: number 
}

// Define the initial state using that type
const initialState: CartState = {
  isOpen: false,
  productInCart: {},
  priceCart: 0.00
}



export const cartSlice = createSlice({
  name: 'cartSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   SetIsOpen: (state) => {
    state.isOpen = !state.isOpen
   },
   addCart: (state,{payload}: PayloadAction<Product>) => {
    if(state.productInCart[payload.id]){
      state.productInCart[payload.id].quantity++
    }else{
      state.productInCart[payload.id] = {product:payload,quantity:1}
    }
   },
   minusCart:(state,{payload}:PayloadAction<Product>) => {
       if(state.productInCart[payload.id].quantity == 1){
        delete state.productInCart[payload.id]
       }else{
        state.productInCart[payload.id].quantity--
       }
   },
   getPrice: (state,{payload}: PayloadAction<number>) => {
      state.priceCart = payload
   }
  },
})

export const {SetIsOpen,addCart,minusCart,getPrice} = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type



export default cartSlice.reducer