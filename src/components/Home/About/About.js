import React from 'react';
import image from '../../../Image/profile.png'
import Stats from '../Stats/Stats';
import './ABout.css'
const About = () => {
    const handleOnclick = () => {
        const url = 'https://drive.google.com/uc?export=download&id=170z7A8O9DeFn5pzcaTL8f6DpC8tlKcfe';
        window.open(url);
    }
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
                            <p className="description mt-3">Proactive M.E.R.N Stack Developer seeking opportunity to bring knowledge of Programming, Design, and media to Web Development position with Companies.</p>
                            <button onClick={handleOnclick} className="brand-btn-primary mb-3">Download CV</button>
                        </div>
                        <div className="col-md-6">
                            <div className="ex-one mb-2">
                                <div className="heading mb-2 d-flex justify-content-between">
                                    <small className="text-white">Development</small>
                                    <small className="text-white">85%</small>
                                </div>
                                <div className="bar-bg">
                                    <div style={{ background: "tomato", width: "85%" }} className="bar"></div>
                                </div>

                            </div>
                            <div className="ex-one mb-2">
                                <div className="heading mb-2 d-flex justify-content-between">
                                    <small className="text-white">UI/UX</small>
                                    <small className="text-white">75%</small>
                                </div>
                                <div className="bar-bg">
                                    <div style={{ background: "#EDD94C", width: "75%" }} className="bar"></div>
                                </div>

                            </div>
                            <div className="ex-one mb-2">
                                <div className="heading mb-2 d-flex justify-content-between">
                                    <small className="text-white">Graphics</small>
                                    <small className="text-white">95%</small>
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