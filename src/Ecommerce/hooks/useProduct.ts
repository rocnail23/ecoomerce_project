import { sweeters } from "../../assets/data"
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux-hooks"
import { setProduct,eliminateProduct,setProducts,updateProduct } from "../../store/slices/product.slice"



const useProduct = () => {

    const dispatch = useAppDispatch()
    const {products,product} = useAppSelector(state => state.product)
    
    const getProducts = async() => {

        dispatch(setProducts(sweeters))

    }

  return {
    products,
    product,

    getProducts

  }

}


export default useProduct