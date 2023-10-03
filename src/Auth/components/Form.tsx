import { useState } from "react"
import { Register } from "./Register"
import { Login } from "./Login"



export const Form = () => {

  const [showForm, setShowForm] = useState(true)

  const changeForm = () => {
    setShowForm(value => !value)
  }

  
  if(showForm){
    return (<Register
    changeForm={changeForm}/>)
  }else{
   return ( <Login
    changeForm={changeForm}/>)
  }
}
