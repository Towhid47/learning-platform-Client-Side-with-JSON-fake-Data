import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCardsSummary from '../CourseCardsSummary/CourseCardsSummary';

const CourseCards = () => {
     const course = useLoaderData();

    return (
        <div>
            <h2 className='text-center'>{course.length} Course Available </h2>
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