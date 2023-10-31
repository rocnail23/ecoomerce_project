import { Login, Register } from "../../../interfaces/InterfacesForm";
import * as yup from "yup"

export const registerInitialValues:Register= {

    name: "",
    email:"",
    password:"",
    password2:""

}

export const loginInitialValues: Login = {
    email: "",
    password:""
}



export const registerErrorSchema = yup.object().shape({
    name: yup.string()
                     .min(3, "num should be at least 3 characters")
                     .max(12, "num should be max 12 characters")
                     .required("this field is required"),
    email: yup.string()
                      .email("must be a valid email")
                      .required("this field is required"),
    password: yup.string()
                      .required("this field is required")
                      .min(6, "the password must have a least 6 characters"),
    password2: yup.string()
                      .required("this field is required")
                      .oneOf([yup.ref("password")],"the passwords dont match")                                                                     
                      
  })


export const loginErrorSchema = yup.object().shape({
    email: yup.string()
                     .email("invalid email")
                     .required("this field is required"),
    password: yup.string()
                       .required("this field is required")                 
})