import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navigation = () => {
    return (
        <Container >
            <Navbar style={{background:'#121127'}} expand="lg"  fixed="top" className="w-75 m-auto">
            <Navbar.Brand href="#home" className="text-white">Mehedi<span className="brand-text">.</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"><FontAwesomeIcon className="text-white mr-3" icon={faBars} /></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <div className="menu">
                    <a href="#home" className="home mr-3 mb-3">Home</a>
                    <a href="#about" className="mr-3 mb-3">About</a>
                    <a href="#link" className="mr-3 mb-3">Service</a>
                    <a href="#link" className="mr-3 mb-3">Projects</a>
                    <a href="#link" className="">Contact</a>
                    </div>

                </Nav>

            </Navbar.Collapse>
        </Navbar>
        </Container>
    );
};

export default Navigation;