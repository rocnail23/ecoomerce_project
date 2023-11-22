import { useState } from 'react';
import useProduct from './useProduct';

export const useModal = () => {
    
    const [modalIsOpen, setIsOpen] = useState(false);
    const {startSetProduct} = useProduct()

    const openModal = () => {
        setIsOpen(true);
      }

    const  closeModal = () => {
        startSetProduct()
        setIsOpen(false);
      }
    
      return {
        modalIsOpen,
        openModal,
     closeModal
      }
    
}