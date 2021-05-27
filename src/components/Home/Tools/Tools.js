import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faGithub, faCss3, faJs, faNodeJs, faReact, faFigma } from '@fortawesome/free-brands-svg-icons'
import { faServer} from '@fortawesome/free-solid-svg-icons'
const Tools = () => {
    return (
        <section className="container w-75">
            <h3 className="section-heading">Top Expertise</h3>
            <div className="tools row text-white">
                <div className="icons-holder text-center col-md-2">
        <FontAwesomeIcon style={{fontSize:'3rem'}} className="icons mb-3" icon={faJs}/>
                <h3>JavaScript</h3>
                </div>
                <div className="icons-holder text-center col-md-2">
        <FontAwesomeIcon style={{fontSize:'3rem'}} className="icons mb-3" icon={faReact}/>
                <h3>React</h3>
                </div>
                <div className="icons-holder text-center col-md-2">
        <FontAwesomeIcon style={{fontSize:'3rem'}} className="icons mb-3" icon={faNodeJs}/>
                <h3>Node.js</h3>
                </div>
                <div className="icons-holder text-center col-md-2">
        <FontAwesomeIcon style={{fontSize:'3rem'}} className="icons mb-3" icon={faServer}/>
                <h3>mongodb</h3>
                </div>
                <div className="icons-holder text-center col-md-2">
        <FontAwesomeIcon style={{fontSize:'3rem'}} className="icons mb-3" icon={faFigma}/>
                <h3>Figma</h3>
                </div>
                <div className="icons-holder text-center col-md-2">
        <FontAwesomeIcon style={{fontSize:'3rem'}} className="icons mb-3" icon={faGithub}/>
                <h3>github</h3>
                </div>       
            </div>
            
        </section>
    );
};

export default Tools;