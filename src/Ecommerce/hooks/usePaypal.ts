
export const usePaypal = () => {

   


    function onApprove(data:any) {
          return fetch(`http://localhost:4000/api/v1/orders/${data.orderID}/capture`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderID: data.orderID
            })
          })
          .then((response) => response.json())
          .then((orderData) => {
                const name = orderData.payer.name.given_name;
                alert(`Transaction completed by ${name}`);
          });

        }
    
        return {
          
            onApprove,
         
        }

}