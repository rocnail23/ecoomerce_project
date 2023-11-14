
import axiosClient from "../../apis/axiosclient"
import { Login, Message, User } from "../../interfaces/InterfacesForm"
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux-hooks"
import { setMessage,checking, onLogout, login } from "../../store/slices/auth.slice"

export const useAuth = () => {
 const {message,state,user} = useAppSelector(data => data.auth)
 

 const dispatch = useAppDispatch()

 const sendMessageFromServer = (message:Message) => {
    dispatch(setMessage(message))
 }

 const startChecking = () => {
    dispatch(checking())
 }

 const startOnlogout = () => {
   dispatch(onLogout({}))
 }

 const startLogin = async(value:Login) => {
     try {
      startChecking()
      const {data} = await axiosClient.post<{token:string,user:User}>("/user/auth",value)
      
      const {user:{email,name,valid,role}} = data
      const body = {
         email,
         name,
         valid,
         role
      }
      localStorage.setItem('token',data.token)
      dispatch(login(body))      
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     } catch (error:any) {
      startOnlogout()
      sendMessageFromServer({message:error.message,category:"secondary_alert"})
      throw new Error("hubo un error")
     }

 }


 const validateToken = async() => {
   try {
      const token = localStorage.getItem("token")
      if(!token){
         console.log("google")
        const {data} = await axiosClient<User>("/user/google",{
         withCredentials:true
       })
       console.log(data)
       dispatch(login(data))
      }else{
         const {data} = await axiosClient("/user/validate")
     
         const {user:{email,name,valid,role}} = data
         const body = {
            email,
            name,
            valid,
            role
         }
         
         dispatch(login(body))  
      }
    
   } catch (error) {
      console.log("aqui lleguer")
      startOnlogout()
   }   
}





 return {
    message,
    state,
    user,
    sendMessageFromServer,
    startChecking,
    startOnlogout,
    startLogin,
    validateToken
 }
}