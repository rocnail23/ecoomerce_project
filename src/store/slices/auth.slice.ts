import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Message, User } from '../../interfaces/InterfacesForm';



// Define a type for the slice state
interface AuthState {
    state:  'checking' | 'authenticated' | 'not-authenticated'
    user: User,
    message?: Message,
}

// Define the initial state using that type
const initialState: AuthState = {
    state: "authenticated",
    user: {},
    message: {}   
}

export const authSlice = createSlice({
  name: 'ProductSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state,{payload}:PayloadAction<User>) => {
        state.state = "authenticated"
        state.user = payload,
        state.message = {message:"login successful", category: "primary_alert"}
    },
    onLogout: (state,{payload}: PayloadAction<Message>) => {
      state.state = "not-authenticated",
      state.user = {},
      state.message = payload
    },
    
    setMessage: (state,{payload}: PayloadAction<Message>) => {
        state.message = payload
    },
    checking : (state) => {
      state.state = "checking"
    }
  }

})

export const {checking,setMessage,login,onLogout} = authSlice.actions

// Other code such as selectors can use the imported `RootState` type



export default authSlice.reducer