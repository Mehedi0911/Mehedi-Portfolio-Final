import React from 'react';
import './Header.css'
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from 'react-particles-js';
import mehediImage from '../../../Image/Mehedi.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
const Header = () => {
    return (
        <section className="container top-header d-flex justify-content-center align-items-center">
            
            <div className="header-content">

                <img src={mehediImage} alt="" />
                <ScrollAnimation animateIn="bounceInLeft" duration={1}>
                <h6 className="text-white mt-2" >Mehedi Mosharrof</h6>
                </ScrollAnimation>
                <ScrollAnimation animateIn="bounceInRight" duration={2}>
                <h4 className="text-white mt-2"><span className="brand-text">M.E.R.N. Stack </span> Developer</h4>
                </ScrollAnimation>
                <ScrollAnimation animateIn="bounce" duration={2}>
                <div className="social-icons mt-2">
                    <FontAwesomeIcon className="text-white mr-3" icon={faFacebook} />
                    <FontAwesomeIcon className="text-white mr-3" icon={faInstagram} />
                    <FontAwesomeIcon className="text-white mr-3" icon={faLinkedin} />
                    <FontAwesomeIcon className="text-white" icon={faGithub} />
                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="flipInY" duration={2}><button className="brand-btn-primary mt-3">HIRE ME</button></ScrollAnimation>


            </div>
            
            <div className="particles">
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 20
                            },
                            "size": {
                                "value": 2
                            },
                            "color": {
                                "value": "#ffa07a"
                            }

                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}
                    height="100vh"
                    width="100%"

                />
            </div>

        </section>
    );
};

export default Header;