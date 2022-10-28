import React, { useState } from 'react';
import './Navigationbar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth.context';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import CategoryList from '../Courses/CategoryList/CategoryList';




const Navigationbar = () => {

      const { user , logout } = useContext(AuthContext);

      const handleLogout = () =>{
        logout()
        .then(toast.warning("User Logged Out !"))
        .catch(error=> console.log(error))
      }

    ////////////// Dark Mode & Light Mode Theme Toggle event Handler ////////////////////
       const [isDarkMod, setIsDarkMod] = useState(false);

       const themeToggle = (isDarkMod) =>{
         setIsDarkMod(!isDarkMod); 
        console.log(!isDarkMod);

       }




    return (
        <div>
               <Navbar bg="black" variant='dark' expand="lg">
                            <Container>
                                <Navbar.Brand href="/" className='nav-title fs-2'><span id='logo-font' className='bg-light text-black px-3 rounded-pill'>{'</>'}</span>  CS-Tutor</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <NavLink className={`m-4 fw-semibold text-light nav-item`} to="/">Home</NavLink>
                                    <NavLink className="m-4 fw-semibold text-light nav-item" to="/courses">Courses</NavLink>
                                    <NavLink className="m-4 fw-semibold text-light nav-item" to="/faq">FAQ</NavLink>
                                    <NavLink className="m-4 fw-semibold text-light nav-item" to="/blog">Blog</NavLink>

                {/*////////////// Conditional Rendering For Login & Logout Toggle //////////////////////////////////*/}
                                    {(user?.email)  ? 
                                       <> <NavLink className="m-4 fw-semibold text-light nav-item"><Button onClick={handleLogout} className='btn-light'>Logout <FontAwesomeIcon icon={faRightFromBracket} /></Button></NavLink>
                                           <Link to="" title={user.displayName} className='border border-4 border-secondary rounded ms-5'><img className='w-100' src={user.photoURL} alt=""></img></Link>  
                                       </>  
                                          :  
                                       <><NavLink className="m-4 fw-semibold text-light nav-item" to="/login">Login</NavLink></>
                                 }                                   
                                </Nav>

                                  {/*///////////////// Conditional Rendering For Dark Mode & Light Mode Toggle////////////////////////////////  */}
                                        <div onClick={()=>themeToggle(isDarkMod)} >
                                            {
                                                (isDarkMod) ?  <FontAwesomeIcon icon={faSun} className="text-light fs-4"/> : <FontAwesomeIcon icon={faMoon} className="fs-4 text-light"/> 
                                            }
                                        </div>       




                                
                                <div className='d-lg-none'>
                                    <CategoryList></CategoryList>
                                </div>

                                </Navbar.Collapse>
                            </Container>
                </Navbar>
        
      
                                    
                                



        </div>
    );
};

export default Navigationbar;