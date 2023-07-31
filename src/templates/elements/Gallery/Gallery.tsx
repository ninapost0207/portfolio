import {useState} from 'react';
import Modal from 'react-modal';
import './gallery.scss';
import link from '../../../assets/icons/link.svg';

interface IGallery {
    images: string[],
    href: string
}



const Gallery: React.FC<IGallery> = ({images=[], href=''}): JSX.Element => {
    const [selectedImage, setSelectedImage] = useState<number>(1);
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    function closeModal() {      
        setIsOpen(false);
    }
    function openModal() {      
        setIsOpen(true);
    }

    const onNavClick = (newIndex: number) => {
        if (newIndex < 0) {
            return setSelectedImage(images.length - 1)
        }
        if (newIndex >= images.length) {
            return setSelectedImage(0)
        }
        setSelectedImage(newIndex)
    }
    

    const pagination = images.map((image, index) => {
        return (
            <button aria-label={`${index}`} className={`gallery__circle__container  ${index === selectedImage ? "selected" : ""}`} onClick={() => onNavClick(index)} key={image} name="Select image">
                <div className="gallery__circle" ></div>
            </button>
        )
    })
    

    return (
        <div className="gallery">                                 
            <img className="gallery__img" src={images[selectedImage]} alt={`${selectedImage + 1}`} onClick={openModal} title="Increase photo"/>

            <div className="gallery__control-block"> 
                <button className="gallery__button" onClick={() => onNavClick(selectedImage - 1)} name="To the left" aria-label={`${selectedImage - 1}`}>
                    <div className="arrow_left arrow"></div>
                </button>
                    {pagination}
                <button className="gallery__button" onClick={() => onNavClick(selectedImage + 1)} name="To the right" aria-label={`${selectedImage + 1}`}>
                    <div className="arrow_right arrow" ></div>
                </button>                                   
            </div>
            <a href={href} target="_blank" rel="noreferrer">
                <img className="gallery__icon" src={link} alt="To the Website" /> 
            </a>
            <Modal
                isOpen={modalIsOpen} 
                closeTimeoutMS={2000}           
                onRequestClose={closeModal}  
                className='modal_photo' 
            >
                <button className="modal__button" onClick={closeModal}>
                    <span className="cross"></span>
                </button>  
                <img  src={images[selectedImage]} alt={`${selectedImage + 1}`} onClick={closeModal} />              
            </Modal>
        </div> 
    );
}


export default Gallery