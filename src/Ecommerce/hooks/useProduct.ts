import axiosClient from "../../apis/axiosclient"
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux-hooks"
import { setProducts,setLoading } from "../../store/slices/product.slice"

const useProduct = () => {

    const dispatch = useAppDispatch()
    const {products,product,loading} = useAppSelector(state => state.product)
    
    const getProducts = async() => {
        try {
          const {data}  = await axiosClient("/product")
          console.log(data)
          dispatch(setProducts(data.product))
          dispatch(setLoading(false))
        } catch (error) {
          console.log(error)
        }
      
    }

  return {
    products,
    product,
    getProducts,
    loading
  }

}


export default useProduct