import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AuthPage from "../Auth/Pages/AuthPage"
import EcommercePage from "../Ecommerce/pages/EcommercePage"

const RouterApp= () => {
  return (
    <Router>
      <Routes>
      <Route path="/welcome" Component={AuthPage} />
      <Route path="/" Component={EcommercePage} />
      </Routes>
    </Router>
  )
}

export default RouterApp