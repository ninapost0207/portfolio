import gitHub from "../../../assets/icons/github.svg";
import linkedIn from "../../../assets/icons/linkedin.svg";
import facebook from "../../../assets/icons/facebook.svg";
import './home.scss';
import { motion } from "framer-motion";

export default function Home () {
    return (
        <motion.div            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            
            <div className='home-page container'>
                <div className='home-page__content'>
                    <h1>Hello, I am Nina Postnikova</h1>
                    <h3>I am a Frontend developer. Adept at writing well-structured, organized code and employing a mobile-first approach.</h3>
                    <div className='home-page__icons-block flex flex-row justify-between  align-center'>
                        <a href="https://github.com/ninapost0207" target='blank' className='home-page__icons-block__item'>
                            <img src={gitHub} alt="gitHub" className='home-page__icon' />
                        </a>
                        <a href="www.linkedin.com/in/nina-postnikova-505829241" target='blank' className='home-page__icons-block__item'>
                            <img src={linkedIn} alt="linkedIn" className='home-page__icon' />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100094232073336&mibextid=ZbWKwL" target='blank' className='home-page__icons-block__item'>
                            <img src={facebook} alt="facebook" className='home-page__icon facebook-icon' />                 
                        </a>
                    </div>            

                </div>
            </div> 
        </motion.div>
    );
}