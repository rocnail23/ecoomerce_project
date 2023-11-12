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
    addWish: (state, {payload}: PayloadAction<Product>) => {
      state.wishProducts[payload.id] = payload
    },
    deleteWish: (state,{payload}:PayloadAction<Product>) => {
      delete state.wishProducts[payload.id]
    },
    setWishList: (state, {payload}: PayloadAction<{[key:number]: Product}>) => {
          state.wishProducts = payload
    }
  },

})

export const {addWish,deleteWish, setWishList} = wishSlice.actions

// Other code such as selectors can use the imported `RootState` type



export default wishSlice.reducer