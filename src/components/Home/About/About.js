import React from 'react';
import image from '../../../Image/profile.png'
import Stats from '../Stats/Stats';
import './ABout.css'
const About = () => {
   
    return (
        <section className="container w-75" id="about">
            <h5 className="section-heading">About me</h5>
            <div className="row">
                <div className="col-md-3">
                    <img className="mb-3" src={image} alt="" />
                </div>
                <div className="col-md-9 about-content p-3">
                    <div className="row">
                        <div className="col-md-6 text-white">
                            <h4 className="brand-text mt-2">Objective</h4>
                            <p className="description mt-3">Proactive M.E.R.N Stack Developer seeking opportunity to bring knowledge of Programming, Design, and media to Web Development position with Companies.</p>
                            
                        </div>
                        <div className="col-md-6">
                            <div className="ex-one mb-2">
                                <div className="heading mb-2 d-flex justify-content-between">
                                    <h5 className="text-white">Development</h5>
                                    <h5 className="text-white">85%</h5>
                                </div>
                                <div className="bar-bg">
                                    <div style={{ background: "tomato", width: "85%" }} className="bar"></div>
                                </div>

                            </div>
                            <div className="ex-one mb-2">
                                <div className="heading mb-2 d-flex justify-content-between">
                                    <h5 className="text-white">UI/UX</h5>
                                    <h5 className="text-white">75%</h5>
                                </div>
                                <div className="bar-bg">
                                    <div style={{ background: "#EDD94C", width: "75%" }} className="bar"></div>
                                </div>

                            </div>
                            <div className="ex-one mb-2">
                                <div className="heading mb-2 d-flex justify-content-between">
                                    <h5 className="text-white">Graphics</h5>
                                    <h5 className="text-white">95%</h5>
                                </div>
                                <div className="bar-bg">
                                    <div style={{ background: "#572991", width: "95%" }} className="bar"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Stats></Stats>
        </section>
    );
};

export default About;