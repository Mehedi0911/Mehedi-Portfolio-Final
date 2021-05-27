import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import plumbStars from '../../../Image/plumbstars.jpg'
import TicketNetic from '../../../Image/ticketNetic.jpg'
import dreamTeam from '../../../Image/dreamTeam.jpg'
import ProjectCard from '../ProjectsCard/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

import "../../../../src/styles.css";


// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);



const Projects = () => {
    const projectInfo = [
        {
            image: plumbStars,
            title: 'PlumbStars (Dynamic Web App)',
            features: ["CRUD Operation with Express.js and Mongodb, React Router.", "Dynamic Admin Panel with different Admin Roles.", "Dynamic User Panel with different User Activities."],
            tech: ['React', 'Node.js', 'Mongodb', 'Firebase', 'MaterialUI', 'stripe'],
            live: 'https://plumbstarsclient.web.app/',
            githubFront: 'https://github.com/Mehedi0911/plumstars',
            githubBack: 'https://github.com/Porgramming-Hero-web-course/complete-website-server-Mehedi0911',

        },
        {
            image: TicketNetic,
            title: 'TicketNetic (Dynamic Ticket booking app)',
            features: ["React Router, Firebase Login, Checkout, Bootstrap UI.", "Private Routes, Google Map Integration."],
            tech: ['Google Map', 'React', "Router", 'Firebase'],
            live: 'https://ticketnetic.web.app/',
            githubFront: 'https://github.com/Porgramming-Hero-web-course/react-auth-Mehedi0911',
            githubBack: 'https://github.com/Porgramming-Hero-web-course/complete-website-server-Mehedi0911',

        },
        {
            image: dreamTeam,
            title: 'DreamTeam (Sports API Web)',
            features: ["Third Party API Integration", "Dynamic Multipage"],
            tech: ['React Router', 'Hooks', 'API'],
            live: 'https://dreamteam91.netlify.app/',
            githubFront: 'https://github.com/Porgramming-Hero-web-course/react-router-Mehedi0911',
           

        },
    ]
    return (
        <section className="container w-75" id="project">
            <h6 className="section-heading">Recent Projects</h6>
            <>
                <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }} pagination={true} className="mySwiper">
                    {
                        projectInfo.map(project => <SwiperSlide><ProjectCard project={project}></ProjectCard></SwiperSlide>)
                    }
                    <p className="text-center text-white pb-5 pt-0"><FontAwesomeIcon className="brand-text mr-3" icon={faArrowLeft} />Swipe<FontAwesomeIcon className="brand-text ml-3" icon={faArrowRight} /></p>
                </Swiper>
            </>
            

        </section>
    );
};

export default Projects;