import { useAppSelector } from "../../store/hooks/redux-hooks"
import { CardPurchase } from "../components/CardPurchase"
import { ListCard } from "../components/ListCard"


export const PurcharsePage = () => {
  const {purchases} = useAppSelector(state => state.purchase)
  
  return (
    <div className="animate__animated animate__fadeIn wishesPage">
    <h3 className="title_3 teko">purchases</h3>
    <hr className="m-b2" />
     <ListCard>
        {purchases?.map(products => {
           return <CardPurchase
           key={products.products[0].idPurchase}
           products={products}
            />
        })} 
     </ListCard>
  </div>
  )
}
