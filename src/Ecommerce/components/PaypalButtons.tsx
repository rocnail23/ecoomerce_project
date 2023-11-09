import { PayPalButtons , usePayPalScriptReducer } from "@paypal/react-paypal-js"
import { usePaypal } from "../hooks/usePaypal";
import { useAppSelector } from "../../store/hooks/redux-hooks";
import { useEffect, useMemo } from 'react';
import axios from "axios";


export const PaypalButton = () => {

    const [{ options }, dispath] = usePayPalScriptReducer();
    const {onApprove} = usePaypal()
    const {priceCart} = useAppSelector(data => data.cart)

    const mount = useMemo(() => priceCart,[priceCart])
    useEffect(() => {
      dispath({
        type: "resetOptions",
        value: {
          ...options
        }
      })
    },[priceCart])


    const createOrder = async() => {
    const respond = await axios.post("http://localhost:4000/api/v1/orders",{priceCart:mount.toString()},{
        headers:{
            "Content-Type" : "application/json"
        }
       })
        console.log(respond.data.id)
       return respond.data.id
   }

   
  return (
    <>
      <PayPalButtons 
      style={{ layout: "vertical" }}
      disabled={mount == 0}
      
      createOrder={createOrder}
      onApprove={onApprove} 
      />
    </>
  )
}
