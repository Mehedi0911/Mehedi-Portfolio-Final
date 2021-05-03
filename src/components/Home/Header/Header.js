import React from 'react';
import './Header.css'
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from 'react-particles-js';
import mehediImage from '../../../Image/Mehedi.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
const Header = () => {
    const handleLinkClick = (link) => {
        window.open(link);
    }
    const handleOnclick = () => {
        const url = 'https://drive.google.com/uc?export=download&id=170z7A8O9DeFn5pzcaTL8f6DpC8tlKcfe';
        window.open(url);
    }
    return (
        <section className="container top-header d-flex justify-content-center align-items-center" id="header">
            
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
                    <FontAwesomeIcon onClick={() => handleLinkClick('https://www.facebook.com/mehedi.mosharrof19911/')} className="mr-3 Slinks" icon={faFacebook} />
                    <FontAwesomeIcon onClick={() => handleLinkClick('https://www.facebook.com/mehedi.mosharrof19911/')} className="mr-3 Slinks" icon={faInstagram} />
                    <FontAwesomeIcon onClick={() => handleLinkClick('https://www.linkedin.com/in/mehedi-mosharrof/')} className="mr-3 Slinks" icon={faLinkedin} />
                    <FontAwesomeIcon onClick={() => handleLinkClick('https://github.com/Mehedi0911')} className="Slinks" icon={faGithub} />
                </div>
                </ScrollAnimation>
               <div className="d-flex justify-content-center">
               <ScrollAnimation animateIn="flipInY" duration={2}><button className="brand-btn-primary mt-3 mr-2">HIRE ME</button></ScrollAnimation>
                <ScrollAnimation animateIn="flipInY" duration={2}><button onClick={handleOnclick} className="brand-btn-primary mt-3">Resume</button></ScrollAnimation>
               </div>


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