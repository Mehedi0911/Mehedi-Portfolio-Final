import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './ProjectsCard.css'
const ProjectCard = (props) => {
    const { image, title, features, live, githubFront, githubBack, tech } = props.project;

    const handleLiveLinkClick = () => {
        window.open(live);
    }
    const handleLGitHubLinkClick = () => {
        window.open(githubFront);
    }
    return (
        <div style={{borderRadius:'5px', background:'#0e0d21'}} className="mb-2 p-5 card-container">
            <img className="w-100 image-fluid" src={image} alt=""/>
            <h6 onClick={handleLiveLinkClick} className="text-left mb-3 mt-2 brand-text">{title}<FontAwesomeIcon className="brand-text ml-3" icon={faExternalLinkAlt} /></h6>
            <div className="d-flex mb-3">
                {
                    tech.map(t=> <small style={{borderRadius:'5px'}} className="mr-2 text-fluid text-left text-white p-2 bg-dark">{t}</small>)
                }
            </div>
            <ul>
                {
                    features.map(feat=> <li className="text-left text-white">{feat}</li>)
                }
            </ul>
            <div className="d-flex">
                <h6 onClick={handleLGitHubLinkClick} className="text-white bg-dark p-2">Check Codes at <FontAwesomeIcon className="brand-text ml-2" icon={faGithub} /></h6>
            </div>
        </div>
    );
};

export default ProjectCard;