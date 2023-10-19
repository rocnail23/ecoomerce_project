
import { Card } from './Card'
import "../styles/ListCard.css"



interface Props {
  products: Product[]
}

export const ListCard = ({products}:Props) => {
  return (
    <div className='listCard animate__animated animate__fadeIn'>
        {products.map((value) => (
            <Card 
            product={value}
             className='bg-g'/>
        ))}
    </div>
  )
}
