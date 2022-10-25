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
                                    {/* <Link to="/">Home</Link>
                                    <Link to="/courses">Courses</Link>
                                    <Link to="/faq">FAQ</Link>
                                    <Link to="/blog">Blog</Link>
                                    <Link to="/login">Login</Link> */}


                                    <Nav.Link href="/" className='ms-3 fw-semibold'>Home</Nav.Link>
                                    <Nav.Link href="/courses" className='ms-3 fw-semibold'>Courses</Nav.Link>
                                    <Nav.Link href="/faq" className='ms-3 fw-semibold'>FAQ</Nav.Link>
                                    <Nav.Link href="/blog" className='ms-3 fw-semibold'>Blog</Nav.Link>
                                    <Nav.Link href="/login" className='ms-3 fw-semibold'>Login</Nav.Link>  
                                   {/* Ekhane User Login korar por Login er pashe user profile pic dekha jabe & login tar poriborte Logout dekhabe */}
                                   <Nav.Link href="/login" className='border border-4 border-secondary rounded-circle px-3 ms-5'>pic</Nav.Link> 
                                </Nav>
                                </Navbar.Collapse>
                            </Container>
                </Navbar>
                <p className='bg-dark fs-5 text-light text-end'>Dark Mod & Light Mod Toggle</p>
        </div>
    );
};

export default Navigationbar;