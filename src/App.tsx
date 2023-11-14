import { useEffect } from 'react'
import './App.css'
import RouterApp from './router/RouterApp'
import { useAuth } from './Auth/hooks/useAuth'



function App() {

    

    const {validateToken} = useAuth()
    
    useEffect(() => {
       validateToken()  
    },[])

    

    
    return <RouterApp/>
  

}

export default App
