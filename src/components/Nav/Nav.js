import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, animateScroll } from 'react-scroll';
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navigation = () => {
    return (
        <Container >
            <Navbar style={{ background: '#121127' }} expand="lg" fixed="top" className="w-75 m-auto">
                <Navbar.Brand onClick={() => animateScroll.scrollToTop()} href="#home" className="text-white  brand-logo">Mehedi<span className="brand-text">.</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"><FontAwesomeIcon className="text-white mr-3" icon={faBars} /></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <div className="menu d-flex">
                            <p onClick={() => animateScroll.scrollToTop()} className="mr-3 mb-3 nav-item">
                              home
                            </p>
                            <p className="mr-3 mb-3 nav-item">
                                <Link
                                    activeClass='active'
                                    to='about'
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={600}>
                                    About
                            </Link>
                            </p>
                            <p className="mr-3 mb-3 nav-item">
                                <Link
                                    activeClass='active'
                                    to='service'
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={1000}>
                                    Services
                            </Link>
                            </p>
                            <p className="mr-3 mb-3 nav-item">
                                <Link
                                    activeClass='active'
                                    to='blog'
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={600}>
                                    Blog
                            </Link>
                            </p>
                            <p className="mr-3 mb-3 nav-item">
                                <Link
                                    activeClass='active'
                                    to='project'
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={600}>
                                    Projects
                            </Link>
                            </p>
                            <p className="mr-3 mb-3 nav-item">
                                <Link
                                    activeClass='active'
                                    to='contact'
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={600}>
                                    Contact
                            </Link>
                            </p>
                            
                        </div>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Navigation;