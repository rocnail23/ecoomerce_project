import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AuthPage from "../Auth/routes/AuthRoute"
import { Ecommerce } from "../Ecommerce/routes/Ecommerce"
import { Message } from "../Auth/components/Message"

const RouterApp= () => {
  return (
    <Router>
      <Routes>
      <Route path="/welcome/*" Component={AuthPage} />
      <Route path="/*" Component={Ecommerce} />
      </Routes>
      <Message/>
    </Router>
  )
}

export default RouterApp