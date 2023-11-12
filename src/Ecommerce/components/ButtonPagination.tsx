import "../styles/ButtonPagination.css"
import { useEffect } from 'react';

interface Props {
    numberOfPages:number,
    changePage: (value:number) => void
    refPage: React.RefObject<HTMLDivElement>
    page:number
}

export const ButtonPagination = ({numberOfPages,changePage,refPage,page}:Props) => {

      

  return (
    <div className="buttonPagination">
       <button 
       className=""
       onClick={() => {
        if(page - 1 == 0 ) return
        changePage(page - 1)
        refPage.current?.scrollIntoView({behavior:"smooth"})  
       }}
       >
        &#10092;
        </button>
       <span 
       className="number">
        {page}
        </span>
       <button 
       onClick={() => {
        if(page + 1 > numberOfPages) return
        changePage(page + 1)
        refPage.current?.scrollIntoView({behavior:"smooth"}) 
       }}
       className="">
        &#10093;
        </button>
    </div>
  )
}