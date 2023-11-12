import { useEffect } from "react"
import axiosClient from "../../apis/axiosclient"
import { ChangeEmail, ChangeName, ChangePassword } from "../components/ChangeInfo"



export const UserPage = () => {

  return (
    <div className="animate__animated animate__fadeIn">
      <h3 className="title_3 teko">data user</h3>
      <hr className="m-b2" />
      <div className="m-b2">
      <ChangeName/>
      <ChangeEmail/>
      </div>
      <h3 className="title_3 teko">User Password</h3>
      <hr className="m-b2"/>
      <ChangePassword/>
    </div>
  )
}
