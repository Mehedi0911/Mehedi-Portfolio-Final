import React from 'react';

const ProjectCard = (props) => {
    const { image, title, features, live, githubFront, githubBack, tech } = props.project;
    return (
        <div className="mb-3">
            <div className="row">
                <div className="col-md-4">
                    <div style={{borderRadius:'5px'}} className="p-3 bg-white">
                    <img className="w-100" src={image} alt="" />
                    </div>
                </div>
                <div className="col-md-8">
                   <div style={{borderRadius:'5px'}} className="p-3 bg-white">
                   <h6 className="brand-text">{title}</h6>
                   <ul>
                       {
                           features.map(feat => <li>{feat}</li>)
                       }
                   </ul>
                   <div className="d-flex text-white w-100">
                       {
                        tech.map(t => <p style={{background:'#121127', padding:'.25rem .75rem', borderRadius:'10px', marginRight:'1rem'}}>{t}</p>)
                       }
                   </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;