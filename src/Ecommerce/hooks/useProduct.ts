import axiosClient from "../../apis/axiosclient"
import { CreateProduct, Product } from "../../interfaces/InterfacesForm"
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux-hooks"
import { setProducts,
        setLoading,
        setProduct,
        deleteImg, 
        createProduct,
        eliminateProduct,
        updateProduct,
        createImg} from "../../store/slices/product.slice"
import { uploadImg } from "../../utils/uploadImg"

const useProduct = () => {

    const dispatch = useAppDispatch()

    const {products,product,loading} = useAppSelector(state => state.product)
    
    const getProducts = async() => {
        try {
          const {data}  = await axiosClient("/product")
        
          dispatch(setProducts(data.product))
          dispatch(setLoading(false))
        } catch (error) {
          console.log(error)
        }
      
    }

    const startSetProduct = (product?:Product) => {
        dispatch( setProduct(product))
    }

    const startDeleteImg = async(id:number) => {
          try {
            if(!product) return
            await axiosClient.delete(`/image/${id}`)
            dispatch(deleteImg(id))
          } catch (error) {
            console.log(error)
          }
    }

    const startUploadImg = async(images:FileList, id:number) => {
      try {
        const imgs = await uploadImg(images,id)
        console.log(imgs)
        imgs && dispatch(createImg(imgs))
      } catch (error) {
        console.log(error)
      }
     
    }

    const startCreateProduct = async(product:CreateProduct) => {
         if(!product) return
        try {
          const res = await axiosClient.post<Product>("/product",product)
          dispatch(createProduct(res.data))
          dispatch(setProduct(res.data))
        } catch (error) {
          
        }
    } 

    const startDeleteProduct = async(id:number) => {
        try {
           await axiosClient.delete(`product/${id}`)
           dispatch(eliminateProduct(id))
        } catch (error) {
         console.log(error) 
        }
    }

    const startEditProduct = async(id:number,product:CreateProduct) => {
          try {
            const {data} = await axiosClient.put<Product>(`/product/${id}`,product)
            dispatch(updateProduct(data))
            console.log(data)
          } catch (error) {
            
          }
    }

  return {
    products,
    product,
    getProducts,
    loading,
    startSetProduct,
    startDeleteImg,
    startCreateProduct,
    startDeleteProduct,
    startEditProduct,
    startUploadImg
    
  }

}


export default useProduct