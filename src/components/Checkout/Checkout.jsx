import React from 'react';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Checkout = () => {
    const detailsLoad = useLoaderData();
    console.log(detailsLoad);

    const handleBuy = () =>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thanks for purchase!',
            showConfirmButton: false,
            timer: 1500
          })
    }


    return (
      <div className="container text-center">
        <h1 className='bg-info p-4 my-5'>Checked Out</h1>
        <h1>Topic Name : {detailsLoad.course_title}</h1>
        <h3>Course Category: {detailsLoad.category}</h3>
        <Card className="m-5">
          <Card.Img variant="top" src={detailsLoad.image} />
          <Card.Body>
            <Card.Text className="fs-4">{detailsLoad.details}</Card.Text>
            { 
              
              <Link to={`../../checkout/${detailsLoad.course_id}`}>
                {" "}
                <Button onClick={handleBuy} variant="dark" className="w-100 p-3 fs-4">
                   Buy This Course 
                </Button>
              </Link>
            }
          </Card.Body>
        </Card>
      </div>
    );
};

export default Checkout;