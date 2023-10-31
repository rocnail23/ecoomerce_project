import { Product } from "../../interfaces/InterfacesForm"
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux-hooks"
import { SetIsOpen, addCart,getPrice,minusCart } from "../../store/slices/cart.slice"
import { useEffect } from 'react';




const useCart = () => {

    const {isOpen,productInCart,priceCart} = useAppSelector(data => data.cart)
    const dispatch = useAppDispatch()

    const switchCard = () => {
        dispatch(SetIsOpen())
    }

    const getMount = () => {
        let price = 0;

        Object.entries(productInCart).map(([,value]) => {
            const {product:{price:mount},quantity} = value
            price += mount * quantity
        })
       console.log("hola")

       dispatch(getPrice(Number(price.toFixed(2))))
    }

    

    const addtoCart = (product:Product) => {
        dispatch(addCart(product))
    }

    const deleteCart = (product:Product) => {
        dispatch(minusCart(product))
    }
  
    return {
        addtoCart,
        productInCart,
        deleteCart,
        getMount,
        isOpen,
        priceCart,
        switchCard,
    }

}

export default useCart