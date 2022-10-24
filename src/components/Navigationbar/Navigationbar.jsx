import React from 'react';
import './Navigationbar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Navigationbar = () => {
    return (
        <div>
               <Navbar bg="black" variant='dark' expand="lg">
                            <Container>
                                <Navbar.Brand href="/" className='nav-title fs-2'><span id='logo-font' className='bg-light text-black px-3 rounded-pill'>{'</>'}</span>  CS-Tutor</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    {/* <NavLink to="/">Home</NavLink>
                                    <NavLink to="/courses">Courses</NavLink>
                                    <NavLink to="/faq">FAQ</NavLink>
                                    <NavLink to="/blog">Blog</NavLink>
                                    <NavLink to="/login">Login</NavLink> */}


                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/courses">Courses</Nav.Link>
                                    <Nav.Link href="/faq">FAQ</Nav.Link>
                                    <Nav.Link href="/blog">Blog</Nav.Link>
                                    <Nav.Link href="/login">Login</Nav.Link>                                                        
                                </Nav>
                                </Navbar.Collapse>
                            </Container>
                </Navbar>
                <p className='bg-dark fs-5 text-light text-end'>Dark Mod & Light Mod Toggle</p>
        </div>
    );
};

export default Navigationbar;