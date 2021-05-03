import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Pipestars from '../../../Image/PipeStars.jpg'
import TicketNetic from '../../../Image/ticketNetic.jpg'
import PastryBite from '../../../Image/Pastrybite.jpg'
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
            image: Pipestars,
            title: 'PipeStars (Dynamic Web App)',
            features: ["CRUD Operation with Express.js and Mongodb, React Router.", "Dynamic Admin Panel with different Admin Roles.", "Dynamic Admin Panel with different Admin Roles."],
            tech: ['React', 'Node.js', 'Mongodb', 'Firebase'],
            live: 'https://pipestars.web.app/',
            githubFront: 'https://github.com/Mehedi0911/PipeStars',
            githubBack: 'https://github.com/Porgramming-Hero-web-course/complete-website-server-Mehedi0911',

        },
        {
            image: TicketNetic,
            title: 'TicketNetic (Dynamic Ticket booking app)',
            features: ["React Router, Firebase Login, Checkout, Bootstrap UI.", "Private Routes, Google Map Integration."],
            tech: ['Bootstrap', 'React', "Router", 'Firebase'],
            live: 'https://ticketnetic.web.app/',
            githubFront: 'https://github.com/Porgramming-Hero-web-course/react-auth-Mehedi0911',
            githubBack: 'https://github.com/Porgramming-Hero-web-course/complete-website-server-Mehedi0911',

        },
        {
            image: PastryBite,
            title: 'PastryBite (Food API app)',
            features: ["Third Party API Integration", "Dynamic reciepie Serach,", 'Scroll Animations'],
            tech: ['HTML5', 'CSS3', 'JavaScript', 'API'],
            live: 'https://mehedi0911.github.io/PastryBite/',
            githubFront: 'https://github.com/Mehedi0911/PastryBite',
            githubBack: 'https://github.com/Porgramming-Hero-web-course/complete-website-server-Mehedi0911',

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