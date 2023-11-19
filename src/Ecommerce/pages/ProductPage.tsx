import { useParams } from 'react-router'
import { ImageCard } from '../components/ImageCard'
import "../styles/ProductPage.css"
import { ListCard } from '../components/ListCard'
import { useEffect, useState } from 'react';
import { ButtonAdd } from '../components/ButtonAdd'
import useCart from '../hooks/useCart'
import { Card } from '../components/Card';
import { Product } from '../../interfaces/InterfacesForm';
import useProduct from '../hooks/useProduct';
import axiosClient from '../../apis/axiosclient';

export const ProductPage = () => {

  const {addtoCart} = useCart()
  const {id} = useParams()
  const {products} = useProduct()
  const [product,setProduct] = useState<Product>() 
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior:"instant"
    })
  },[id])

  useEffect(() => {
      axiosClient<Product>(`/product/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))

  },[id])

 const add = () => {
   product && addtoCart(product)
 }

  

  return (
    <>
    <div className='productPage animate__animated animate__fadeIn'>
    <div className='productPage_images'>
      <ImageCard images={product?.Images.map(img => img.url)}/>
    </div>
    <div className='productPage_info'>
      <h2 className='teko'>{product?.title}</h2>
      <h3 className='teko'>{product?.description}</h3>
      <hr/>
      <ButtonAdd onClick={add} className='productPage_btn_add'/>
    </div>
    </div>

    <hr/>
   <div className='productPage_other'>
    <h3 className='teko'>similar products</h3>
   <ListCard>
    {products.slice(0,4).map(product => (
      <Card product={product}/>
))}
    </ListCard>
   </div>
    
    </>
    
  )
}
