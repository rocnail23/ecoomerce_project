import Modal from 'react-modal';



Modal.setAppElement(document.getElementById("#root")!);

interface Props {
  openModal: () => void,
  closeModal: () => void,
  modalIsOpen: boolean
}

export default function ReactModal({openModal,closeModal,modalIsOpen}:Props) {
    let subtitle: {style:{color:string}} | null
 
  
   
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle!.style.color = '#f00';
    }
  
    
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      

    return (
      <div>
        <button style={{zIndex:"20000"}} onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
  }

  