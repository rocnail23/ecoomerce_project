import axiosClient from "../../apis/axiosclient";
import { Product, ProductCart } from "../../interfaces/InterfacesForm"
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux-hooks"
import { SetIsOpen, addCart,getPrice,minusCart as minusProduct, setCart } from "../../store/slices/cart.slice"






const useCart = () => {

    const {isOpen,productInCart,priceCart} = useAppSelector(data => data.cart)
    const dispatch = useAppDispatch()

    const switchCard = () => {
        dispatch(SetIsOpen())
    }

    const getMount = () => {
        let price = 0;

        Object.entries(productInCart).map(([,value]) => {
            const {Product:{price:mount},quantity} = value
            price += mount * quantity
        })
      
       dispatch(getPrice(Number(price.toFixed(2))))
    }
   
    const getCart = async() => {
        try {
            const {data} = await axiosClient<ProductCart[]>("/cart")
            const cart:{[key:number]:ProductCart} = {}
            for(let product of data){
                cart[product.Product.id] = product
            }
            
            dispatch(setCart(cart))
           
        } catch (error) {
            console.log(error)
        }
    }

    const plusCart = async(product:Product,value:number) => {
        await axiosClient.put(`/cart/${product.id}`,{
            value
        })
        dispatch(addCart(product))
    }

    const addtoCart = async(product:Product) => {
         await axiosClient.post(`/cart/${product.id}`)
         dispatch(addCart(product))
    }

    const minusCart = async(product:Product,value:number) => {
       try {
        if(value == 0){
            console.log(value)
            await axiosClient.delete(`/cart/${product.id}`)
        }else{
            await axiosClient.put(`/cart/${product.id}`,{
                value
            })
        }
        dispatch(minusProduct(product))
       } catch (error) {
        console.log(error)
       }
    }
  
    return {
        plusCart,
        productInCart,
        minusCart,
        getMount,
        isOpen,
        priceCart,
        switchCard,
        getCart,
        addtoCart
    }

}

export default useCart