
import { Card } from './Card'
import "../styles/ListCard.css"
import { Product } from '../../interfaces/InterfacesForm'



interface Props {
  children: JSX.Element[] | JSX.Element
}

export const ListCard = ({children}:Props) => {
  return (
    <div className='listCard animate__animated animate__fadeIn'>
       {children}
    </div>
  )
}
