import React from 'react'
import { useState, useEffect } from 'react';

interface Props  {
    value ?: boolean,
    onChange?: (value:boolean) =>  void
}

export const Heart = ({value,onChange}:Props) => {

    const [favorite,setFavorite] = useState(value)
    
    useEffect(() => {
        setFavorite(value)
    },[value])

    const changeState = (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.stopPropagation()
        const newValue = !favorite
        !value && setFavorite(newValue)
        onChange && onChange(newValue)
    }

  return (
    <div onClick={changeState}  className="card_circle-heart">
        {
            favorite ? (
                <i 
                style={{color:"red",marginTop:"3px"}}
                className={`bx bxs-heart bx-md animate__animated animate__fadeIn`}>
                </i>
            ):(
                <i 
                style={{color:"red",marginTop:"3px"}}
                className={`bx bx-heart bx-md animate__animated animate__fadeIn`}>
                </i>
            )
        }
       
    </div>
  )
}
