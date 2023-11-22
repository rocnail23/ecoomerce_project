import { useNavigate } from "react-router"
import "../styles/Card.css"
import { ButtonAdd } from "./ButtonAdd"
import { Product } from "../../interfaces/InterfacesForm"
import useCart from "../hooks/useCart"
import { useState, useMemo } from 'react';
import { Heart } from "./Heart"
import { useWish } from "../hooks/useWish"
import useProduct from "../hooks/useProduct"


interface Props {
    product: Product
    className?: string,
    vanish?: boolean
    admin?: boolean
    openModal?: () => void
    classFont?: string 
}



export const Card = ({product,className,vanish,admin=false,openModal,classFont}: Props) => {
 
    const {description,Images,price,title,id} = product
    const {addtoCart,plusCart,productInCart} = useCart()
    const {wishProducts,addOrDeleteWish} = useWish()
    const {startSetProduct,startDeleteProduct} = useProduct()
    const navigate = useNavigate()
   

    const shortDescription = useMemo(() => {
        if(description?.length > 80){
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

    const handleWish = () => {
        vanish && setAnimation(!animation)
        setTimeout(() => {
            addOrDeleteWish(product)
        },300)
       
    }

    const isWishes = useMemo(() => {
       return !!wishProducts[product.id]
    },[wishProducts])

   

    const handleEdit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation()
        
            startSetProduct(product)
            openModal && openModal()
    }

    const handleDelete = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
       await startDeleteProduct(id)
    }
    

    return (
        <div onClick={() => navigate(`/product/${id}`)} className={` card ${!vanish && "animate__animated animate__fadeIn"} ${className} ${animation && "card_vanish"}`}>
         {!admin && <Heart onChange={handleWish} value={isWishes}/>}
        <img className="card_image animate__animated animate__fadeIn" src={Images?.[0]?.url} alt="" />
        <div className="card_content">
        <div className="card_t-p">
        <h2  className="card_title">{title}</h2>
        <span className="card_price">{price}$</span>
        </div>
        <div className={admin ? "" : "card_footer"}>


            {admin ? (
             
                
                <div className="card_btn_admin">
            <button onClick={handleDelete}><i className='bx bx-trash bx-md btn-hover'></i></button>
            <button onClick={handleEdit} className="card_btnEdit teko">edit Product</button>
                   </div>
          

            ):(
            <>
            <p className={`${classFont}`}>
            {shortDescription}
            </p>
      
           
    
         
                <ButtonAdd onClick={handleClick} className="card_btnAdd"/>
            </>

            )}
       
        </div>
        </div>
        </div>
    )

}