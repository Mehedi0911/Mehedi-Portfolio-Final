import React from 'react';
import './ServiceBox.css'
const ServiceBox = ({ service }) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="text-center text-white p-3 box-content" style={{ background: service.backGround }}>
                <img style={{ height: '50px' }} src={service.icon} alt="" />
                <h5 className="m-2">{service.title}</h5>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceBox;