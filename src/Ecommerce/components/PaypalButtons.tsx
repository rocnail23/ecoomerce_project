import { PayPalButtons , usePayPalScriptReducer } from "@paypal/react-paypal-js"
import { usePaypal } from "../hooks/usePaypal";
import { useAppSelector } from "../../store/hooks/redux-hooks";
import { useEffect, useMemo } from 'react';
import axios from "axios";
import axiosClient from "../../apis/axiosclient";


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
    const respond = await axiosClient.post("/orders",{priceCart:mount},{
        headers:{
            "Content-Type" : "application/json"
        }
       })
       
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
