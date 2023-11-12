import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AuthPage from "../Auth/routes/AuthRoute"
import { Ecommerce } from "../Ecommerce/routes/Ecommerce"
import { Message } from "../Auth/components/Message"
import { useAppSelector } from "../store/hooks/redux-hooks"

const RouterApp= () => {
  const  {state} = useAppSelector(data => data.auth)
 


  return (
    <Router>
      <Routes>
      {state == "authenticated"
      ? (
        <Route path="/*" Component={Ecommerce} />
      )
      :(
        <>
        <Route path="/welcome/*" Component={AuthPage} />
        <Route path="/*" Component={Ecommerce} />
        </>
      )}
      
      
      </Routes>
      <Message/>
    </Router>
  )
}

export default RouterApp