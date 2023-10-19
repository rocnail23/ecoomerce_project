import "../styles/Register.css"
import GoogleButton from 'react-google-button'
import "../styles/Register.css"
import { useForm } from "../../hooks"
import { RegisterValues } from "../model/modelsForm"


interface Props {
    changeForm: () => void
}

export const Register = ({changeForm}:Props) => {


    const {
        email,form,handleChange,
        name,password,password2
    } = useForm<Register>(RegisterValues)

    console.log(form)
  return (
    <div className="register animate__animated animate__fadeIn" >
        <div className="register_welcome">
        <h1>Welcome to styleCrash</h1>
        <span>the best way of dress</span>
        </div>
        <div className="register_form">
            <form>
                <div className="formGroup">
                    <label>name</label>
                    <input type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}  />
                </div>
                <div className="formGroup">
                    <label>email</label>
                    <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange} />
                </div>
                <div className="formGroup">
                    <label>password</label>
                    <input 
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password} />
                </div>
                <div className="formGroup">
                    <label>repeat password</label>
                    <input 
                    type="password"
                    name="password2"
                    value={password2}
                    onChange={handleChange} />
                </div>
                <button className="btn-input btn-black">Register</button>
                <GoogleButton
                    style={{width:"100%", marginTop:"15px"}}
                    type="light" // can be light or dark
                    onClick={() => { console.log('Google button clicked') }}
                        />
            </form>   
            <div className="sign_option">
                <p>Already have a account ? <span onClick={changeForm}>Login!</span></p>
            </div>        
        </div>
    </div>
  )
}
