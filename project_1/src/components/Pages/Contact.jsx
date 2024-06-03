import React, {useState, useEffect} from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from './Contact.module.css'
import {MdAddIcCall, MdEmail} from "react-icons/md"
import {ImLocation2} from "react-icons/im"
import { Fade } from 'react-reveal'
import Modal from '../Modal'


function Contact({myTheme}) {

    const [showModal, setShowModal] = useState(false)

    const handleClosemodal = () => {
        setShowModal(!showModal)
    }
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wkz8lfe', 'template_6zk9vfg', form.current, 'vg_JxPRRTh9vOJUJo')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          setShowModal(true)
      };


    useEffect(() => {
        setTimeout(() => {
            setShowModal(false)
        }, 5000);
    })
  return (
    <div className={style.container1} data-theme={myTheme}>

    <div className={style.container}>
        <h1 className={style.h1}>Contact Me </h1>
        <Fade top >
        <div className={style["con-info"]}>
            <div>
                <MdAddIcCall color="orangered" size={30} />
                <h3>Call Me On</h3>
                <h4>+234 080 5108 5595</h4>
            </div>
            <div>
            <ImLocation2 color="orangered" size={30} />
                <h3>Location</h3>
                <h4>  No. 38 Irepolodun Adeyalo Tioya Ibadan</h4>
            </div>
            <div>
            <MdEmail color="orangered" size={30} />
                <h3>Email</h3>
                <h4> Yusuffwaris8@gmail.com</h4>
            </div>
        </div>
        </Fade>
        
            <form  ref={form} onSubmit={sendEmail}>

               
                <div className={style["form-1"]}>
                <input type="text" name='user_name' placeholder='Full Name' required/>
                <input type="email" name='user_email' placeholder='Email' required/>
                </div>
                <div className={style["form-2"]}>
                <input type="text" name='subject' placeholder='Subject' required/>
                <textarea name="message" required placeholder='Say something....' cols="30" rows="10"></textarea>
                <button type='submit'>Submit</button>
                </div>

            </form>
        
    </div>

    {showModal && <Modal closeModal={handleClosemodal}/>}
    {/* {<Modal/>} */}
    </div>
  )
}

export default Contact;