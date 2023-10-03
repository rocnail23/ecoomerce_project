import { useState } from "react"

export const useForm = <T>(formValues:T) => {

    const [form, setform] = useState(formValues)

    const handleChange = ({target}:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = target
        setform({
            ...form,
            [name] : value
        })
    }
    

    return {
        form,
        ...form,
        handleChange
    }

}