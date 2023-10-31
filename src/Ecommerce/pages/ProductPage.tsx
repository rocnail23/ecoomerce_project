import { useParams } from 'react-router'
import { sweeters } from '../../assets/data';
import { ImageCard } from '../components/ImageCard'
import "../styles/ProductPage.css"
import { ListCard } from '../components/ListCard'
import { useEffect} from 'react';
import { ButtonAdd } from '../components/ButtonAdd'
import useCart from '../hooks/useCart'
import { Card } from '../components/Card';

export const ProductPage = () => {

  const {addtoCart} = useCart()
  const {id} = useParams()
  const product = sweeters.filter(value => value.id == Number(id))[0]
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior:"instant"
    })
  },[id])

 const add = () => {
   addtoCart(product)
 }

  console.log(product)

  return (
    <>
    <div className='productPage animate__animated animate__fadeIn'>
    <div className='productPage_images'>
      <ImageCard images={product.img}/>
    </div>
    <div className='productPage_info'>
      <h2 className='teko'>{product.title}</h2>
      <h3 className='teko'>{product.description}</h3>
      <hr/>
      <ButtonAdd onClick={add} className='productPage_btn_add'/>
    </div>
    </div>

    <hr/>
   <div className='productPage_other'>
    <h3 className='teko'>similar products</h3>
   <ListCard>
    {sweeters.slice(0,4).map(product => (
      <Card product={product}/>
))}
    </ListCard>
   </div>
    
    </>
    
  )
}
