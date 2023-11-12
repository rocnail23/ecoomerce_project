import { Filter } from '../components/Filter'
import { ListCard } from '../components/ListCard'
import "../styles/SearchPage.css"
import { Card } from '../components/Card';
import { useRef,useMemo,useCallback} from 'react';
import { useFilter } from '../hooks/useFilter';
import { usePagination } from '../hooks/usePagination';
import { ButtonPagination } from '../components/ButtonPagination';



const SearchPage = () => {

 
    const {filterProducts,changeProducts:cb} = useFilter()
    const {finalIndex,initialIndex,itemPage,changePage:cb2,page} = usePagination()
    
    const numberOfPages = useMemo(() => Math.ceil(filterProducts.length / itemPage),[filterProducts])
    const refpage = useRef<HTMLHeadingElement>(null)

    const changeProducts = useCallback(
      (value:string) => {
         cb(value)
      },
      [],
    )

    const changePage = useCallback((value:number) => {
           cb2(value)
    },[])
    
    
  return (
    <>
    <div className='search'>
      <Filter 
      changePage={changePage}  
      changeProducts={changeProducts}
      refpage={refpage}
      />
      <ListCard> 
       {filterProducts.slice(initialIndex,finalIndex).map(product => (
        <Card product={product}/>
       ))}
      </ListCard>
      <ButtonPagination 
      numberOfPages={numberOfPages}
      changePage={changePage}
      refPage={refpage}
      page={page}/>
    </div>
    </>
  )
}

export default SearchPage