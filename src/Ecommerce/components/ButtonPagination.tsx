import "../styles/ButtonPagination.css"


interface Props {
    numberOfPages:number,
    changePage: (value:number) => void
    page:number
}

export const ButtonPagination = ({numberOfPages,changePage,page}:Props) => {

      

  return (
    <div className="buttonPagination">
       <button 
       className=""
       onClick={() => {
        if(page - 1 == 0 ) return
        changePage(page - 1)
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
       }}
       className="">
        &#10093;
        </button>
    </div>
  )
}
