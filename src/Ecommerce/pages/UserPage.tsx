import { useAuth } from "../../Auth/hooks/useAuth"
import "../styles/UserPage.css"



export const UserPage = () => {

  const {user} = useAuth()

  return (
    <div className="animate__animated animate__fadeIn">
      <h3 className="title_3 teko">data user</h3>
      <hr className="m-b2" />
      <div className="userPage_data m-b2">
        <h3 className="teko">name :</h3> <p className="teko">{user.name}</p>
      </div>
      <div className="userPage_data">
        <h3 className="teko">email :</h3> <p className="teko">{user.email}</p>
      </div>
    </div>
  )
}
