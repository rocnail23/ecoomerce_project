import { useState } from "react"
import { sideOptions } from "../data"
import "../styles/SiderBar.css"
import {  NavLink } from "react-router-dom"
import { useAuth } from "../../Auth/hooks/useAuth"


export const SideBar = () => {

    const [extendSideBar, setExtendSideBar] = useState(false)
    const {user} = useAuth()
    const switchExtend = () => {
        setExtendSideBar(value => !value)
    }

  return (
    <div className="sideBar">
        <ul className={`shadow sideBar_ul ${extendSideBar && "isOpen"}`}>

         {sideOptions.map(option => {
          if( option.text == "admin" && user.role != "admin"){
            return  null
          }else if(option.path){
            return <NavLink  to={option.path!} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "link"
          }> 
          
          <li className="sideBar_item" key={option.id}>
                   <i className={option.icon}></i>
                  <h4>{option.text}</h4>   
              </li>
              
              </NavLink >
          }else{
           return <li className="sideBar_item" key={option.id}>
                   <i className={option.icon}></i>
                  <h4>{option.text}</h4>   
              </li>
          }
         } )}
            <li onClick={switchExtend} className={`sideBar_item ${ extendSideBar && "btn_SideBar"}`}>
            <i className={`bx bx-chevron-${extendSideBar ? "left":"right"}`} ></i>
            </li>
        </ul>
        </div>
  )
}
