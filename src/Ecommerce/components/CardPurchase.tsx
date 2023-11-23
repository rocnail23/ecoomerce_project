import { useMemo } from 'react';
import "../styles/CardPurchase.css"

interface Props {
    products?: {products:{quantity:number,idPurchase:number}[]}
}

export const CardPurchase = ({products}:Props) => {
    if(!products) return

    const quantity = useMemo(() => { 
        let productCuantity:number = 0;
        products.products.map(product => productCuantity += product.quantity)
        return productCuantity
    },[])


  return (
    <div className='cardPurchase shadow'>
        
        <div>
        <h3 className='teko'>{quantity}</h3>
        <p className='teko'>{quantity == 1 ? "product":"Products"}</p>
        </div>
    </div>
  )
}
