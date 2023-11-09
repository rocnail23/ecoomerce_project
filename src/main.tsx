import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { PayPalScriptProvider} from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: "AapK_VyurJbO53ZqJInelhRPNjKmO4sbpAA-jVMaxvdQRVhLLlo4uYM8-7AIMeW0yI8PgI8RRSb9H0er"
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
