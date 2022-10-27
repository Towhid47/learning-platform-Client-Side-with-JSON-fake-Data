import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoryList';

const CategoryList = () => {
        const [categories , setCategories ] = useState([]);

        useEffect(()=>{
            fetch('http://localhost:5000/course-categories')
            .then( res => res.json())
            .then( data => setCategories(data));
        } ,[])



    return (
        <div className='bg-black text-light w-100 h-100 py-5'>
             <h1 className='text-center'>All Courses</h1>
             <div className='m-5'>
                 {
                    categories.map(category => <p key={category.id} className='mt-5 List-item p-3'>
                        <Link to={`/courses/${category.id}`} className='text-decoration-none text-info fs-3 '>{category.name}</Link>
                    </p>)
                 }
             </div>
        </div>
    );
};

export default CategoryList;