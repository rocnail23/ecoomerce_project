
import { useAuth } from "../hooks/useAuth"
import "../styles/Message.css"
import { useEffect, useState } from 'react';


export const Message = () => {

    
  const {message,sendMessageFromServer} = useAuth()
  const [ref,setRef] = useState(true) 
  const [isShow, setIsShow] = useState(false)
 
  useEffect(() => {
    if(isShow) return
    if(!message?.message) return
    setIsShow(true)
    setTimeout(() => {
      setRef(false)
    },5000)

    setTimeout(() => {
      sendMessageFromServer({})
      setRef(true)
      setIsShow(false)
      },5300)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[message])

  if(!message?.message) return
 

  return (
    <div 
    className={`message titi ${message.category} animate__animated 
    ${ref ? "animate__backInRight":"animate__backOutRight"}`}
     >{message.message}</div>
  )
}
