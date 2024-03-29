import { Form, Formik } from 'formik';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { loginErrorSchema, loginInitialValues } from './data/dataForm';
import { MyImput } from '../components/MyImput';
import { Login } from '../../interfaces/InterfacesForm';
import { useAuth } from '../hooks/useAuth';





export const LoginPage = () => {

  const {startLogin} = useAuth()
  const navigate = useNavigate()

  const hadleSubmit = (values :Login) => {
       
           startLogin(values)
           .then(() => navigate("/"))
           .catch((error) => console.log(error))
  }
          
      
  
  return (
    <div className="register animate__animated animate__fadeIn" >
        <div className="register_welcome">
        <h1>Welcome Back styleCrash</h1>
        <span>the best way of dress</span>
        </div>
        <div className='register_form'>
                  <Formik 
                  initialValues={loginInitialValues}
                  validationSchema={loginErrorSchema}
                   onSubmit={hadleSubmit}
                  >
                {() => (
                    <Form>
                        
                <MyImput 
                name='email' 
                label='email'/>

                <MyImput 
                name='password' 
                type='password' 
                label='password'/>
                
                <button type='submit' className="btn-input btn-black">Login</button>
                <a  href="http://localhost:4000/api/v1/login/google"> <GoogleButton
                style={{ width: "100%", marginTop: "15px" }}
                type="light" // can be light or dark
              /></a>
                    </Form>
                )}
              
              </Formik>
            <div className="sign_option">
                <p>dont have a account? <span><Link to="/welcome/register">Register!</Link></span></p>
            </div>        
        </div>
    
    </div>
  )
}
