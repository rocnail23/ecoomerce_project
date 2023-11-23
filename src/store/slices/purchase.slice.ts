import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {  Purchase } from '../../interfaces/InterfacesForm';




// Define a type for the slice state
interface PurchaseState {
  purchases?: Purchase[]
}

// Define the initial state using that type
const initialState: PurchaseState = {
   purchases: []
}

export const purchaseSlice = createSlice({
  name: 'purchaseSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
     setPurchase: (state, {payload}:PayloadAction<Purchase[]>) => {
        state.purchases = payload
     }
  }

})

export const {setPurchase} = purchaseSlice.actions

// Other code such as selectors can use the imported `RootState` type



export default purchaseSlice.reducer