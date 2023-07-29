import './cv.scss';
import skills from '../../../assets/data/skills';
import resume from '../../../assets/documents/Nina_Postnikova_Resume.pdf';


export default function CV () {
    
    return (
        <div className='cv-page container'>
            <div className='cv-page__content'>
                <h1>My Skills</h1>
                
                <div className='cv-page__skills flex flex-row justify-between align-center'>
                    <div className='cv-page__skills-block'>            
                        {skills.map((skill, index) => {
                            if (index < skills.length/2) {
                                return (
                                    <div className='cv-page__skills-block__item'>
                                        <h5>{skill}</h5>
                                        <div className="skill-graph">
                                            <div className="skill-graph__line"></div>
                                        </div>
                                    </div>  
                                ) 
                            } else return null                       
                        })}  
                    </div>
                    <div className='cv-page__skills-block'>            
                        {skills.map((skill, index) => {
                            if (index >= skills.length/2) {
                                return (
                                    <div className='cv-page__skills-block__item'>
                                        <h5>{skill}</h5>
                                        <div className="skill-graph">
                                            <div className="skill-graph__line"></div>
                                        </div>
                                    </div>  
                                ) 
                            }  else return null                         
                        })}  
                    </div>
                </div>  
                <h2>Resume</h2>  
                <a href={resume} download="Resume" target='_blank' rel="noreferrer">
                    <button className="cv-page__button">DOWNLOAD CV</button>
                </a>        

            </div>
        </div> 
    )
};