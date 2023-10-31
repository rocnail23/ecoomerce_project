
import "../styles/Filter.css"

export const Filter = () => {

   

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        console.log(e)

    }

  return (
    <>
    <h3 className="teko filter_title">Searh result</h3>
    <form
    onSubmit={handleSubmit} 
    className="filter">
       <button>
        <i className='bx bx-search bx-sm filter_icon'></i>
        </button>
        <input 
        type="text"
        className="filter_input"
        name="search"
        
        placeholder="enter search term"/>
        <button>cancel</button>
    </form>
    </>
  )
}
