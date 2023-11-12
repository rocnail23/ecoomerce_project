import { RefObject } from "react"
import "../styles/ButtonPagination.css"


interface Props {
    numberOfPages:number,
    changePage: (value:number) => void
    page:number
    refFilter: RefObject<HTMLDivElement>
}

export const ButtonPagination = ({numberOfPages,changePage,page,refFilter}:Props) => {

        const sum = (value:number) => {
              if(page + value > numberOfPages) return 
              changePage(page + value)
              refFilter.current?.scrollIntoView({behavior:"smooth"})
        }

        const rest = (value:number) => {
               if(page - value == 0) return
               changePage(page - value)
               refFilter.current?.scrollIntoView({behavior:"smooth"})
        } 

  return (
    <div className="buttonPagination">
       <button 
       className=""
       onClick={() => rest(1)}
       >
        &#10092;
        </button>
       <span 
       className="number">
        {page}
        </span>
       <button 
       onClick={() => sum(1)}
       className="">
        &#10093;
        </button>
    </div>
  )
}
