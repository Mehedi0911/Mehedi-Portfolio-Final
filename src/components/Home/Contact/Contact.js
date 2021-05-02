import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStreetView, faEnvelopeOpen, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
    return (
        <section className="container w-75">
            <h5 className="section-heading">Get in Touch</h5>
            <h6 className="text-center text-white mb-5">Let's Talk Your Projects</h6>
            <div className="row">
                <div className="col-md-7">
                    <div className="p-3 form-container">
                        <form className="contact-form">
                           <div className="d-flex justify-content-between">
                           <input name="name" type="text" class="field form-control w-50 mr-3 mb-3" placeholder="Your Name" required/>
                           <input name="email" type="email" class="field form-control w-50" placeholder="Your Email" required/>
                           </div>
                           <input name="subject" type="text" class="field form-control mb-3" placeholder="Subject" required/>
                           <textarea name="subject" placeholder="Type Your Message" class="field form-control mb-3" rows="5"></textarea>
                           <input className="brand-btn-primary submit-btn" type="submit" value="Send Message"/>
                        </form>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="p-3 address-container">
                        <div className="contact-box">
                            <h6 className="brand-text"><FontAwesomeIcon className="text-white mr-3" icon={faStreetView} />Address</h6>
                            <small className="text-white">58/2, Dogormora <br/> Savar, Dhaka-1344</small>
                        </div>
                        <div className="contact-box">
                        <h6 className="brand-text"><FontAwesomeIcon className="text-white mr-3" icon={faEnvelopeOpen} />Email</h6>
                            <small className="text-white">mehedi.mosh@gmail.com <br/>contact@mehedimo.com</small>
                        </div>
                        <div className="p-3">
                        <h6 className="brand-text"><FontAwesomeIcon className="text-white mr-3" icon={faPhoneSquare} />Phone</h6>
                            <small className="text-white">+8801846249631 <br/>+8801771232378</small>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;