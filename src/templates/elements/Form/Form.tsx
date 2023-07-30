import  { useRef, useState } from 'react';
import './form.scss';


export default function Form ({openModal}: {openModal: () => void}) {    
    const _name = useRef<HTMLInputElement>(null)
    const _phone = useRef<HTMLInputElement>(null)
    const _email = useRef<HTMLInputElement>(null)
    const _message = useRef<HTMLTextAreaElement>(null)

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
        <form id="form-submit" className='form' onSubmit={onSubmitHandler} >            
            <div className="form__item">
                <label htmlFor="name" className="form__label" >Your Name:</label>
                <input ref={_name} className="form__input" name="name" type="text" ></input>                                    
            </div>
            <div className="form__item">
                <label htmlFor="phone" className="form__label">Your Phone:</label>
                <input ref={_phone} className="form__input" name="phone" type="phone" ></input>                                    
            </div>
            <div className="form__item">
                <label htmlFor="email" className="form__label">Your Email:</label>
                <input ref={_email} className="form__input"  name="email"  type="email"  ></input>                                    
            </div>
            <div className="form__item">
                <label htmlFor="message" className="form__label">Your Message:</label>                       
                <textarea ref={_message} className="form__textarea" name="message" ></textarea>   
            </div>
            <button type="submit" className="form__button button">
                SEND MESSAGE
            </button>                        
        </form>
    )
}
