import { Filter } from '../components/Filter'
import { ListCard } from '../components/ListCard'
import "../styles/SearchPage.css"
import { Card } from '../components/Card';
import { useMemo } from 'react';
import { useFilter } from '../hooks/useFilter';
import { usePagination } from '../hooks/usePagination';
import { ButtonPagination } from '../components/ButtonPagination';



const SearchPage = () => {

 
    const {filterProducts,changeProducts} = useFilter()
    const {finalIndex,initialIndex,itemPage,changePage,page} = usePagination()    
    const numberOfPages = useMemo(() => Math.ceil(filterProducts.length / itemPage.current),[filterProducts])
  

  
    
    
  return (
    <>
    <div className='search'>
      <Filter 
      changePage={changePage}  
      changeProducts={changeProducts}
      />
       <ButtonPagination 
      numberOfPages={numberOfPages}
      changePage={changePage}
      page={page}/>

      <ListCard> 
       {filterProducts.slice(initialIndex,finalIndex).map(product => (
        <Card product={product}/>
       ))}
      </ListCard>

      <ButtonPagination 
      numberOfPages={numberOfPages}
      changePage={changePage}
      page={page}/>

    </div>
    </>
  )
}

export default SearchPage