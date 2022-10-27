import React from 'react';
import { Outlet } from 'react-router-dom';
import CategoryList from './CategoryList/CategoryList';

const Courses = () => {

    return (
        <div className='d-flex container justify-content-between'>
                <div className='w-50 d-none d-lg-block'>
                     <CategoryList></CategoryList>
                </div>

                <div className='w-75'>

                     <Outlet></Outlet>
                </div>
        </div>
    );
};

export default Courses;