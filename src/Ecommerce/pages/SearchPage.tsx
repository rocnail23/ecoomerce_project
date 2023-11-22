import { Filter } from '../components/Filter'
import { ListCard } from '../components/ListCard'
import "../styles/SearchPage.css"
import { Card } from '../components/Card';
import {  useMemo, useRef } from 'react';
import { useFilter } from '../hooks/useFilter';
import { usePagination } from '../hooks/usePagination';
import { ButtonPagination } from '../components/ButtonPagination';
import useProduct from '../hooks/useProduct';
import { Loader } from '../../Auth/components/Loader';



const SearchPage = () => {

 
    const {filterProducts,changeProducts} = useFilter()
    const {finalIndex,initialIndex,itemPage,changePage,page} = usePagination()    
    const numberOfPages:number = useMemo(() => Math.ceil(filterProducts.length / itemPage.current),[filterProducts])
    const {loading} = useProduct()
    const refFilter = useRef<HTMLDivElement>(null)

  
    
    
  return (
    <>
    <div ref={refFilter} className='search'>
      <Filter 
      changePage={changePage}  
      changeProducts={changeProducts}
      title="search results"
      className="m-b2"
      />
      {loading
      ? (
        <Loader/>
      )
      :(
        <ListCard> 
       {filterProducts.slice(initialIndex,finalIndex).map(product => (
        <Card  key={product.id} product={product} classFont='search_card_font'/>
       ))}
      </ListCard>
      )}

      <ButtonPagination 
      numberOfPages={numberOfPages}
      changePage={changePage}
      page={page}
      refFilter={refFilter}/>
    </div>
    </>
  )
}

export default SearchPage