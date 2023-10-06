import { useForm } from "../../hooks"
import "../styles/Filter.css"

export const Filter = () => {

    const {handleChange,form} = useForm({})

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        console.log(form,e)

    }

  return (
    <form
    onSubmit={handleSubmit} 
    className="filter">
        <input 
        type="text"
        className="filter_input"
        name="search"
        onChange={handleChange} />
        <button>
        <i className='bx bx-search bx-sm filter_icon'></i>
        </button>
    </form>
  )
}
