import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Product} from '../../interfaces/InterfacesForm';


// Define a type for the slice state
interface WishState {
    wishProducts: {[key:number]: Product}
}


// Define the initial state using that type
const initialState: WishState = {
   wishProducts: {}
}



export const wishSlice = createSlice({
  name: 'cartSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    switchWish: (state, {payload}: PayloadAction<Product>) => {
      console.log("esto es el redux")
     state.wishProducts[payload.id] 
     ?(
      delete state.wishProducts[payload.id] 
     )
     :(
      state.wishProducts[payload.id] = payload
     )
    }
  },
})

export const {switchWish} = wishSlice.actions

// Other code such as selectors can use the imported `RootState` type



export default wishSlice.reducer