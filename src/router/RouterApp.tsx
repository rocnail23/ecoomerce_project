import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AuthPage from "../Auth/Pages/AuthPage"
import { Ecommerce } from "../Ecommerce/routes/Ecommerce"

const RouterApp= () => {
  return (
    <Router>
      <Routes>
      <Route path="/welcome" Component={AuthPage} />
      <Route path="/*" Component={Ecommerce} />
      </Routes>
    </Router>
  )
}

export default RouterApp