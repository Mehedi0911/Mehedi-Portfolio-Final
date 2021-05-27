import React from 'react';
import emailjs from 'emailjs-com';

import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStreetView, faEnvelopeOpen, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
   
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gmail', 'portfolio-message', e.target, 'user_YkG7RU6RPjqI9ELTlnD7y')
          .then((result) => {
            alert('Your Message has been Sent')
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
              alert(error.text);
          });
          e.target.reset();
    }
    return (
        <section className="container w-75" id="contact">
            
            <h5 className="section-heading">Get in Touch</h5>
            <h3 className="text-center text-white mb-5">Let's Talk Your Projects</h3>
            <div className="row">
                <div className="col-md-7">
                    <div className="p-3 form-container">
                        <form onSubmit={sendEmail} className="contact-form">
                           <div className="d-flex justify-content-between">
                           <input name="name" type="text" class="field form-control w-50 mr-3 mb-3" placeholder="Your Name" required/>
                           <input name="email" type="email" class="field form-control w-50" placeholder="Your Email" required/>
                           </div>
                           <input name="subject" type="text" class="field form-control mb-3" placeholder="Subject" required/>
                           <textarea name="message" placeholder="Type Your Message" class="field form-control mb-3" rows="5"></textarea>
                           <input className="brand-btn-primary submit-btn" type="submit" value="Send Message"/>
                        </form>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="p-3 address-container">
                        <div className="contact-box">
                            <h6 className="brand-text"><FontAwesomeIcon className="text-white mr-3" icon={faStreetView} />Address</h6>
                            <p className="text-white">58/2, Dogormora <br/> Savar, Dhaka-1344</p>
                        </div>
                        <div className="contact-box">
                        <h6 className="brand-text"><FontAwesomeIcon className="text-white mr-3" icon={faEnvelopeOpen} />Email</h6>
                            <p className="text-white">mehedi.mosh@gmail.com <br/>contact@mehedimo.com</p>
                        </div>
                        <div className="p-3">
                        <h6 className="brand-text"><FontAwesomeIcon className="text-white mr-3" icon={faPhoneSquare} />Phone</h6>
                            <p className="text-white">+8801846249631 <br/>+8801771232378</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;