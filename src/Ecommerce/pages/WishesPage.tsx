import { Card } from "../components/Card";
import { ListCard } from "../components/ListCard"
import { useWish } from "../hooks/useWish"
import "../styles/WishesPage.css"
import {useMemo } from 'react';


export const WishesPage = () => {

  const {wishProducts} = useWish()

  
  const wishes = useMemo(() => Object.values(wishProducts), [wishProducts])


  return (
    <div className="wishesPage">
      <h3 className="title_3 teko">WishList</h3>
      <hr className="m-b2" />
      <ListCard >
        {wishes.map(product => (
         <Card key={product.id} vanish={true}  product={product}/>
        ))}
      </ListCard>
    </div>
  )
}
