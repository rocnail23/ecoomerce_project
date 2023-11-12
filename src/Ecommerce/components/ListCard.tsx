import "../styles/ListCard.css"




interface Props {
  children: JSX.Element[] | JSX.Element
  
}

export const ListCard = ({children}:Props) => {


 

  
  return (
    
    <div className={`listCard animate__animated "animate__fadeIn"}`}>
       {children}
    </div>
  )
}
