import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';
//import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from  '@fortawesome/free-brands-svg-icons';
import { faGithub } from  '@fortawesome/free-brands-svg-icons';
//import Sweet Alert
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';


const Login = () => {

    const { signIn, resetPassword , signInWithGoogle } = useContext(AuthContext);

    const handleSubmit = event =>{
    
        event.preventDefault();
        const email  =  event.target.email.value ;
        const password = event.target.password.value ;

        signIn(email, password)
        .then(result => {
            Swal.fire(
                'Login Success !'
              )  
        })
        .catch(error => {
            toast.error("This Account isn't available. Please, Create your Account First");
        })
    

    
    } 


///////////// Google Sign In //////////////////////////////////////

const handleGoogleSignin = () =>{
    signInWithGoogle()
    .then(result => {
         console.log(result.user);
    })
}







    return (
        <div className='container d-flex flex-column justify-content-center w-100 align-items-center'>
              <ToastContainer  className="toast-position"
                                    position="top-center"
                                    autoClose={10000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="dark"></ToastContainer>
                <div>
                    <h1 className='fw-bold text-center'>Log in </h1>
                </div>

                <div className='ms-5 w-50 mt-4 p-5 border border-3 border-dark rounded-4'>
                                {/* ///////// LogIn Form ///////////// */}
                        <Form onSubmit={handleSubmit} className='w-100'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fw-semibold fs-3'>Email address</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Enter email" className='border border-dark border-2' />
                                    <Form.Text className="text-muted">
                                  
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='fw-semibold fs-3'>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Password" className='border border-dark border-2' />
                                </Form.Group>
                               

                                <p className='my-2 fw-semibold'>Don't Have an Account ? <span><Link to='../register'> Create a new Account </Link></span></p>   

                                <Button variant="dark" type="submit" className='w-100'>
                                    SIGN IN
                                </Button>

                                <div onClick={resetPassword} className='my-4'>
                                    <p className='text-primary'>Did you Forget your Password ?</p>
                                </div>
                                <div className='my-4 text-center'>
                                    <p>----Signin with social Accounts----</p>
                                    <Button onClick={handleGoogleSignin} className='btn btn-dark ms-3' title="Signin with Google"><FontAwesomeIcon icon={faGoogle} className='fs-4'/></Button> {"  "}
                                    <Button className='btn btn-dark ms-3' title="Signin with Github"><FontAwesomeIcon icon={faGithub} className='fs-3'/></Button>
                                </div>
                        </Form>
                </div>
           
        </div>
    );
};

export default Login;