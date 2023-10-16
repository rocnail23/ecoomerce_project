
import { sweeters } from '../../assets/data'
import { Card } from './Card'
import "../styles/ListCard.css"

const card = [
    ...sweeters,
]

export const ListCard = () => {
  return (
    <div className='listCard'>
        {card.map((value) => (
            <Card 
            product={value}
             className='bg-g'/>
        ))}
    </div>
  )
}
