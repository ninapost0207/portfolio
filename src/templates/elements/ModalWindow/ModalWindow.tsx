import Modal from 'react-modal';
import { useState } from 'react';
import './modal-window.scss';

Modal.setAppElement('#root');

export default function ModalWindow () {
    const [modalIsOpen, setIsOpen] = useState<boolean>(true);
    
      
  
    function closeModal() {      
      setIsOpen(false);
    }
     return (
      <Modal
          isOpen={modalIsOpen} 
          closeTimeoutMS={2000}           
          onRequestClose={closeModal}  
          className='modal opened'
          
      >
          <button className="modal__button" onClick={closeModal}>
              <span className="cross"></span>
          </button>
          <h1 className='modal__header'>Thank you. Your message is delivered</h1>
      </Modal>
     )
}