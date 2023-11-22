import { ListCard } from './ListCard'
import { ImgCard } from './ImgCard'


interface Props {
    Images?: {id:number, url: string}[]
}

export const ProductImages = ({Images}:Props) => {
    if(!Images) return

  
  return (
    <>
    <label className='teko'>Images</label>
          {Images && 
           <ListCard className='list_image'>
          
          
           {Images.map((img) => (
             <ImgCard img={img} />
           ))}
          
        </ListCard>}
    </>
  )
}
