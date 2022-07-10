import React from "react";
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hex44yf', 'template_1my7y5c', form.current, 'CQOi8-0ChE4ALBWiY')

    e.target.reset()
  }; 

  return (
    <section id="contact"> 
    <h5>Entrar em contato</h5>
    <h2>Contato</h2>

    <div className="container contact__container">
      <div className="contact__options">
       <article className="contact__option">
         <MdOutlineEmail className="contact__option-icon"/>
         <h4>Email</h4>
         <a href="mailto:silvacaio295@gmail.com" target='_blank' className="btn btn-primary">Enviar mensagem</a>
       </article>

       <article className="contact__option">
         <BsWhatsapp className="contact__option-icon"/>
         <h4>WhatsApp</h4>
         <a href="https://api.whatsapp.com/send?phone=+559499033173" target='_blank' className="btn btn-primary">Enviar mensagem</a>
       </article>

      </div>
      {/* EN OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}> 
        <input type="text" name="name" placeholder="Seu nome completo obrigatório" />
        <input type="email" name="email" placeholder="Seu email" required/>
        <textarea name="message" rows="7" placeholder="Sua mensagem" required></textarea>
        <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
      </form>
    </div>
    </section>
  )
}

export default Contact