import './cv.scss'
export default function CV () {
    
    return (
        <div className='cv-page container'>
            <div className='cv-page__content'>
                <h1>My Skills</h1>
                
                <div className='cv-page__skills flex flex-row justify-between align-center'>
                    <div  className='cv-page__skills-block'>
                        <div className='cv-page__skills-block__item'>
                            <h5>HTML5</h5>
                            <div className="skill-graph">
                                <div className="skill-graph__line"></div>
                            </div>
                        </div>
                        <div className='cv-page__skills-block__item'>
                            <h5>JavaScript</h5>
                            <div className="skill-graph"><div className="skill-graph__line"></div></div>
                        </div>
                        <div className='cv-page__skills-block__item'>
                            <h5>GIT</h5>
                            <div className="skill-graph"><div className="skill-graph__line"></div></div>
                        </div>
                        <div className='cv-page__skills-block__item'>
                            <h5>Bootstrap</h5>
                            <div className="skill-graph"><div className="skill-graph__line"></div></div>
                        </div>
                        <div className='cv-page__skills-block__item'>
                            <h5>BEM</h5>
                            <div className="skill-graph"><div className="skill-graph__line"></div></div>
                        </div>
                    </div>
                    <div className='cv-page__skills-block'>
                        <div className='cv-page__skills-block__item'>
                            <h5>CSS3</h5>
                            <div className="skill-graph"><div className="skill-graph__line"></div></div>
                        </div>
                        <div className='cv-page__skills-block__item'>
                            <h5>React</h5>
                            <div className="skill-graph"><div className="skill-graph__line"></div></div>
                        </div>
                        <div className='cv-page__skills-block__item'>
                            <h5>TypeScript</h5>
                            <div className="skill-graph"><div className="skill-graph__line"></div></div>
                        </div>
                        <div className='cv-page__skills-block__item'>
                            <h5>Gulp</h5>
                            <div className="skill-graph"><div className="skill-graph__line"></div></div>
                        </div>
                        <div className='cv-page__skills-block__item'>
                            <h5>Scrum</h5>
                            <div className="skill-graph"><div className="skill-graph__line"></div></div>
                        </div>
                    </div>
                </div>  
                <h1>Resume</h1>  
                <a href="../../assets/documents/Nina_Postnikova_Resume.pdf" download="cv">
                    <button className="cv-page__button">DOWNLOAD CV</button>
                </a>        

            </div>
        </div> 
    )
};