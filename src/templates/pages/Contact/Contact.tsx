import  { useRef, useState } from 'react';

import Modal from 'react-modal';
import telephone from '../../../assets/icons/phone.svg';
import mail from '../../../assets/icons/email.svg';
import address from '../../../assets/icons/home.svg';
import './contacts.scss'

Modal.setAppElement('#root');

interface Message {
    name: string;
    phone: string;
    email: string;
    message: string
}


export default function Contact () {
  const _name = useRef<HTMLInputElement>(null)
  const _phone = useRef<HTMLInputElement>(null)
  const _email = useRef<HTMLInputElement>(null)
  const _message = useRef<HTMLTextAreaElement>(null)
    
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    function openModal() {      
      setIsOpen(true);
      setTimeout(() => closeModal(), 2000)
    }     
  
    function closeModal() {      
      setIsOpen(false);
    }

    

    function onSubmitHandler(event: React.FormEvent) {
      event.preventDefault();
      if (!_name.current || !_email.current || !_phone.current || !_message.current) return
      sendMessage({
        name: _name.current.value,
        email: _email.current.value,
        phone: _phone.current.value,
        message: _message.current.value
      });      
      openModal();
    }
    
           
       
    function sendMessage(message: Message) {
        const bot = new Bot(process.env.REACT_APP_TOKEN || '', process.env.REACT_APP_CHATID || '');
    
        bot.sendMessage(JSON.stringify(message), null, null, true)
            .then(res => {})
            .then (() => {
                if (!_name.current || !_email.current || !_phone.current || !_message.current) {
                    return
                };
                _name.current.value = '';
                _email.current.value = '';
                _phone.current.value = '';
                _message.current.value = '';
            })
            .catch(err => alert(err))   
    }


    class TelegramBotSetup {
        token: string;
        requestUrl: string;
        
        constructor(token: string) {
          this.token = token;
          this.requestUrl = 'https://api.telegram.org/bot';
        }
      
        api(type: string, method: string, body: string | undefined) {
          return new Promise((resolve, reject) => {
            fetch(this.requestUrl + this.token + type, {
              method: method,
              body: body
            }).then(res => {
              resolve(res.json())
            }).catch(err => {
              reject(err)
            })
          })
        }
      }
      
      class Bot extends TelegramBotSetup {
        dcid: string;
        
        constructor(botToken: string, defaultChatID: string) {
          super(botToken);
          this.dcid = defaultChatID;
        }
      
        static start() {         
        }
      
        async getUpdates() {
          try {
            const result = await this.api('/getUpdates', 'GET', undefined)
            return await result
          } catch(e) {
            return await e
          }
        }
      
        async getMe() {
          try {
            const result = await this.api('/getMe', 'GET', undefined)
            return await result
          } catch(e) {
            return await e
          }
        }
      
        async sendMessage(text: string, chatID: string | null, parseMode: string | null, disableNotification: boolean) {
          try {
            const result = await this.api(`/sendMessage?text=${text}&chat_id=${chatID ? chatID : this.dcid}&parse_mode=${parseMode ? parseMode : 'html'}&disable_notification=${disableNotification ? disableNotification : false}`, 'GET', undefined)
            return await result
          } catch(e) {
            return await e
          }
        }
      };
      Bot.start()  

    return (
        <div className='contact-page container'> 
        
            <Modal
                isOpen={modalIsOpen}            
                onRequestClose={closeModal}  
                className="modal"
            >
                <button onClick={closeModal}>
                    <span className="cross"></span>
                </button>
                <h1>Thank you. Your message is delivered</h1>
            </Modal>
            
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
                        <textarea ref={_message} className="contact-page__input-block__textarea" rows={8} cols={50} name="message" ></textarea>   
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