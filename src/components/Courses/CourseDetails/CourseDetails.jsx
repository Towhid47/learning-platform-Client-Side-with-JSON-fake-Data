import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CourseDetails = () => {
  const detailsLoad = useLoaderData();
  console.log(detailsLoad);
  return (
    <div className="container text-center">
      <h1>Topic Name : {detailsLoad.course_title}</h1>
      <h3>Course Category: {detailsLoad.category}</h3>
      <Card className="m-5">
        <Card.Img variant="top" src={detailsLoad.image} />
        <Card.Body>
          <Card.Text className="fs-4">{detailsLoad.details}</Card.Text>

          {/*//////////////Conditional Rendering by Ternary Operator with Multiple Condition //////////////////////////////////////////////*/}
          {detailsLoad.price === "free" ? (
            <Button variant="dark" className="w-100 p-3 fs-4">
              Get Started For Free
            </Button>
          ) : detailsLoad.price === "premium" ? (
            <Link to={`../../checkout/${detailsLoad.course_id}`}>
              {" "}
              <Button variant="primary" className="w-100 p-3 fs-4">
                Get Premium Access
              </Button>
            </Link>
          ) : (
            <Button variant="dark" className="w-100 p-3 fs-4">
              Get Started For Free
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;
