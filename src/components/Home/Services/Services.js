import React from 'react';
import ServiceBox from '../ServiceBox/ServiceBox';
import  webDev from '../../../Image/programming.png';
import  uiDesign from '../../../Image/programming (1).png';
import  bugFix from '../../../Image/bug.png';
const Services = () => {

    const serviceData = [
        {
            icon:webDev,
            title:"Web Development",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
            backGround:"#6C6CE5"
        },
        {
            icon:uiDesign,
            title:"UI/UX Design",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
            backGround:"#EDD94C"
        },
        {
            icon:bugFix,
            title:"Bug Fixes",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
            backGround:"lightSalmon"
        },
    ]
    
    return (
        <section className="container w-75" id="service">
            <h5 className="section-heading">Services</h5>
            <div className="row">
                {
                    serviceData.map(service => <ServiceBox service={service}></ServiceBox>)
                }
            </div>
            <p className="text-center text-white">Looking for a custom project? <span className="brand-text">Click Here</span> for a Quote</p>
        </section>
    );
};

export default Services;