import React from 'react';
import Pipestars from '../../../Image/PipeStars.jpg'
import TicketNetic from '../../../Image/ticketNetic.jpg'
import PastryBite from '../../../Image/Pastrybite.jpg'
import ProjectCard from '../ProjectsCard/ProjectCard';

const Projects = () => {
    const projectInfo = [
        {
            image:Pipestars,
            title:'PipeStars(Dynamic Web App)',
            features:["CRUD Operation with Express.js and Mongodb, React Router.","Dynamic Admin Panel with different Admin Roles.","Dynamic Admin Panel with different Admin Roles."],
            tech:['Bootstrap','React','Node.js', 'Mongodb', 'Firebase' ],
            live:'https://pipestars.web.app/',
            githubFront:'https://github.com/Mehedi0911/PipeStars',
            githubBack:'https://github.com/Porgramming-Hero-web-course/complete-website-server-Mehedi0911',

        },
        {
            image:TicketNetic,
            title:'TicketNetic (Dynamic Ticket booking app)',
            features:["React Router, Firebase Login, Checkout, Bootstrap UI.","Private Routes, Google Map Integration."],
            tech:['Bootstrap','React',"Router",'Firebase' ],
            live:'https://pipestars.web.app/',
            githubFront:'https://github.com/Mehedi0911/PipeStars',
            githubBack:'https://github.com/Porgramming-Hero-web-course/complete-website-server-Mehedi0911',

        },
        {
            image:PastryBite,
            title:'Pastry(Food API app)',
            features:["Third Party API Integration","Dynamic reciepie Serach,",'Scroll Animations'],
            tech:['HTML5','CSS3','JavaScript', 'API'],
            live:'https://pipestars.web.app/',
            githubFront:'https://github.com/Mehedi0911/PipeStars',
            githubBack:'https://github.com/Porgramming-Hero-web-course/complete-website-server-Mehedi0911',

        },
    ]
    return (
        <section className="container w-75">
            <h6 className="section-heading">Recent Projects</h6>
            
                {
                    projectInfo.map(project => <ProjectCard project={project}></ProjectCard>)
                }
            
        </section>
    );
};

export default Projects;