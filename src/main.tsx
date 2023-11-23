import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { PayPalScriptProvider} from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: "AaDFMXGnqcdjutVC5tsp3ND89_JT0MsoNf5VDESYpoFZ-u8hx0fNd2RiGiPXMe_Q4YZaa8TVUouNuIIf"
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
