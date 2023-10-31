
import { useAuth } from "../hooks/useAuth"
import "../styles/Message.css"
import { useEffect, useState } from 'react';


export const Message = () => {

    
  const {message,sendMessageFromServer} = useAuth()

  const [ref,setRef] = useState(true) 
 
  useEffect(() => {
    if(!message?.message) return

    setTimeout(() => {
      setRef(false)
    },8000)

    setTimeout(() => {
      sendMessageFromServer({})
      setRef(true)
      },10000)
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
