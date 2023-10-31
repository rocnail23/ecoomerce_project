import {Field,ErrorMessage} from "formik"
import "../styles/MyInput.css"
import { ErrorComponent } from "./ErrorComponent";


interface Props {
    name: string,
    type?: "email"|"password"|"text"
    label?: string
}



export const MyImput = ({name,type = "text",label}:Props) => {
  return (
     <div className="myInput">
    <label>{label}</label>
    <Field name={name}  type={type} />
    <ErrorMessage  name={name} > 
       {(error) => <ErrorComponent error={error}/>}
    </ErrorMessage>
    </div>
  )
}
