import React, { Component } from "react";
import { Link } from "react-router-dom";

class CourseCard extends Component {
  render() {
    const { course } = this.props;

    return (
      <div className="card shadow h-100 text-center  bg-light">

        <div className="card-body fw-bold ">
          <h5>{course.name}</h5>

          <p>Duration: {course.duration}</p>

          <p>₹ {course.price}</p>

          <Link to={`/course/${course.id}`}>
            <button className="btn btn-info">
              View Details
            </button>
          </Link>

        </div>

      </div>
    );
  }
}

export default CourseCard;