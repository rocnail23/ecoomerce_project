import "../styles/Filter.css"
import {memo} from "react"


interface Props {
  changeProducts: (value:string) => void
  changePage?: (value:number) => void
  className?: string,
  title?: string

}


export const Filter = memo(({changeProducts,changePage,className,title}:Props) => {

     
  return (
    <>
     <div>
    <h3   className="teko filter_title">{title}</h3>
    <form
    
    className={`filter ${className}`}>
       <button>
        <i className='bx bx-search bx-sm filter_icon'></i>
        </button>
        <input 
        type="text"
        className="filter_input"
        name="filter"
        onChange={(e) => {
          changeProducts(e.target.value)
          changePage && changePage(1)
        }}
        placeholder="enter search term"/>
    </form>
   </div>
    </>
  )
}
)