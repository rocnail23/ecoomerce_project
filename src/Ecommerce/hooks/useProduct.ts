import axiosClient from "../../apis/axiosclient"
import { sweeters } from "../../assets/data"
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux-hooks"
import { setProduct,eliminateProduct,setProducts,updateProduct } from "../../store/slices/product.slice"



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