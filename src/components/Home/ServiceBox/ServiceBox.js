import React from 'react';
import './ServiceBox.css'
const ServiceBox = ({ service }) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="text-center text-white p-3 box-content" style={{ background: service.backGround }}>
                <img style={{ height: '100px' }} src={service.icon} alt="" />
                <h2 className="m-2">{service.title}</h2>
                <p style={{fontSize:'1.25rem'}}>{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceBox;