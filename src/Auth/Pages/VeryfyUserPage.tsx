import { useNavigate, useParams } from "react-router"
import "../styles/Register.css"
import { useAuth } from "../hooks/useAuth"
import { Loader } from "../components/Loader"
import { useEffect, useState } from 'react';
import axiosClient from "../../apis/axiosclient";

export const VeryfyUserPage = () => {

  const navigate = useNavigate()
  const  {code} = useParams()
  const {state,startOnlogout} = useAuth()
  const handleClick  = () => {
      navigate("/welcome/login")
  }

  const [isError, setIsError] = useState(false)

  useEffect(() => {
           const validateCode = async() => {
            try {
              await axiosClient.put("/user/validate",{code})
              startOnlogout()
            } catch (error) {
              setIsError(true)
            }   
           }

          validateCode()
          
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  

  const element = state == "checking"
  ? (
    <Loader/>
  )
  :(
    <div className="register">
          <div className="register_welcome">
          <h1>your user has been activated</h1>
          </div>
          <button onClick={handleClick}  className="btn_register-back teko">
              back to loginUser
          </button>
      </div>

  )

  return isError ? <div><h1>hubo un error</h1></div> : element
 
}
