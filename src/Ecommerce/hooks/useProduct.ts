import axiosClient from "../../apis/axiosclient"
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux-hooks"
import { setProducts } from "../../store/slices/product.slice"
const useProduct = () => {

    const dispatch = useAppDispatch()
    const {products,product} = useAppSelector(state => state.product)
    
    const getProducts = async() => {
        try {
          const {data}  = await axiosClient("/product")
          dispatch(setProducts(data.product))

        } catch (error) {
          console.log(error)
        }
      
    }

  return {
    products,
    product,
    getProducts
  }

}


export default useProduct