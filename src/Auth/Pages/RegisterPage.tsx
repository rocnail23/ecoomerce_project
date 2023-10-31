import "../styles/Register.css";
import GoogleButton from "react-google-button";
import "../styles/Register.css";
import { Form, Formik } from "formik";
import { registerErrorSchema, registerInitialValues } from "./data/dataForm";
import { Register } from '../../interfaces/InterfacesForm';
import { MyImput } from "../components/MyImput";
import axiosClient from "../../apis/axiosclient";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";




export const RegisterPage = () => {

  const {sendMessageFromServer} = useAuth()

  const handleSubmit = async(values: Register) => {
    const url = window.location.protocol + window.location.host + "/welcome/verifyUser/"
    const body = {
      url,
      ...values
    }
    
    try {
      await axiosClient.post('/user',body)
    sendMessageFromServer({message:"codigo de verificacion envia al correo",category:"primary_alert"})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error :any) {
      if(error.message == "Network Error" ) return sendMessageFromServer({message:"error network", category:"secondary_alert"})
      sendMessageFromServer({message:"ups has been an error", category:"secondary_alert"})
    }
   
  };
   
  return (
    <div className="register animate__animated animate__fadeIn">
      <div className="register_welcome">
        <h1>Welcome to styleCrash</h1>
        <span>the best way of dress</span>
      </div>
      <div className="register_form">
        <Formik
          initialValues={registerInitialValues}
          validationSchema={registerErrorSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>  
                
              <MyImput name="name" label="name"/>
              <MyImput name="email" type="email" label="email"/>
              <MyImput name="password" type="password" label="password"/>
              <MyImput name="password2" type="password" label="repeat-password"/>

              <button type="submit" className="btn-input btn-black">Register</button>
              <GoogleButton
                style={{ width: "100%", marginTop: "15px" }}
                type="light" // can be light or dark
                onClick={() => {
                  console.log("Google button clicked");
                }}
              />
            </Form>
          )}
        </Formik>
        <div className="sign_option">
          <p>
            Already have a account ? <span><Link to="/welcome/login">Login!</Link></span>
          </p>
        </div>
      </div>
    </div>
  );
};
