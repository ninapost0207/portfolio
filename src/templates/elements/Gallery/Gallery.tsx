import {useState} from 'react';
import './gallery.scss';

interface IGallery {
    images: string[]
}



const Gallery: React.FC<IGallery> = ({images=[]}): JSX.Element => {
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
            <button className={`gallery__circle ${index === selectedImage ? "selected" : ""}`} onClick={() => onNavClick(index)} key={image}></button>
        )
    })
    

    return (
        <div className="gallery">                                 
            <img className="gallery__img" src={images[selectedImage]} alt={`Photo ${selectedImage + 1}`} />
            <div className="gallery__control-block"> 
                <button className="arrow_left" onClick={() => onNavClick(selectedImage - 1)}></button>
                    {pagination}
                <button className="arrow_right"  onClick={() => onNavClick(selectedImage + 1)}></button>                   
            </div>
        </div> 
    );
}


export default Gallery