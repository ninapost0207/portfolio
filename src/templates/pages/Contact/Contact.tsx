import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Form from '../../elements/Form/Form';
import telephone from '../../../assets/icons/phone.svg';
import mail from '../../../assets/icons/email.svg';
import address from '../../../assets/icons/home.svg';
import './contacts.scss'
import ModalWindow from '../../elements/ModalWindow/ModalWindow';



export default function Contact() {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    useEffect(() => { document.title = 'Contact Page' || ""; });



    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >

            <div className='contact-page container'>
                {modalIsOpen ? <ModalWindow /> : null}
                <h1 >Contact me</h1>
                <div className=' flex flex-row justify-between align-center contact-page_row'>
                    <Form openModal={() => setIsOpen(true)} />

                    <div className="contact-page__contacts-block">
                        <a className="contact-page__contacts-block__item flex flex-row align-center" href="tel:+16043531170" target="blank" aria-label="Phone call">
                            <img className="contact-page__contacts-block__icon" src={telephone} alt="phone" />
                            <div>
                                <h2>Phone</h2>
                                <p>+1 604 3531170</p>
                            </div>
                        </a>

                        <a className="contact-page__contacts-block__item flex flex-row align-center" href="mailto:ninapost0207@gmail.com" target="blank" aria-label="Email">
                            <img className="contact-page__contacts-block__icon" src={mail} alt="email" />
                            <div>
                                <h2>Email</h2>
                                <p>ninapost0207@gmail.com</p>
                            </div>
                        </a>

                        <a className="contact-page__contacts-block__item flex flex-row align-center" href="https://goo.gl/maps/zPkkPq95vryibymr7" target="blank" aria-label="Address">
                            <img className="contact-page__contacts-block__icon" src={address} alt="phone" />
                            <div>
                                <h2>Address</h2>
                                <p>Coquitlam BC, Canada</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );

}