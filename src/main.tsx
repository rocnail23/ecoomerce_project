import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { PayPalScriptProvider} from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: "AVbD_hVjQirJf9DZK2Iipfu_mkU3jGnV0dAlyBAvrDcpRB6E_83GC04JrrNFqlVHC_LbY5JOJZEH_ANB"
};

ReactDOM.createRoot(document.getElementById('root')!).render(

 <React.StrictMode>
    <Provider store={store}>
  <PayPalScriptProvider options={initialOptions}>
    <App />
   </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>,
)
