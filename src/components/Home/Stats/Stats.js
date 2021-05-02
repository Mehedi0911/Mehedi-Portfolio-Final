import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCertificate, faUserTie } from '@fortawesome/free-solid-svg-icons'
const Stats = () => {
    return (
        <section className="container mt-5">
            <div className="stats-container row">
                <div className="d-flex justify-content-center text-white col-md-4 mb-3">
                    <FontAwesomeIcon style={{ fontSize: '2rem' }} className="icons mr-3" icon={faBriefcase} />
                    <div>
                        <h6 className="mb-0">12</h6>
                        <small className="mt-0">Projects Completed</small>
                    </div>
                </div>
                <div className="d-flex justify-content-center text-white col-md-4 mb-3">
                    <FontAwesomeIcon style={{ fontSize: '2rem' }} className="icons mr-3" icon={faUserTie} />
                    <div>
                        <h6 className="mb-0">5</h6>
                        <small className="mt-0">Happy Customers</small>
                    </div>
                </div>
                <div className="d-flex justify-content-center text-white col-md-4 mb-3">
                    <FontAwesomeIcon style={{ fontSize: '2rem' }} className="icons mr-3" icon={faCertificate} />
                    <div>
                        <h6 className="mb-0">2</h6>
                        <small className="mt-0">Certificates</small>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Stats;