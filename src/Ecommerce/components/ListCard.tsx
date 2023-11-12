
import { useEffect, useRef, useState } from "react"
import { Product } from "../../interfaces/InterfacesForm"
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
