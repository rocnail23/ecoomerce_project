import useProduct from '../hooks/useProduct'
import { Filter } from '../components/Filter'
import { ListCard } from '../components/ListCard'
import "../styles/SearchPage.css"
import { Product } from '../../interfaces/InterfacesForm';
import { Card } from '../components/Card';

const SearchPage = () => {

  const {products} = useProduct()
  

  return (
    <>
    <div className='search'>
      <Filter/>
      <ListCard> 
       {products.map(product => (
        <Card product={product}/>
       ))}
      </ListCard>
    </div>
    </>
  )
}

export default SearchPage