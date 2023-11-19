import Modal from 'react-modal';
import "../styles/Modal.css"


Modal.setAppElement("#root");

interface Props {
  openModal: () => void,
  closeModal: () => void,
  modalIsOpen: boolean
}

export default function ReactModal({closeModal,modalIsOpen}:Props) {
   
 
  
   
  
    
     

    return (
      <div >
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
        
           <div className='modal_header'>
           <h2  className='modal_title teko'>Product</h2>
           <button className='modal_btn_close' onClick={closeModal}><i className='bx bx-x-circle bx-md'></i></button>
           </div>
          <form className="modal_form">
          <div className='modal_form_principal'>
          <div className='modal_form_area'>
            <label className='teko'>title</label>
            <input type="text" />
           </div>
           <div className='modal_form_area'>
            <label className='teko'>price</label>
            <input type="number" />
           </div>
          </div>
           <div className='modal_form_area'>
            <label className='teko'>description</label>
            <textarea/>
           </div>
           <hr />
          </form>
        </Modal>
      </div>
    );
  }

  