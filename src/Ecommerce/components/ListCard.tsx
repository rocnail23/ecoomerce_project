import "../styles/ListCard.css"




interface Props {
  children: JSX.Element[] | JSX.Element
  className?: string
}

export const ListCard = ({children,className}:Props) => {


 

  
  return (
    
    <div className={`listCard animate__animated animate__fadeIn ${className}`}>
       {children}
    </div>
  )
}
