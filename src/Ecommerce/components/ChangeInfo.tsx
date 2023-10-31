import React, { useState } from 'react'

export const ChangeEmail = () => {

 const [change, setChange] = useState(true)

  return (
    <div style={{display:"flex",gap:"10px", alignItems:"center"}}>
         <p className="sub_title teko">correo:</p> 
         {change
         ? <p className="sub_title teko">jdanielrojas@gmail.com</p> 
         : <form style={{display:"flex", gap:"10px"}}>
            <input placeholder='change email' className="shadow" type="text" style={{border:"none",borderRadius:"5px",outline:"none"}} />
            <button style={{width:"100px",backgroundColor:"green",color:"white",borderRadius:"15px",height:"25px"}}>aceptar</button>
         </form> }
         <button onClick={() => setChange(!change)} style={{width:"100px",backgroundColor:"green",color:"white",borderRadius:"15px",height:"25px"}}>{change ? "change email" : "cancel"}</button>
    </div>
  )
}


export const ChangeName = () => {

  const [change, setChange] = useState(true)
 
   return (
     <div style={{display:"flex",gap:"10px", alignItems:"center"}}>
          <p className="sub_title teko">name:</p> 
          {change
          ? <p className="sub_title teko">Jose</p> 
          : <form style={{display:"flex", gap:"10px"}}>
             <input placeholder='change name' className="shadow" type="text" style={{border:"none",borderRadius:"5px",outline:"none"}} />
             <button style={{width:"100px",backgroundColor:"green",color:"white",borderRadius:"15px",height:"25px"}}>aceptar</button>
          </form> }
          <button onClick={() => setChange(!change)} style={{width:"100px",backgroundColor:"green",color:"white",borderRadius:"15px",height:"25px"}}>{change ? "change name" : "cancel"}</button>
     </div>
   )
 }
 

 export const ChangePassword = () => {

  const [change, setChange] = useState(true)
 
   return (
     <div style={{display:"flex",gap:"10px", alignItems:"center"}}>
           {!change && <form style={{display:"flex", gap:"10px"}}>
            <input placeholder='new password' className="shadow" type="text" style={{padding:"0.2rem",border:"none",borderRadius:"5px",outline:"none"}} />
            <button style={{width:"100px",backgroundColor:"green",color:"white",borderRadius:"15px",height:"25px"}}>aceptar</button>
            </form>}
          <button onClick={() => setChange(!change)} style={{width:"150px",backgroundColor:"green",color:"white",borderRadius:"15px",height:"25px"}}>{change ? "change Password" : "cancel"}</button>
     </div>
   )
 }
 
 

