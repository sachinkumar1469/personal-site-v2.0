import React from 'react'
import './Contact.scss'
import {FaUserAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {RiMessageFill} from 'react-icons/ri'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9910phh', 'template_96dm1ua', form.current, 'lcv-kRU6Q1wFtP8z0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Wanna Share Something?</h5>
      <h2>Contact</h2>
      <div className="container contact_cont">
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="name">
              <FaUserAlt/>
              <input type="text" name="name" id="" placeholder='Your Name' className='input' required/>
            </div>
            <div className="email">
              <MdEmail/>
              <input type="email" name="email" id="" placeholder='Your Email' className='input'  required/>
            </div>
            <div className="message">
              <RiMessageFill/>
              <textarea name="meesage" id="" rows="1" placeholder='Your Message' required className='input'></textarea>
            </div>
            <span className="form-btn">
              <button type="submit" className='btn btn-primary'>Send Meesage</button>
            </span>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
