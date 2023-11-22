import { useState, useEffect } from 'react';


export const  useForm = <T>(product:T) => {

    const [form, setForm] = useState(() => {
        return product ? product : {
          title:"",
          description:"",
          price: 0.00
        }
      })

    const [file,setFile] = useState<FileList | null>()

      useEffect(() => {
        if(!product){
          setForm({
            title:"",
            description:"",
            price: 0.00
          })
        }else{
          setForm(product)
        }
      },[product])

      const handleChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({
          ...form,
          [e.target.name] : e.target.value
        })
      }

      const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files)
        setFile(e.target.files)
    }

    const cleanFiles = () => {
      setFile(null)
    }

    return {
      form,
      handleChange,
      handleFile,
      file,
      cleanFiles
    }
}