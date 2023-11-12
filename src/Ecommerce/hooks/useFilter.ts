import useProduct from "./useProduct"
import { useState, useEffect } from 'react';

export const useFilter = () => {


    const {products} = useProduct()

    const [filterProducts, setFilterProducts] = useState(products)
  
    useEffect(() => {
        setFilterProducts(products)
    },[products])
  
    const changeProducts = (value:string) => {
      const newProducts = products.filter(product => product.title.includes(value))
      setFilterProducts(newProducts)
    }

     return {
        filterProducts,
        changeProducts
     }

}