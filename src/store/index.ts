import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/product.slice'
import cartSlice  from './slices/cart.slice'
import  switchWish  from './slices/wish.slice'
import authSlice from './slices/auth.slice'
import purchaseSlice from './slices/purchase.slice'

// ...
export const store = configureStore({
  reducer: {
   product: productSlice,
   cart: cartSlice,
   wishList: switchWish,
   auth: authSlice,
   purchase: purchaseSlice
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch