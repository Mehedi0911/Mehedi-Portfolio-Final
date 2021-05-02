import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faGithub, faCss3, faJs, faNodeJs, faReact, faFigma } from '@fortawesome/free-brands-svg-icons'
import { faServer} from '@fortawesome/free-solid-svg-icons'
const Tools = () => {
    return (
        <section className="container w-75">
            <h6 className="section-heading">Top Expertise</h6>
            <div className="tools row text-white">
                <div className="icons-holder text-center col-md-2">
                <FontAwesomeIcon className="icons" icon={faJs}/>
                <h6>JavaScript</h6>
                </div>
                <div className="icons-holder text-center col-md-2">
                <FontAwesomeIcon className="icons" icon={faReact}/>
                <h6>React</h6>
                </div>
                <div className="icons-holder text-center col-md-2">
                <FontAwesomeIcon className="icons" icon={faNodeJs}/>
                <h6>Node.js</h6>
                </div>
                <div className="icons-holder text-center col-md-2">
                <FontAwesomeIcon className="icons" icon={faServer}/>
                <h6>mongodb</h6>
                </div>
                <div className="icons-holder text-center col-md-2">
                <FontAwesomeIcon className="icons" icon={faFigma}/>
                <h6>Figma</h6>
                </div>
                <div className="icons-holder text-center col-md-2">
                <FontAwesomeIcon className="icons" icon={faGithub}/>
                <h6>github</h6>
                </div>       
            </div>
            
        </section>
    );
};

export default Tools;