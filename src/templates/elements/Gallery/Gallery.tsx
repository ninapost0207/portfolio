import {useState} from 'react';
import './gallery.scss';
import link from '../../../assets/icons/link.svg';

interface IGallery {
    images: string[],
    url: string
}



const Gallery: React.FC<IGallery> = ({images=[]}, {url=''}): JSX.Element => {
    const [selectedImage, setSelectedImage] = useState<number>(1)

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
            <button className={`gallery__circle__container  ${index === selectedImage ? "selected" : ""}`} onClick={() => onNavClick(index)} key={image}>
                <div className="gallery__circle" ></div>
            </button>
        )
    })
    

    return (
        <div className="gallery">                                 
            <img className="gallery__img" src={images[selectedImage]} alt={`${selectedImage + 1}`} />
            <div className="gallery__control-block"> 
                <button className="gallery__button" onClick={() => onNavClick(selectedImage - 1)}>
                    <div className="arrow_left arrow"></div>
                </button>
                    {pagination}
                <button className="gallery__button" onClick={() => onNavClick(selectedImage + 1)}>
                    <div className="arrow_right arrow" ></div>
                </button>                                   
            </div>
            <a href={url}>
                <img className="gallery__icon" src={link} alt="To the Website" /> 
            </a>
        </div> 
    );
}


export default Gallery