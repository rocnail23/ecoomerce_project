import { sweeters } from '../../assets/data'
import { Filter } from '../components/Filter'
import { ListCard } from '../components/ListCard'
import "../styles/SearchPage.css"

const SearchPage = () => {
  return (
    <>
    <div className='search'>
      <Filter/>
      <ListCard products={sweeters}/>
    </div>
    </>
  )
}

export default SearchPage