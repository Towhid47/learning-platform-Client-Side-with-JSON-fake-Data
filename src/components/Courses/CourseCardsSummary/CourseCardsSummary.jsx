import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CourseCardsSummary = ({courseSingle}) => {
    return (
        <div className=' m-5'>
               <Card className='m-lg-5 border border-dark border-3'  style={{  width: '90%'}}>
                        <Card.Img variant="top" src={courseSingle.image} />
                        <Card.Body>
                            <Card.Title>{courseSingle.course_title}</Card.Title>
                            <Card.Text>
                               {courseSingle.details}
                            </Card.Text>
                           <Link to={`/course/${courseSingle.course_id}`}> <Button variant="dark" className='w-100'>Know more about this Course</Button></Link>
                        </Card.Body>
               </Card> 
        </div>
    );
};

export default CourseCardsSummary;