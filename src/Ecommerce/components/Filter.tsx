import "../styles/Filter.css"
import {memo} from "react"


interface Props {
  changeProducts: (value:string) => void
  changePage: (value:number) => void
}


export const Filter = memo(({changeProducts,changePage}:Props) => {

     
  return (
    <>
    <h3   className="teko filter_title">Searh result</h3>
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