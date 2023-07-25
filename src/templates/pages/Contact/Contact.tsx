import  { useRef, useState } from 'react';

import telephone from '../../../assets/icons/phone.svg';
import mail from '../../../assets/icons/email.svg';
import address from '../../../assets/icons/home.svg';
import './contacts.scss'
import ModalWindow from '../../elements/ModalWindow/ModalWindow';




export default function Contact () {
  const _name = useRef<HTMLInputElement>(null)
  const _phone = useRef<HTMLInputElement>(null)
  const _email = useRef<HTMLInputElement>(null)
  const _message = useRef<HTMLTextAreaElement>(null)
    
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);  

    function openModal() {      
      setIsOpen(true);
      setTimeout(() => setIsOpen(false), 2000)
    }     

    function onSubmitHandler(event: React.FormEvent) {
      event.preventDefault();
      if (!_name.current || !_email.current || !_phone.current || !_message.current) return
      
      sendMessage(`${_name.current.value} with phone number: ${_phone.current.value} and email: ${_email.current.value} has sent you a message: ${_message.current.value}`);      
      openModal()
      
    }
    
           
       
    const sendMessage = async (message: string) => {
        const urlMessage = `https://api.telegram.org/bot${process.env.REACT_APP_TOKEN}/sendMessage`

        try {
            const response = await fetch(urlMessage, {
                method: "POST",
                headers: { "Content-Type": 'application/json'},
                body: JSON.stringify({ chat_id: process.env.REACT_APP_CHATID, text: message})          
            })
            if (!response.ok) {
                alert("Unable to send message. Try again later")
                return
            } 
            if (!_name.current || !_email.current || !_phone.current || !_message.current) return
            _name.current.value = '';
            _email.current.value = '';
            _phone.current.value = '';
            _message.current.value = '';
        } catch (err) {
            alert("Unable to send message. Try again later")
        }        
    }


    return (
        <div className='contact-page container'>    
            {modalIsOpen ? <ModalWindow /> : null}
            
            <h1 >Contact me</h1> 
            <div className=' flex flex-row justify-between align-center contact-page_row'>
                <form id="form-submit" className='contact-page__input-block' onSubmit={onSubmitHandler} >
                    <h4>Get in touch</h4>
                    <div className="contact-page__input-block__item">
                        <label htmlFor="name" className="contact-page__input-block__label" >Your Name:</label>
                        <input ref={_name} className="contact-page__input-block__input" name="name" type="text" required></input>                                    
                    </div>
                    <div className="contact-page__input-block__item">
                        <label htmlFor="phone" className="contact-page__input-block__label">Your Phone:</label>
                        <input ref={_phone} className="contact-page__input-block__input" name="phone" type="phone" required></input>                                    
                    </div>
                    <div className="contact-page__input-block__item">
                        <label htmlFor="email" className="contact-page__input-block__label">Your Email:</label>
                        <input ref={_email} className="contact-page__input-block__input"  name="email"  type="email" required ></input>                                    
                    </div>
                    <div className="contact-page__input-block__item">
                        <label htmlFor="message" className="contact-page__input-block__label">Your Message:</label>                       
                        <textarea ref={_message} className="contact-page__input-block__textarea" name="message" ></textarea>   
                    </div>
                    <button type="submit" className="contact-page__input-block__button button">SEND MESSAGE</button>                        
                </form>
                <div className="contact-page__contacts-block">
                    <a className="contact-page__contacts-block__item flex flex-row align-center" href="tel:+16043531170" target="blank">
                        <img className="contact-page__contacts-block__icon" src={ telephone } alt="phone" />
                        <div>
                            <h6>Phone</h6> 
                            <p>+1 604 3531170</p>
                        </div>
                    </a>
                    
                    <a className="contact-page__contacts-block__item flex flex-row align-center"href="mailto:ninapost0207@gmail.com" target="blank">
                        <img className="contact-page__contacts-block__icon" src={ mail } alt="email" />
                        <div>
                            <h6>Email</h6> 
                            <p>ninapost0207@gmail.com</p>
                        </div>
                    </a>
                    
                    <a className="contact-page__contacts-block__item flex flex-row align-center" href="https://goo.gl/maps/zPkkPq95vryibymr7" target="blank">
                        <img className="contact-page__contacts-block__icon" src={ address } alt="phone" />
                        <div>
                            <h6>Address</h6> 
                            <p>Coquitlam BC, Canada</p>
                        </div>
                    </a>
                </div>
            </div> 
        </div> 
      );
    
  }