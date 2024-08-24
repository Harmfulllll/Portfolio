import React, { useRef , useState} from "react";
import "./Contact.css";
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function Contact() {
 const formRef = useRef();


 const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4mtsus6', 'template_y562x9j', formRef.current, {
        publicKey: 'LWk0v6cXYSDoj-kzJ',
      })
      .then(
        () => {
            console.log('SUCCESS!');
            formRef.current.reset();
            toast.success('Message sent successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
           
            toast.error('Message failed to send');
        },
      );
  };
  return (
    <>
     <motion.div 
        className="contact"
    >
         <motion.div   className="text-container">
             <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
             >Keep In Touch</motion.h1>
             <motion.p
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.1 }}
             >
                Got an idea? Ping me for a chat
             </motion.p>

             <div className="contact-medium">
                 <button className="linkedin">
                 <svg stroke="currentColor" fill="#3CCF91" stroke-width="0" viewBox="0 0 448 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                    <a href="https://www.linkedin.com/in/tanvir-hassan-joy/" target="_blank">LinkedIn</a>
                 </button>
                 <button className="github">
                 <svg stroke="currentColor" fill="#3CCF91" stroke-width="0" viewBox="0 0 448 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                    <a href="https://github.com/Harmfulllll"
                    target="_blank"
                    >Github</a>
                 </button>
             </div>
         </motion.div>
         <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
         className="message-form">
             <form action=""
                onSubmit={sendEmail}
               ref={formRef}
             >
                <input type="text"
                  placeholder="Name"
                    name="name"
                />
                <input type="email" 
                    placeholder="Email"
                    name="email"
                    required
                />
                <textarea name="message" 
                    id="message"
                    rows="8"
                    placeholder="Share your idea" 
                    required
                ></textarea>
                <button
                    type="submit"
                >
                    Submit
                </button>
             </form>
         </motion.div>
     </motion.div>
     <div className="footer">
          <p>
            Designed and Developed by Tanvir Hassan Joy <br/>
            Built with <span> React</span>,<span> Framer Motion</span> and a lot of  <span>love </span>
          </p> <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M927.4 273.5v-95.4h-87.9V82.8h-201v95.3h-87.9v95.4h-78.5v-95.4h-88V82.8H183.2v95.3H95.3v95.4H16.7v190.6h78.6v95.4h75.3v95.3H246v95.3h87.9v95.4h100.5v95.3h153.9v-95.3h100.4v-95.4h88v-95.3H852.1v-95.3h75.3v-95.4h78.5V273.5z" fill="#E02D2D"></path></g></svg>
     </div>
     </>
  );
}

export default Contact;

