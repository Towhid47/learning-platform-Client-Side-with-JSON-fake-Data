import React from 'react';
//import Lottie Animation
import animation from "../../code-dark.json";
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <div className='d-flex flex-column flex-lg-row align-items-lg-center'>
                 <div className='text-center heading mx-5'>
                    <h1>Learn Computer Science with <span className='text-dark fw-semibold'>CS-Tutor</span></h1>
                    <p className='fw-semibold'>If you're Majoring in Computer Science , Then you're on the right place. Here you can get many Tutorials about Computer Science from Beginner to Advanced. <br/> We provide a lot of Topics including Web Development , Software Engineering , Cyber Security , C , C++ , C# , Artificial Intelligence , Data Science , Data Analytics , Machine Learning , Computer Networking  and so on. <br/>Explore the Website and Choose the Courses in which field you want to build your dreams. <br/> Press the Button Below and Let's Begin </p>
                    <Link to="/courses"><Button className='btn btn-dark'>Explore Courses</Button></Link>
                 </div>

                 {/* animation container */}
                 <div className='ms-5'>
                    <Lottie animationData={animation}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Home;