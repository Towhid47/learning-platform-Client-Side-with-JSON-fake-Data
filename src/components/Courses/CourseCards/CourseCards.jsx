import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCardsSummary from '../CourseCardsSummary/CourseCardsSummary';

const CourseCards = () => {
     const course = useLoaderData();

    return (
        <div>
            <h1 className='my-5'>{course.course_title}</h1>
            <h3 className='mt-5 text-center'>{course.length} Course Available </h3>
            {
                course.map(singleCourse => <CourseCardsSummary
                 key={singleCourse.course_id}
                 courseSingle={singleCourse}
                ></CourseCardsSummary>)
            }
        </div>
    );
};

export default CourseCards;