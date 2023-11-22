import "../styles/ButtonAdd.css"

interface Props {

    className?: string
    onClick?: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const ButtonAdd = ({className,onClick}:Props) => {
  return (
    <button onClick={(e) => onClick && onClick(e)} className={`btn_add teko ${className}`}><i className='bx bx-plus'></i></button>
  )
}
