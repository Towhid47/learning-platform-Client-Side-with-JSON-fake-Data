import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
//import Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../contexts/auth.context';

//import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from  '@fortawesome/free-brands-svg-icons';
import { faGithub } from  '@fortawesome/free-brands-svg-icons';





const Register = () => {

    const [name , setName] = useState("");
     const [email , setEmail] = useState("");
     const [password , setPassword] = useState("");
     const [error , setError] = useState("");

     //////// Get Data from the context API and use it.
     const { createUser, updateName , verifyEmail , signInWithGoogle } = useContext(AuthContext);


   ///// Get the user Name from the name input box.
   const handleName= (e) =>{
      const name = (e.target.value);
        setName(name);
    }

    ///// Get the Email from the form email input box /////////////
    const handleEmail = (e) =>{
        const email = e.target.value;

        /////// Email Validation //////////
        var isValidEmail =  /\S+@\S+\.\S+/.test(email);

        if(!isValidEmail){
            setError("invalid Email. Please Enter Your valid Email.");
            toast.error("invalid Email!");
            return;
        }
        else{
            setEmail(email);
            setError("");
        }
    };


    ///// Get the password from the password input box //////////////
    const handlePassword = (e) =>{
      const password = e.target.value;
       
      ///////// Password Validation //////////////////
      if(password.length < 8){
        setError("Password should be at least 8 characters");
        return;
      }  
      if( ! (/(?=.*\d)/.test(password)) ){
        setError("Password should have at least one digit");
        return;
      }
      setPassword(password);
    }


    ////// Handel Sign Up for Creating a New user Account /////////
    const handleSignUp = (e) =>{
        e.preventDefault();
        //////1. Create New User Account
        createUser(email, password)     //Calling the function which is in Context API (auth.context.js)
        .then(result =>{
            console.log(result.user);
            toast.success("User Created Successfully");

            //////2. Update Name //////////
            updateName(name)
                .then(()=>{
                     toast("Name Updated");   
                })
                 /////3. Email Verification ////////
                 verifyEmail()
                 .then(()=>{
                    toast("Please Check Your Email for verification link");
                 })
                 .catch(error => {
                    setError(error.message);
                    toast.error(error.message);
                 })
            })
             .catch(error => {
                toast.error(error.message);
             })    
                
        .catch(error=>{
            setError(error.message)
        })
    };


////////// Google Sign In //////////////////////////////////////

const handleGoogleSignin = () =>{
    signInWithGoogle()
    .then(result => {
         console.log(result.user);
    })
}



 

    return (
        <div>
               <div className='container d-flex flex-column justify-content-center w-100 align-items-center my-5'>
                <div>
                    <h1 className='fw-bold text-center'>Register</h1>
                    <p className='fw-bold text-center'>Create Your New Account to get our Latest updates</p>
                </div>

                <div className='ms-5 w-50 mt-4 p-5  border border-3 border-dark rounded-4'>
                    <p className='text-center text-danger'>{error}</p>
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
                                {/* ///////// LogIn Form ///////////// */}
                        <Form className='w-100 mt-4'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label className='fw-semibold fs-3'>Enter Your Name</Form.Label>
                                    <Form.Control type="text" onBlur={handleName} placeholder="Full Name" className='border border-dark border-2' required/>
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                               
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fw-semibold fs-3'>Email address</Form.Label>
                                    <Form.Control type="email" onBlur={handleEmail} placeholder="Enter email" className='border border-dark border-2' required/>
                                    <Form.Text className="text-danger">
                                     
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='fw-semibold fs-3'>Password</Form.Label>
                                    <Form.Control type="password" onBlur={handlePassword} placeholder="Please Give a Strong Password" className='border border-dark border-2' required/>
                                </Form.Group>

                                <p className='my-2 fw-semibold'>Already Have an Account ? <span><Link to='../login'> LOG IN </Link></span></p>

                                <Button variant="dark" onClick={handleSignUp} type="submit" className='w-100'>
                                    SIGN UP
                                </Button>

                                <div className='my-4 text-center'>
                                    <p>----Signup with social Accounts----</p>
                                    <Button onClick={handleGoogleSignin} className='btn btn-dark ms-3' title="Signup with Google"><FontAwesomeIcon icon={faGoogle} className='fs-4'/></Button> {"  "}
                                    <Button className='btn btn-dark ms-3' title="Signup with Github"><FontAwesomeIcon icon={faGithub} className='fs-3'/></Button>
                                </div>
                        </Form>
                </div>
           
        </div>
        </div>
    );
};

export default Register;