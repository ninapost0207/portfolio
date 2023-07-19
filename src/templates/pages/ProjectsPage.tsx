import { useEffect } from "react";
import plenco from "../../assets/images/plenco-main.jpg";
import formation from "../../assets/images/formation.jpg";

export default function ProjectsPage () {
    let activeSlideIndex: number = 0;
    useEffect(() => {
        const sidebar: HTMLElement | null = document.querySelector('.sidebar');
        const slidesCount: number = document.querySelectorAll('.sidebar__item').length;   
        if (sidebar !== null) {
            sidebar.style.top = (slidesCount-1) * (-1) * 100 + `vh`;
        }
    });
    
    function changeSlide(direction: string) {
            const container: HTMLElement | null = document.querySelector('.projects-page__container');
            const sidebar: HTMLElement | null = document.querySelector('.sidebar');
            const mainSlide: HTMLElement | null = document.querySelector('.main-slide');
            const slidesCount: number = document.querySelectorAll('.sidebar__item').length;                                                                                               
            
            
            if (sidebar !== null) {
                sidebar.style.top = (slidesCount-1) * (-1) * 100 + `vh`;
            }
            
            if(direction === 'up') {                  
                activeSlideIndex++;
                if(activeSlideIndex === slidesCount) {
                    activeSlideIndex = 0;
                }        
            } else {                   
                activeSlideIndex--;
                if(activeSlideIndex < 0) {
                    activeSlideIndex = slidesCount - 1;
                }        
            }
            const height: number | undefined = container?.clientHeight; 
            
            
            if (height !== undefined ) {
                let transYSide: string = 'translateY('+ activeSlideIndex * height + 'px)';
                let transYMain: string = 'translateY('+ activeSlideIndex  * (-1) * height + 'px)';
                
                if (sidebar !== null) {                    
                    sidebar.style.transform = transYSide;                    
                }
                if (mainSlide !== null) {                    
                    mainSlide.style.transform =  transYMain;
                }
                
            }          
   
        }
    
    

    return (
        <div className='projects-page__container'>            
            <div className="sidebar">
                <div className="sidebar__item" style={{ background: 'red' }}>                      
                    <a href="https://demo.wiseup.dev/plenco/home.html">
                        <h1>Plenco</h1>
                    </a>
                </div>
                <div className="sidebar__item" style={{ background: 'blue' }}>
                    <a href="https://www.formation.ai/">
                        <h1>Formation</h1>
                    </a>
                </div>
                <div className="sidebar__item" style={{ background: 'green' }}>
                    <a href="https://www.irkswimming.ru/">
                        <h1>IrkSwimming</h1>
                    </a>
                </div>
                <div className="sidebar__item" style={{ background: 'yellow' }}>
                    <a href="https://www.irkswimming.ru/">
                        <h1>Repair Design</h1>
                    </a>
                </div>                
            </div>
            <div className="main-slide">
                <div className="main-slide__item"
                  style={{ background: "beige" }}
                    
                >   <div className="main-slide__image-container">
                      <h1>Repair Design</h1>  
                    </div></div>
                <div className="main-slide__item"
                  
                >   <div className="main-slide__image-container">
                        
                    </div>
                </div>
                <div className="main-slide__item"
                >
                    <div className="main-slide__image-container">
                        <img src={ formation } alt="formation" />
                    </div>
                </div>
                <div className="main-slide__item" >
                    <div className="main-slide__image-container">
                        <img src={ plenco } alt="plenco" />
                    </div>
                </div>
            </div>
            <div className="controls">
                <button className="down-button projects-page__button" onClick={() =>changeSlide('down')}>
                    <i className="arrow arrow_down"></i>
                </button>
                <button className="up-button  projects-page__button" onClick={() =>changeSlide('up')}>
                    <i className=" arrow arrow_up"></i>
                </button>
            </div>
        </div>
    );
}