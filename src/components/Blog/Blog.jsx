import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='container bg-black'>
                 <Accordion defaultActiveKey="0" className='mt-5' >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is cors?</Accordion.Header>
                            <Accordion.Body>
                            Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Why should we use `firebase`? What other options do you have to implement authentication?</Accordion.Header>
                            <Accordion.Body>
                            The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                            </Accordion.Body>
                        </Accordion.Item>



                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How does the private route work?</Accordion.Header>
                            <Accordion.Body>
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
                            </Accordion.Body>
                        </Accordion.Item>



                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                            <Accordion.Body>
                            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications
                            </Accordion.Body>
                        </Accordion.Item>







                  </Accordion>
        </div>
    );
};

export default Blog;