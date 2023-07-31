import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import './projects.scss';
import Gallery from "../../elements/Gallery/Gallery";
import  portfolio from '../../../assets/data/portfolio'
import link from '../../../assets/icons/link.svg';

export default function Projects () {
    useEffect(() => {document.title = 'My Projects' || "Nina Postnikova";});
    const [activeSlide, setActiveSlide] = useState<number>(0)
    const [showScrollButton, setShowScrollButton] = useState<boolean>(false)
    
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
                    <a href={project.href} target="_blank" rel="noreferrer">
                        <h1>{project.header}</h1>  
                        <img src={link} alt="To the Website" />                      
                    </a>                    
                </div>
            )
        })}
    </div>
    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const target = event.currentTarget;
        const clientHeight = target.clientHeight;
        const scrollPosition = target.scrollTop;
        setShowScrollButton((scrollPosition >= clientHeight) ? true : false);        
    };
        

    const rightSlide = <div className="main-slide" style={{bottom: `${100*(activeSlide)}%`}} onScroll={e => handleScroll(e)}>   
        <div id="top"></div>   
        {portfolio.map((project) => {
            return (
                <div className="main-slide__item" key={project.href}>   
                    <h2>{project.description}</h2>
                    <h2>Stack: {project.stack}</h2>
                    <div className="main-slide__image-container">
                        <Gallery images={project.photos} href={project.href} />
                    </div>
                    
                </div>
            )
        })} 
        <a href="#top" className={`main-slide__scroll-button ${showScrollButton ? "" : "hidden"}`}>
            <div className="scroll_up"></div>
        </a>
    </div>
    

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='projects-page projects-page__container'>  
                {leftSlide}   
                {rightSlide}
                <div className="controls">
                    <button tabIndex={0} className="button_down projects-page__button" aria-label={`${activeSlide - 1}`} onClick={() => onSlideClick(activeSlide-1)}>
                        <div className="arrow arrow_down"></div>
                    </button>
                    <button tabIndex={0} className="button_up  projects-page__button" aria-label={`${activeSlide + 1}`} onClick={() => onSlideClick(activeSlide+1)}>
                        <div className=" arrow arrow_up"></div>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}