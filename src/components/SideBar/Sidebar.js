import React from 'react';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBriefcase, faUser, faUserGraduate, faLayerGroup, faBlog, faAddressBook } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
    return (
        <div className="sidebar-container col-md-3">
            <h3 className="brand mb-5">Mehedi<span>.</span></h3>
            <div className="links pt-5">
                <a style={{color:'lightsalmon'}} href="#"><FontAwesomeIcon className="icons" icon={faHome}/>Home</a>
                <a href="#"><FontAwesomeIcon className="icons" icon={faUser}/> About</a>
                <a href="#"><FontAwesomeIcon className="icons" icon={faBriefcase}/> Services</a>
                <a href="#"><FontAwesomeIcon className="icons" icon={faUserGraduate}/> Experience</a>
                <a href="#"><FontAwesomeIcon className="icons" icon={faLayerGroup}/> Portfolio</a>
                <a href="#"><FontAwesomeIcon className="icons" icon={faBlog}/> Blog</a>
                <a href="#"><FontAwesomeIcon className="icons" icon={faAddressBook}/> Contact</a>
            </div>
            <div className="copyright">
                <small>@2021 <br/> Mehedi Mosharrof</small>
            </div>

        </div>
    );
};

export default Sidebar;