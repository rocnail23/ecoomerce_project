import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../interfaces/InterfacesForm'


// Define a type for the slice state
interface ProductState {
  products: Product[],
  product?: Product,
  loading: boolean
}

// Define the initial state using that type
const initialState: ProductState = {
  products: [],
  product: undefined,
  loading:true
}

export const productSlice = createSlice({
  name: 'ProductSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   setProducts: (state, {payload}:PayloadAction<Product[]>) => {
        state.products =  payload
   },
   setProduct: (state, {payload}:PayloadAction<number>) => {
        state.products = state.products.filter(product => product.id == payload)
   },
   eliminateProduct: (state, {payload}:PayloadAction<number>) => {
        state.products = state.products.filter(product => product.id != payload)
   },
   updateProduct: (state, {payload}:PayloadAction<Product>) => {
      state.products = state.products.map(product => product.id == payload.id ? payload : product)
   },
   setLoading: (state,{payload}:PayloadAction<boolean>) => {
    state.loading = payload
 }
  },
})

export const {setProducts,setProduct,eliminateProduct,updateProduct,setLoading} = productSlice.actions

// Other code such as selectors can use the imported `RootState` type



export default productSlice.reducer