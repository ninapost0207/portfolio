import { useMemo, useState } from "react";
import Gallery from "../../elements/Gallery/Gallery";
import  portfolio from '../../../assets/data/portfolio'
import './projects.scss';
import link from '../../../assets/icons/link.svg';

export default function Projects () {
    const [activeSlide, setActiveSlide] = useState<number>(0)

    const onSlideClick = (newIndex: number) => {
        if (newIndex < 0) {
            return setActiveSlide(portfolio.length-1)
        }
        if (newIndex >= portfolio.length) {
            return setActiveSlide(0)
        }
        setActiveSlide(newIndex)
    }
    
    const dataReversed = useMemo(() => {
        return [...portfolio].reverse()
    }, [])
    

    
    const leftSlide = <div className="sidebar" style={{top: `-${100*(portfolio.length - activeSlide -1)}%`}}>
        {dataReversed.map((project) => {
            return (
                <div className="sidebar__item" key={project.header}>                      
                    <a href={project.href}>
                        <h1>{project.header}</h1>  
                        <img src={link} alt="To the Website" />                      
                    </a>                    
                </div>
            )
        })}
    </div>
        

    const rightSlide = <div className="main-slide" style={{bottom: `${100*(activeSlide)}%`}}>      
        {portfolio.map((project) => {
            return (
                <div className="main-slide__item" key={project.href}>   
                    <h5>{project.description}</h5>
                    <h5>{project.stack}</h5>
                    <div className="main-slide__image-container">
                        <Gallery images={project.photos} url={project.href} />
                    </div>
                    
                </div>
            )
        })}          
    </div>
    

    return (
        <div className='projects-page projects-page__container'>  
            {leftSlide}   
            {rightSlide}
            <div className="controls">
                <button className="button_down projects-page__button" onClick={() => onSlideClick(activeSlide-1)}>
                    <div className="arrow arrow_down"></div>
                </button>
                <button className="button_up  projects-page__button" onClick={() => onSlideClick(activeSlide+1)}>
                    <div className=" arrow arrow_up"></div>
                </button>
            </div>
        </div>
    );
}