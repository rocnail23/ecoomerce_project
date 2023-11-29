import "../styles/Modal.css"
import useProduct from '../hooks/useProduct';
import {  useEffect, useRef } from 'react';
import { useForm } from "../hooks/useForm";
import { ProductImages } from './ProductImages';


interface Props {
  openModal: () => void,
  closeModal: () => void,
  modalIsOpen: boolean
}

export default function ReactModal({closeModal,modalIsOpen}:Props) {

  if(!modalIsOpen) return

  const {product,startCreateProduct,startEditProduct,startUploadImg,startSetProduct} = useProduct()
  const {form, handleChange,handleFile,file,cleanFiles} = useForm(product)
  const {description,price,title} = form 

  const refModal = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const outModal = () => {
      if(refModal.current && !refModal.current.contains((event?.target as Node))){
          closeModal()
      }
    }
    document.addEventListener("mousedown",outModal)
    return () => {
      document.removeEventListener("mousedown",outModal)
    }
  },[])

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
     
      try {
        
      if(product?.id){
        startSetProduct({...form,id:product.id,Images:[...product.Images]})
        await startEditProduct(product.id,form)
       }else{
        await startCreateProduct({...form})
       }

       if(file!?.length > 0 && product?.id){
          startUploadImg(file!,product?.id)
          cleanFiles()
       }

      } catch (error) {
        console.log(error)
      }

  }

    return (
      <div ref={refModal}  className="Modal" >

          <form onSubmit={handleSubmit} className="modal_form">
          <div className='modal_header'>
           <h2  className='modal_title teko'>Product</h2>
           <button type="button" className='modal_btn_close' onClick={closeModal}><i className='bx bx-x-circle bx-md'></i></button>
           </div>
          <div className='modal_form_principal'>
          <div className='modal_form_area'>
            <label className='teko'>title</label>
            <input
            onChange={handleChange} 
            type="text"
            name="title"
            value={title} />
           </div>
           <div className='modal_form_area'>
            <label className='teko'>price</label>
            <input 
            onChange={handleChange}
            type="number"
            value={price}
            name="price" />
           </div>
          </div>
           <div className='modal_form_area'>
            <label className='teko'>description</label>
            <textarea
            value={description}
            name="description"
            onChange={handleChange}
            cols={30}/>
           </div>
           <div className='modal_img'>
           <ProductImages Images={product?.Images}/>
           </div>
           <div className="modal_footer">
           <label className="btn-black teko modal_submit" htmlFor="file">new Image</label>
           <input  onChange={handleFile} id="file" style={{display:"none"}} multiple type="file"/>
           <button className='btn-black teko modal_submit' type='submit'>
            {product?.id ? "editar" : "crear"}
           </button>
           </div>
         
          </form>
       
      </div>
    );
  }

  