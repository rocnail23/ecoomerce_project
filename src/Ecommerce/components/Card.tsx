import { useNavigate } from "react-router"
import "../styles/Card.css"


interface Props {
    product: Product
    className?: string
}



export const Card = ({product,className}: Props) => {
 
    const {description,img,price,title,id} = product

    const shortDescription = () => {

        if(description.length > 80){
            return description.slice(0,80) + "..."
        }else {
            return description
        }

    }
    
    const navigate = useNavigate()
 
    return (
        <div onClick={() => navigate(`/product/${id}`)} className={`card ${className}`}>
        <img className="card_image" src={img[0]} alt="" />
        <div className="card_content">
        <div className="card_t-p">
        <h2 className="card_title">{title}</h2>
        <span className="card_price">{price}$</span>
        </div>
        <p className="card_description">
        {shortDescription()}
        </p>
        </div>
        </div>
    )

}