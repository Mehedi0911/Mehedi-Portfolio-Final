import React from 'react';

const Footer = () => {
    return (
        <section className="d-flex justify-content-center align-items-center p-0" style={{background:'#0e0d21', height:'50px'}}>
            <p style={{fontSize:'.75rem', paddingTop:'.65rem'}} className="text-center text-secondary">mehedi mosharrof©{new Date().getFullYear()} all rights reserved</p>
        </section>
    );
};

export default Footer;