import { useNavigate } from "react-router"
import "../styles/Card.css"
import { ButtonAdd } from "./ButtonAdd"
import { Product } from "../../interfaces/InterfacesForm"
import useCart from "../hooks/useCart"
import { useState, useMemo } from 'react';
import { Heart } from "./Heart"
import { useWish } from "../hooks/useWish"


interface Props {
    product: Product
    className?: string,
    vanish?: boolean
}



export const Card = ({product,className,vanish}: Props) => {
 
    const {description,img,price,title,id} = product
    const {addtoCart,plusCart,productInCart} = useCart()
    const {wishProducts,addOrDeleteWish} = useWish()
    const navigate = useNavigate()

    const shortDescription = useMemo(() => {
        if(description.length > 80){
            return description.slice(0,80) + "..."
        }else {
            return description
        }
    },[])


    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation()
            if(productInCart[product.id]){
                plusCart(product,productInCart[product.id].quantity + 1)
            }else{
                addtoCart(product)
            }
    }

    const  [animation,setAnimation] = useState(false)

    const handleWish = (e:any) => {
        vanish && setAnimation(!animation)
        setTimeout(() => {
            addOrDeleteWish(product)
        },300)
       
    }

    const isWishes = useMemo(() => {
       return !!wishProducts[product.id]
    },[wishProducts])

    console.log("this are cars")

    return (
        <div onClick={() => navigate(`/product/${id}`)} className={`card ${className} ${animation && "card_vanish"}`}>
        <Heart onChange={handleWish} value={isWishes}/>
        <img className="card_image" src={img && img[0]} alt="" />
        <div className="card_content">
        <div className="card_t-p">
        <h2  className="card_title">{title}</h2>
        <span className="card_price">{price}$</span>
        </div>
        <p className="card_description">
        {shortDescription}
        </p>
        <ButtonAdd onClick={handleClick} className="card_btnAdd"/>
        </div>
        </div>
    )

}