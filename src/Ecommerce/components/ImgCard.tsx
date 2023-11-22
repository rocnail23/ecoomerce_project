import useProduct from "../hooks/useProduct"
import "../styles/ImgCard.css"

interface Props {
    img: {id:number, url:string}
}

export const ImgCard = ({img}:Props) => {

    const {startDeleteImg} = useProduct()

    if(!img) return
    const {id,url} = img
    
    const handleClick = () => {
            startDeleteImg(id)
    }

  return (
    <div onClick={handleClick} className="imgCard">
        <img src={url} alt="product" />
        <button type="button"><i className='bx bx-trash bx-md'></i></button>
    </div>
  )
}
