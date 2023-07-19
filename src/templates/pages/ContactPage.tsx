import React, { useState } from 'react';
import Modal from 'react-modal';
import telephone from '../../assets/icons/phone.svg';
import mail from '../../assets/icons/email.svg';
import address from '../../assets/icons/home.svg';

Modal.setAppElement('#root');

interface Message {
    name: string;
    phone: string;
    email: string;
    message: string
}

export default function ContactPage () {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
      //setTimeout(() => closeModal(), 2000)
    }     
  
    function closeModal() {
      setIsOpen(false);
    }

    const onChangeNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target instanceof HTMLInputElement ? event.target.value : undefined;
        if (value !== undefined) setName(value)
    }
    const onChangePhoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target instanceof HTMLInputElement ? event.target.value : undefined;
        if (value !== undefined) setPhone(value)
    }
    const onChangeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target instanceof HTMLInputElement ? event.target.value : undefined;
        if (value !== undefined) setEmail(value)
    }
    const onChangeMessageHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target instanceof HTMLInputElement ? event.target.value : undefined;
        if (value !== undefined) setMessage(value)
    }

    function onSubmitHandler(event: React.FormEvent) {
        event.preventDefault();
        if (name.length && phone.length && email.length) {
            const info: Message = {
                name: name,
                phone: phone,
                email:email,
                message: message
            }
            sendMessage(info);
            openModal()
           
        }
    }
    function sendMessage(message: Message) {
        const bot = new Bot("----", "----");
    
        bot.sendMessage(JSON.stringify(message), null, null, true)
            .then(res => {})
            .then (() => {
                setName('')
                setPhone('')
                setEmail('')
                setMessage('')
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
        <button  onClick={openModal}> OPEN</button>
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
            <div className='flex flex-row justify-between align-center'>
                <form id="form-submit" className='contact-page__input-block' onSubmit={onSubmitHandler}>
                    <h4>Get in touch</h4>
                    <div className="contact-page__input-block__item">
                        <label htmlFor="name" className="contact-page__input-block__label" >Your Name:</label>
                        <input className="contact-page__input-block__input" id="name" value={name} onChange={onChangeNameHandler} required></input>                                    
                    </div>
                    <div className="contact-page__input-block__item">
                        <label htmlFor="phone" className="contact-page__input-block__label">Your Phone:</label>
                        <input className="contact-page__input-block__input" id="phone" value={phone} onChange={onChangePhoneHandler} required></input>                                    
                    </div>
                    <div className="contact-page__input-block__item">
                        <label htmlFor="email" className="contact-page__input-block__label">Your Email:</label>
                        <input className="contact-page__input-block__input" id="email"  value={email} onChange={onChangeEmailHandler} required></input>                                    
                    </div>
                    <div className="contact-page__input-block__item">
                        <label htmlFor="message" className="contact-page__input-block__label">Your Message:</label>                       
                        <textarea className="contact-page__input-block__input" id="message" rows={8} cols={50} autoComplete="off"  value={message} onChange={onChangeMessageHandler}></textarea>   
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