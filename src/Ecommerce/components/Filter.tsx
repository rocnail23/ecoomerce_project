
import "../styles/Filter.css"
import { useFilter } from '../hooks/useFilter';
import {memo} from "react"


interface Props {
  changeProducts: (value:string) => void
  changePage: (value:number) => void
  refpage: React.RefObject<HTMLHeadingElement>
}


export const Filter = memo(({changeProducts,changePage,refpage}:Props) => {

      console.log("hola")
  return (
    <>
    <h3 ref={refpage} className="teko filter_title">Searh result</h3>
    <form
    
    className="filter">
       <button>
        <i className='bx bx-search bx-sm filter_icon'></i>
        </button>
        <input 
        type="text"
        className="filter_input"
        name="filter"
        onChange={(e) => {
          changeProducts(e.target.value)
          changePage(1)
        }}
        placeholder="enter search term"/>
        <button>cancel</button>
    </form>
    </>
  )
}
)