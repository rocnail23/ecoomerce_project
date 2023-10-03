import GoogleButton from 'react-google-button';
import { useForm } from '../../hooks';
import { LoginValues } from '../model/modelsForm';

interface Props {
    changeForm: () => void
}


export const Login = ({changeForm}:Props) => {

  const {handleChange,email,password} = useForm<Login>(LoginValues)
  
  return (
    <div className="register" >
        <div className="register_welcome">
        <h1>Welcome Back</h1>
        <span>La mejor manera de vestir</span>
        </div>
        <div className='register_form'>
            <form>
                <div className="formGroup">
                    <label>email</label>
                    <input 
                    type="email"
                    value={email}
                    name='email'
                    onChange={handleChange} />
                </div>
                <div className="formGroup">
                    <label>password</label>
                    <input 
                    type="password"
                    value={password}
                    name='password'
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
                <p>dont hava a account? <span onClick={changeForm}>Register!</span></p>
            </div>        
        </div>
    </div>
  )
}
