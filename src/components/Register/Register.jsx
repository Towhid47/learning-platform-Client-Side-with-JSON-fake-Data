import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';



const Register = () => {
    return (
        <div>
               <div className='container d-flex flex-column justify-content-center w-100 align-items-center'>
                <div>
                    <h1 className='fw-bold text-center'>Register</h1>
                    <p className='fw-bold text-center'>Create Your New Account to get our Latest updates</p>
                </div>

                <div className='ms-5 w-50 mt-4 p-5 border border-3 border-dark rounded-4'>
                                {/* ///////// LogIn Form ///////////// */}
                        <Form className='w-100'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label className='fw-semibold fs-3'>Enter Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Full Name" className='border border-dark border-2' />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                               
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fw-semibold fs-3'>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" className='border border-dark border-2' />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='fw-semibold fs-3'>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" className='border border-dark border-2' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>

                                <p className='my-2 fw-semibold'>Already Have an Account ? <span><Link to='../login'> LOG IN </Link></span></p>

                                <Button variant="dark" type="submit" className='w-100'>
                                    SIGN UP
                                </Button>
                        </Form>
                </div>
           
        </div>
        </div>
    );
};

export default Register;