import axiosClient from "../../apis/axiosclient";
import useCart from "./useCart";
import { usePurchase } from "./usePurchase";

export const usePaypal = () => {

   const {resetCart} = useCart()
   const {startSetPurchase} = usePurchase()


    function onApprove(data:any) {
          return fetch(`${import.meta.env.VITE_URL_API}/orders/${data.orderID}/capture`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderID: data.orderID
            })
          })
          .then((response) => response.json())
          .then(async(orderData) => {
                
                const name = orderData.payer.name.given_name;
                const respond = await axiosClient.post("/purchase")
                resetCart()
                startSetPurchase(respond.data)
            
                alert(`Transaction completed by ${name}`);
          });

        }
    
        return {
          
            onApprove,
         
        }

}